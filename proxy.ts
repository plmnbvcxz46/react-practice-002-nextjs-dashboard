import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("Proxy");
}
export const config = {
  matcher: ["/:path*"],
};
