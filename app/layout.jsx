import './globals.css'

import Link from 'next/link'

import { Inter } from 'next/font/google'

import Providers from '@/app/providers'
import ThemeButton from '@/components/ThemeButton'

import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
          <Providers>
            {/* Header */}
            <header className='py-6'>
              <nav className='container flex items-center justify-between'>
                <ul className='flex gap-6'>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                </ul>

                <ThemeButton />
              </nav>
            </header>

            {/* Page */}
            <main>{children}</main>

            {/* Footer */}
            <footer></footer>
          </Providers>
      </body>
    </html>
  )
}
