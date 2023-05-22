import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const page = url.pathname.split('/')[1];
  const session = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  if (page === 'dashboard') {
    if (!session) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
  if (page === 'login' || page === 'recovery' || page === 'password') {
    if (session) {
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}
