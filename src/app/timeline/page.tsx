'use client'

import { Search } from 'lucide-react'
import { TimelineElement } from './_components'
import './styles.css'
import { useState } from 'react'
import { normalizedCompare } from '@/utils/stringCompare'
import { Metadata } from 'next'

const data = [
  {
    id: 8,
    name: 'Santo Agostinho',
    location: 'Tagaste, Argélia',
    date: '354 - 430',
    order: 'Agostinianos',
    wiki: '/Agostinho_de_Hipona',
  },
  {
    id: 4,
    name: 'São Bento',
    location: 'Núrsia, Itália',
    date: '480 - 547',
    order: 'Beneditinos',
    wiki: '/Bento_de_Núrsia',
  },
  {
    id: 6,
    name: 'São Francisco de Assis',
    location: 'Assis, Itália',
    date: '1181 - 1226',
    order: 'Franciscanos',
    wiki: '/Francisco_de_Assis',
  },
  {
    id: 5,
    name: 'Santo Antônio de Pádua',
    location: 'Lisboa, Portugal',
    date: '1195 - 1231',
    order: 'Franciscanos',
    wiki: '/Santo_António_de_Lisboa',
  },
  {
    id: 11,
    name: 'São Boaventura',
    location: 'Civita di Bagnoregio, Itália',
    date: '1221 - 1274',
    wiki: '/Boaventura',
    order: 'Franciscanos',
  },
  {
    id: 10,
    name: 'Santo Tomás de Aquino',
    order: 'Dominicanos',
    location: 'Roccasecca, Itália',
    date: '1225 - 1274',
    wiki: '/Tomás_de_Aquino',
  },
  {
    id: 13,
    name: "Santa Joana D'arc",
    location: 'Domrémy, França',
    order: '',
    date: '1412 - 1431',
    wiki: "/Joana_D'arc",
  },
  {
    id: 12,
    name: 'São Tomás More',
    order: '',
    date: '1478 - 1535',
    wiki: '/Thomas_More',
    location: 'Londres, Reino Unido',
  },
  {
    id: 1,
    name: "Santa Tereza D'Ávila",
    location: 'Ávila, Espanha',
    date: '1515 - 1582',
    order: 'Carmelitas',
    wiki: '/Teresa_de_Ávila',
  },
  {
    id: 2,
    name: 'São João da Cruz',
    location: 'Fontiveros, Espanha',
    order: 'Carmelitas',
    date: '1542 - 1591',
    wiki: '/João_da_Cruz',
  },
  {
    id: 3,
    name: 'Santa Teresinha do Menino Jesus',
    location: 'Alençon, França',
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
  {
    id: 15,
    name: 'São Maximiliano Kolbe',
    location: 'Zduńska Wola, Polônia',
    order: 'Franciscanos',
    wiki: '/Maximiliano_Maria_Kolbe',
    date: '1894 - 1941',
  },
  /*   {
    id: 9,
    name: 'São Carlo Acutis',
    location: 'Londres, Reino Unido',
    order: '',
    date: '1991 - 2006',
    wiki: '/Carlo_Acutis',
  }, */
]

export const metadata: Metadata = {
  title: 'Timeline dos Santos',
  description: 'Os santos da Igreja Católica ordenados em uma linha temporal',
}

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredData = search
    ? data.filter(
        (entry) =>
          normalizedCompare(entry.name, search) ||
          normalizedCompare(entry.order, search)
      )
    : data
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl text-center my-8">Timeline dos Santos</h1>
      <div className="bg-background z-20 sticky top-11">
        <label className="flex rounded-sm w-[min(250px,94%)] mx-auto mb-8 relative">
          <Search
            className="absolute left-2 top-1/2 -translate-y-1/2"
            size={14}
          />
          <input
            type="text"
            className="min-w-0 w-auto border flex-1 pl-8 py-2 pr-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="py-3 sm:max-w-[calc(1170px+2rem)] sm:mx-auto w-full px-4">
        <div className="relative antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-zinc-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {filteredData.map(({ id, ...rest }, i) => (
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

