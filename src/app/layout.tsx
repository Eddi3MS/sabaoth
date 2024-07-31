import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from '@/components/Link'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catholic App',
  description: 'Orações, Santos da Igreja Católica, Temperamentos e mais..',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="text-center p-4 font-semibold">
          ©Sabaoth {new Date().getFullYear()}. Alguns direitos reservados
        </footer>
      </body>
    </html>
  )
}

