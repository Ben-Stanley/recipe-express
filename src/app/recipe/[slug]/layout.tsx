import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/assets/globals.css'
import RecipeHeader from '@/components/organisms/RecipeHeader'
import Providers from '@/components/Providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recipe Express',
  description: 'A fast and simple recipe app built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-4xl mx-4 sm:mx-auto">
          <Providers>
            <RecipeHeader />

            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
