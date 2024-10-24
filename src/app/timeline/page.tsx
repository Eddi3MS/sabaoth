'use client'

import { saints } from '@/data/saints'
import { normalizedCompare } from '@/utils/stringCompare'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TimelineElement } from './_components'

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredData = useMemo(() => {
    return search
      ? saints.filter(
          (entry) =>
            normalizedCompare(entry.name, search) ||
            normalizedCompare(entry.location, search)
        )
      : saints
  }, [search])
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-center mt-8">Santos Católicos</h1>
      <div className="bg-background z-[8] sticky top-[56px] md:top-11">
        <label className="flex rounded-sm w-[min(300px,94%)] mx-auto my-4 relative">
          <Search
            className="absolute left-2 top-1/2 -translate-y-1/2"
            size={14}
          />
          <input
            type="text"
            className="min-w-0 w-auto border flex-1 pl-8 py-2 pr-2"
            value={search}
            placeholder="Buscar por nome ou localidade"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="py-3 sm:max-w-[calc(1170px+2rem)] sm:mx-auto w-full px-4">
        <div className="relative antialiased text-sm font-semibold">
          <div className="sm:block w-1 bg-zinc-400 absolute h-full left-1/2 transform -translate-x-1/2  -z-10"></div>

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
