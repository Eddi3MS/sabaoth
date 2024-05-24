'use client'

import { TimelineElement } from './_components'
import './styles.css'

const data = [
  {
    id: 8,
    name: 'Santo Agostinho',
    location: 'Hípona, Argélia.',
    date: '354 - 430',
    order: 'Agostinianos',
    wiki: '/Agostinho_de_Hipona',
  },
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
  {
    id: 7,
    name: 'São Padre Pio',
    location: 'Pietrelcina, Itália',
    order: 'Franciscanos',
    date: '1887 - 1968',
    wiki: '/Padre_Pio',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-3 sm:max-w-[calc(1170px+2rem)] sm:mx-auto w-full px-4">
        <div className="relative antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-zinc-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {data.map(({ id, ...rest }, i) => (
            <TimelineElement
              key={id}
              {...rest}
              side={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

