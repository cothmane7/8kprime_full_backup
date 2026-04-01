import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return i18n.defaultLocale

  const locales = [...i18n.locales]
  
  // Parse Accept-Language header
  const languages = acceptLanguage.split(',').map((lang) => {
    const [code, q] = lang.split(';q=')
    return { code: code.trim().split('-')[0], q: q ? parseFloat(q) : 1.0 }
  }).sort((a, b) => b.q - a.q)

  for (const lang of languages) {
    if (locales.includes(lang.code as any)) {
      return lang.code
    }
  }

  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Bot Detection & Whitelisting
  const userAgent = request.headers.get('user-agent') || ''
  const isSearchEngine = /googlebot|adsbot-google|mediapartners-google|bingbot|yandexbot|duckduckbot|baiduspider/i.test(userAgent)
  const isMaliciousBot = /spider|crawl|scraper|curl|wget|python|java|php|libwww|httpclient/i.test(userAgent)

  // Block malicious bots but allow search engines and real users
  if (isMaliciousBot && !isSearchEngine) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

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
