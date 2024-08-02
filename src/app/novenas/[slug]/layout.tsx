import { novenas } from '@/data/novenas'
import { PropsWithChildren } from 'react'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const current = novenas.find((o) => o.slug === slug) || novenas[0]
  return {
    title: current.title,
    description: current.title,
  }
}

export default function Layout({ children }: PropsWithChildren) {
  return children
}
