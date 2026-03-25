import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Bot Detection
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /bot|spider|crawl|scraper|curl|wget|python|java|php|libwww|httpclient/i.test(userAgent)

  if (isBot) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale

    const response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
    
    // Add Security Headers
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    
    return response
  }

  const response = NextResponse.next()
  
  // Add Security Headers to all requests
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.jpg|.*\\.png|.*\\.webp|.*\\.svg).*)'],
}
