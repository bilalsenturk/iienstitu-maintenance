import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Root path'ı kontrol et
  if (pathname === '/') {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }
  
  // Locale'siz path'ları kontrol et (API routes ve static files hariç)
  const pathnameHasLocale = ['/en', '/tr'].some(
    (locale) => pathname.startsWith(`${locale}/`) || pathname === locale
  )

  if (!pathnameHasLocale && !pathname.startsWith('/_next') && !pathname.startsWith('/api') && pathname !== '/favicon.ico') {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
  
  return NextResponse.next()
}

function getLocale(request: NextRequest): string {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage?.includes('tr')) return 'tr'
  
  return 'en' // Default fallback
}

export const config = {
  matcher: [
    // Skip internal Next.js paths
    '/((?!_next|api|favicon.ico).*)',
  ],
}
