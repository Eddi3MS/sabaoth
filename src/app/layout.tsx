import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from '@/components/Link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catholic App',
  description: 'Aggregated information about the catholic faith',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="shadow-md px-4 sticky top-0 bg-background z-10">
          <nav className="w-[min(98%,1170px)] mx-auto py-4 flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/timeline">Timeline</Link>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="text-center p-4 font-semibold">
          ©Timeline {new Date().getFullYear()}. Alguns direitos reservados
        </footer>
      </body>
    </html>
  )
}

