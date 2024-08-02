import { novenas } from '@/data/novenas'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Novenas',
  description: 'Novenas católicos',
}

const Novenas = () => {
  return (
    <ul className="flex flex-col justify-center gap-2">
      {novenas.map((o) => (
        <li
          key={o.id}
          className="underline underline-offset-4 text-left hover:text-blue-600"
        >
          <Link href={`/novenas/${o.slug}`}>
            {o.title} <br className="md:hidden" /> ({o.period})
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Novenas
