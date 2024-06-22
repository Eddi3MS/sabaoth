import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { prayers } from '@/data/prayers'
import { Prayer } from '@/data/types'
import { objEntries } from '@/utils/objectTypedMethods'
import Link from 'next/link'

const Prayers = () => {
  const groupedByLang = prayers
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce<Record<string, Prayer[]>>((acc, att) => {
      if (acc[att.lang]) {
        acc[att.lang].push(att)
      } else {
        acc[att.lang] = [att]
      }
      return acc
    }, {})

  return (
    <div>
      <Accordion type="multiple" className="max-w-sm mx-auto">
        {objEntries(groupedByLang).map(([k, v]) => {
          return (
            <AccordionItem value={k}>
              <AccordionTrigger>Orações em {k}</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col items-start justify-center gap-2">
                  {v.map((o) => (
                    <li
                      key={o.id}
                      className="underline underline-offset-4  hover:text-blue-600"
                    >
                      <Link href={`/prayers/${o.slug}`}>{o.name}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Prayers
