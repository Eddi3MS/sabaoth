import { rosary } from '@/data/rosary'
import { ReactNode } from 'react'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const current = rosary.find((o) => o.slug === slug) || rosary[0]
  return {
    title: current.title,
    description: current.title,
  }
}

export default function layout({ children }: { children: ReactNode }) {
  return children
}
