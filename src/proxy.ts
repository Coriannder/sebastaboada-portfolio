import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['es', 'en'];
const DEFAULT_LOCALE = 'es';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  const cookieLang = request.cookies.get('portfolio_lang')?.value;
  const lang = cookieLang === 'en' ? 'en' : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip _next internals, any path containing a file extension
  // (favicon.ico, icon.svg, sitemap.xml, /docs/*.pdf, /images/*), and the
  // generated /icon route which has no extension.
  matcher: ['/((?!_next|.*\\..*|icon$).*)'],
};
