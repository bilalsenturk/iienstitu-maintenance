import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Sistem Bakımda | IIENSTITU',
    template: '%s | IIENSTITU'
  },
  description: 'IIENSTITU Teknik Departmanı sistemlerimizi geliştiriyor. Kısa süre sonra daha iyi hizmetle geri döneceğiz.',
  keywords: 'maintenance, system, upgrade, temporary, offline, bakım, sistem, güncelleme, IIENSTITU',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: '/',
    languages: {
      'tr': '/tr',
      'en': '/en'
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
