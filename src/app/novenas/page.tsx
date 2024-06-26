import { novenas } from '@/data/novenas'
import Link from 'next/link'

const Prayers = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {novenas.map((o) => (
        <li
          key={o.id}
          className="underline underline-offset-4 text-center hover:text-blue-600"
        >
          <Link href={`/novenas/${o.slug}`}>
            {o.title} <br className="md:hidden" /> ({o.period})
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Prayers
