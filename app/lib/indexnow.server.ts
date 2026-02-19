/**
 * Utility to submit URLs to IndexNow for instant indexing
 * Call this after creating/updating content to notify search engines
 */
export async function submitToIndexNow(url: string, baseUrl: string): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/indexnow.xml`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    return response.ok;
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    return false;
  }
}
