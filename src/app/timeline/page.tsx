'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import './styles.css'
import { useInView } from 'react-intersection-observer'
import { Church, ExternalLink } from 'lucide-react'

const data = [
  {
    id: 4,
    name: 'São Bento',
    location: 'Núrsia, Itália.',
    date: '480 - 547',
    order: 'Beneditinos',
    wiki: '/Bento_de_Núrsia',
  },
  {
    id: 6,
    name: 'São Francisco de Assis',
    location: 'Assis, Itália.',
    date: '1181 - 1226',
    order: 'Franciscanos',
    wiki: '/Francisco_de_Assis',
  },
  {
    id: 5,
    name: 'Santo Antônio de Pádua',
    location: 'Pádua, Itália.',
    date: '1195 - 1231',
    order: 'Franciscanos',
    wiki: '/Santo_António_de_Lisboa',
  },
  {
    id: 1,
    name: "Santa Tereza D'Ávila",
    location: 'Ávila, Espanha.',
    date: '1515 - 1582',
    order: 'Carmelitas',
    wiki: '/Teresa_de_Ávila',
  },
  {
    id: 2,
    name: 'São João da Cruz',
    location: 'Fontiveros, Espanha.',
    order: 'Carmelitas',
    date: '1542 - 1591',
    wiki: '/João_da_Cruz',
  },
  {
    id: 3,
    name: 'Santa Teresinha do Menino Jesus',
    location: 'Lisieux, França.',
    order: 'Carmelitas',
    date: '1873 - 1897',
    wiki: '/Teresa_de_Lisieux',
  },
]

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <section ref={ref}>
      <VerticalTimeline lineColor="" animate={true}>
        {data.map((s, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              visible={inView}
              contentStyle={{
                border: '2px solid  rgb(29 ,78 ,216 ,1)',
                boxShadow: 'none',
                borderRadius: '.5rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(29 ,78 ,216 ,1)',
              }}
              dateClassName="text-black lg:text-blue-800 !font-bold"
              date={s.date}
              iconStyle={{ background: 'rgb(29 ,78 ,216 ,1)', color: '#fff' }}
              icon={<Church />}
            >
              <h3 className="flex flex-wrap justify-between gap-y-2 gap-x-4">
                <span className="text-lg font-bold flex items-start justify-between md:items-center gap-2 flex-1 sm:flex-initial ">
                  <span className="min-w-52 sm:min-w-0">{s.name}</span>
                  <a
                    href={`https://pt.wikipedia.org/wiki${s.wiki}`}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <ExternalLink size={14} />
                  </a>
                </span>
                <span className="text-sm font-semibold bg-blue-700 text-white flex items-center px-2 rounded-sm h-5">
                  {s.order}
                </span>
              </h3>
              <h4 className="text-muted-foreground font-semibold">
                {s.location}
              </h4>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}

