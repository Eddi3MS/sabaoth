import { prayers } from '@/data/prayers'
import Link from 'next/link'

const Prayers = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {prayers.map((o) => (
        <li
          key={o.id}
          className="underline underline-offset-4  hover:text-blue-600"
        >
          <Link href={`/prayers/${o.slug}`}>{o.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Prayers
