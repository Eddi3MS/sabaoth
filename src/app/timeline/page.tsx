'use client'

import { normalizedCompare } from '@/utils/stringCompare'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TimelineElement } from './_components'
import './styles.css'
import { Saint } from './types'

let data: Saint[] = [
  {
    id: 1,
    name: 'São Bento',
    location: 'Núrsia, Itália',
    birth: 480,
    decease: 547,
    order: 'Beneditinos',
    wiki: '/Bento_de_Núrsia',
  },
  {
    id: 2,
    name: 'Santo Agostinho',
    location: 'Hipona, Argélia',
    birth: 354,
    decease: 430,
    order: 'Agostinianos',
    wiki: '/Agostinho_de_Hipona',
  },
  {
    id: 3,
    name: 'São Francisco de Assis',
    location: 'Assis, Itália',
    birth: 1181,
    decease: 1226,
    order: 'Franciscanos',
    wiki: '/Francisco_de_Assis',
  },
  {
    id: 4,
    name: 'Santo Antônio de Pádua',
    location: 'Pádua, Itália',
    birth: 1195,
    decease: 1231,
    order: 'Franciscanos',
    wiki: '/Santo_António_de_Lisboa',
  },
  {
    id: 5,
    name: 'São Boaventura',
    location: 'Civita di Bagnoregio, Itália',
    birth: 1221,
    decease: 1274,
    wiki: '/Boaventura',
    order: 'Franciscanos',
  },
  {
    id: 6,
    name: 'Santo Tomás de Aquino',
    order: 'Dominicanos',
    location: 'Roccasecca, Itália',
    birth: 1225,
    decease: 1274,
    wiki: '/Tomás_de_Aquino',
  },
  {
    id: 7,
    name: "Santa Joana D'arc",
    location: 'Domrémy, França',
    birth: 1412,
    decease: 1431,
    wiki: "/Joana_D'arc",
  },
  {
    id: 8,
    name: 'São Tomás More',
    birth: 1478,
    decease: 1535,
    wiki: '/Thomas_More',
    location: 'Londres, Reino Unido',
  },
  {
    id: 9,
    name: "Santa Tereza D'Ávila",
    location: 'Ávila, Espanha',
    birth: 1515,
    decease: 1582,
    order: 'Carmelitas',
    wiki: '/Teresa_de_Ávila',
  },
  {
    id: 10,
    name: 'São João da Cruz',
    location: 'Fontiveros, Espanha',
    order: 'Carmelitas',
    birth: 1542,
    decease: 1591,
    wiki: '/João_da_Cruz',
  },
  {
    id: 11,
    name: 'Santo Afonso Maria de Ligório',
    location: 'Nápoles, Itália',
    birth: 1696,
    decease: 1787,
    wiki: '/Afonso_de_Ligório',
    order: 'Redentoristas',
  },
  {
    id: 12,
    name: 'Santa Teresinha do Menino Jesus',
    location: 'Lisieux, França',
    order: 'Carmelitas',
    birth: 1873,
    decease: 1897,
    wiki: '/Teresa_de_Lisieux',
  },
  {
    id: 13,
    name: 'São Padre Pio',
    location: 'Pietrelcina, Itália',
    order: 'Franciscanos',
    birth: 1887,
    decease: 1968,
    wiki: '/Padre_Pio',
  },
  {
    id: 14,
    name: 'São Maximiliano Kolbe',
    location: 'Zduńska Wola, Polônia',
    order: 'Franciscanos',
    wiki: '/Maximiliano_Maria_Kolbe',
    birth: 1894,
    decease: 1941,
  },
  {
    id: 15,
    name: 'São Luís Maria de Montfort',
    birth: 1673,
    decease: 1716,
    location: 'Montfort-sur-Meu, França',
    wiki: '/Luís_Maria_Grignion_de_Montfort',
  },
  {
    id: 16,
    name: 'São Josemaría Escrivá',
    birth: 1902,
    decease: 1975,
    location: 'Barbastro, Espanha',
    wiki: '/Josemaría_Escrivá_de_Balaguer',
  },
  {
    id: 17,
    name: 'São Sebastião',
    birth: 256,
    decease: 288,
    location: 'Narbona, França',
    wiki: '/Sebastião_de_Narbona',
  },
  {
    id: 18,
    name: 'Santo Antão',
    birth: 251,
    decease: 356,
    location: 'Heracleópolis Magna, Egito',
    wiki: '/Antão,_o_Grande',
  },
  {
    id: 19,
    name: 'Santo Atanásio',
    birth: 296,
    decease: 373,
    wiki: '/Atanásio_de_Alexandria',
    location: 'Alexandria, Egito',
  },
  {
    id: 20,
    name: 'São Simão Stock',
    birth: 1165,
    decease: 1265,
    wiki: '/Simão_Stock',
    location: 'Aylesford, Reino Unido',
    order: 'Carmelitas',
  },
  {
    id: 21,
    name: 'Santa Clara',
    birth: 1194,
    decease: 1253,
    location: 'Assis, Itália',
    wiki: '/Clara_de_Assis',
    order: 'Franciscanos',
  },
  {
    id: 22,
    name: 'Santa Teresa de Calcutá',
    birth: 1910,
    decease: 1997,
    location: 'Calcutá, Índia',
    wiki: '/Madre_Teresa_de_Calcutá',
  },
  {
    id: 23,
    name: 'São João Paulo II',
    birth: 1920,
    decease: 2005,
    location: 'Wadowice, Polônia',
    wiki: '/Papa_João_Paulo_II',
  },
]

/*   {
    id: 
    name: 'São Carlo Acutis',
    location: 'Londres, Reino Unido',
    order: '',
    birth: 1991, decease: 2006,
    wiki: '/Carlo_Acutis',
  }, */

data.sort((a, b) => {
  return a.birth - b.birth || a.name.localeCompare(b.name)
})

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredData = useMemo(() => {
    return search
      ? data.filter(
          (entry) =>
            normalizedCompare(entry.name, search) ||
            normalizedCompare(entry?.order || '', search)
        )
      : data
  }, [search])
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl text-center my-8">Timeline dos Santos</h1>
      <div className="bg-background z-20 sticky top-32 md:top-11">
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

