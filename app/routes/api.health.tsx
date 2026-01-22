import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

// Example API route demonstrating Remix backend capabilities
// GET /api/health - returns health status
export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Remix API is running",
  });
}

// POST /api/health - example action handler
export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  
  return json({
    status: "received",
    data: body,
    timestamp: new Date().toISOString(),
  });
}
