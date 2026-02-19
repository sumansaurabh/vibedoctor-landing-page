import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

// This is your IndexNow API key - generate one at https://www.indexnow.org/
// Store it in your .env file for production
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "your-indexnow-key-here";

export async function loader({ request }: LoaderFunctionArgs) {
  // Return the key file for verification
  return new Response(INDEXNOW_KEY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json();
  const { url } = body;

  if (!url) {
    return new Response("URL is required", { status: 400 });
  }

  const baseUrl = new URL(request.url).origin;

  // Submit to IndexNow
  const indexNowPayload = {
    host: new URL(baseUrl).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${baseUrl}/indexnow.xml`,
    urlList: [url],
  };

  try {
    // Submit to multiple search engines
    const engines = [
      "https://api.indexnow.org/indexnow",
      "https://www.bing.com/indexnow",
    ];

    const responses = await Promise.all(
      engines.map((engine) =>
        fetch(engine, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(indexNowPayload),
        })
      )
    );

    const allSuccessful = responses.every((r) => r.ok);

    return Response.json(
      {
        success: allSuccessful,
        message: allSuccessful
          ? "URL submitted successfully"
          : "Some submissions failed",
      },
      { status: allSuccessful ? 200 : 207 }
    );
  } catch (error) {
    console.error("IndexNow submission error:", error);
    return Response.json(
      { success: false, message: "Failed to submit URL" },
      { status: 500 }
    );
  }
}
