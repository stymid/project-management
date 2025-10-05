// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
  ) {
    console.warn("⚠️ Supabase env vars are not set. Skipping auth middleware.");
    return NextResponse.next();
  }

  const { supabaseResponse, user } = await updateSession(request);

  const pathname = request.nextUrl.pathname;

  const publicPaths = [
    "/",
    "/questions",
    "/login",
    "/auth",
    "/auth/login",
    "/auth/sign-up",
  ];
  const isPublic = publicPaths.some((p) =>
    p === "/"
      ? pathname === "/"
      : pathname === p || pathname.startsWith(`${p}/`)
  );

  const isAuthPath = pathname.startsWith("/auth"); // login, sign-up, forgot-password ...

  if (user && isAuthPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!isPublic && !user) {
    // اگر یوزر لاگین نبود و صفحه عمومی نیست، بفرستش لاگین
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
