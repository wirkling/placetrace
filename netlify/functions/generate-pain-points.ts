import Anthropic from "@anthropic-ai/sdk";
import type { Handler, HandlerEvent } from "@netlify/functions";

interface RequestBody {
  industry: string;
  language: "de" | "en";
}

interface PainPoint {
  id: string;
  title: string;
  description: string;
  category: string;
}

// Retry helper with exponential backoff
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if it's a retryable error (overloaded, rate limit, connection)
      const errorMessage = lastError.message.toLowerCase();
      const isRetryable =
        errorMessage.includes("overloaded") ||
        errorMessage.includes("rate") ||
        errorMessage.includes("529") ||
        errorMessage.includes("connection") ||
        errorMessage.includes("timeout");

      if (!isRetryable || attempt === maxRetries - 1) {
        throw lastError;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delayMs = baseDelayMs * Math.pow(2, attempt);
      console.log(`Retry attempt ${attempt + 1}/${maxRetries} after ${delayMs}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError;
}

const handler: Handler = async (event: HandlerEvent) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { industry, language } = JSON.parse(event.body || "{}") as RequestBody;

    if (!industry || industry.trim().length < 2) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Industry is required" }),
      };
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const systemPrompt = language === "de"
      ? `Du bist ein McKinsey Partner und Experte für operative backend Geschäftsprozesse und Herausforderungen für KMUs.
Antworte NUR mit einem JSON-Array. Keine Einleitung, keine Erklärung.`
      : `You are a McKinsey Partner and expert in operative backend business processes and challenges for SMBs.
Respond ONLY with a JSON array. No introduction, no explanation.`;

    const userPrompt = language === "de"
      ? `Generiere genau 10 typische operative Schmerzpunkte für Unternehmen in der Branche "${industry}".

Fokussiere auf:
- Zeitaufwändige manuelle Prozesse
- Fehleranfällige Workflows
- Datensilos und fehlende Integration
- Wiederkehrende administrative Aufgaben
- Reporting und Compliance-Herausforderungen

Antworte mit diesem exakten JSON-Format:
[
  {
    "id": "1",
    "title": "Kurzer Titel (max 6 Worte)",
    "description": "Beschreibung in 1-2 Sätzen",
    "category": "Eine von: Zeitaufwand|Fehlerquellen|Datenmanagement|Administration|Reporting"
  }
]`
      : `Generate exactly 10 typical operational pain points for businesses in the "${industry}" industry.

Focus on:
- Time-consuming manual processes
- Error-prone workflows
- Data silos and missing integrations
- Recurring administrative tasks
- Reporting and compliance challenges

Respond with this exact JSON format:
[
  {
    "id": "1",
    "title": "Short title (max 6 words)",
    "description": "Description in 1-2 sentences",
    "category": "One of: Time|Errors|Data|Administration|Reporting"
  }
]`;

    // Call Claude API with retry logic
    const response = await withRetry(async () => {
      return anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 2000,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: userPrompt,
          },
        ],
      });
    });

    // Extract text content
    const textContent = response.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      throw new Error("No text response from Claude");
    }

    // Parse JSON response
    const painPoints: PainPoint[] = JSON.parse(textContent.text);

    // Validate response structure
    if (!Array.isArray(painPoints) || painPoints.length === 0) {
      throw new Error("Invalid response structure");
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ painPoints }),
    };
  } catch (error) {
    console.error("Error generating pain points:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to generate pain points",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
