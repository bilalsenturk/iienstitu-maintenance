import '../globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Sistem Bakımda | IIENSTITU Teknik Departmanı',
    template: '%s | IIENSTITU'
  },
  description: 'IIENSTITU Teknik Departmanı sistemlerimizi geliştiriyor. Kısa süre sonra daha iyi hizmetle geri döneceğiz.',
  keywords: 'maintenance, system, upgrade, temporary, offline, bakım, sistem, güncelleme, IIENSTITU, teknik departman',
  robots: 'noindex, nofollow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
