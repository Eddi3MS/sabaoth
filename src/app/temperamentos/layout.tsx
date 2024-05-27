import type { Metadata } from 'next'

import { TempContextProvider } from '@/context/ChecklistContext'

export const metadata: Metadata = {
  title: 'Indicador de Temperamentos',
  description:
    'Um indicador de temperamentos baseado no teste do livro: "O temperamento que Deus me deu", de Art & Laraine Bennett',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <TempContextProvider>{children}</TempContextProvider>
}

