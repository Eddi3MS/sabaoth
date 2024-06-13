import { rosary } from '@/data/rosary'
import Link from 'next/link'

const Prayers = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {rosary.map((o) => (
        <li
          key={o.id}
          className="underline underline-offset-4 text-center hover:text-blue-600"
        >
          <Link href={`/rosary/${o.slug}`}>
            {o.title} <br className="md:hidden" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Prayers
