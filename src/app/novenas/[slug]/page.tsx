'use client'
import Text from '@/components/Text'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { novenas } from '@/data/novenas'
import { useState } from 'react'

const daysText = {
  1: 'Primeiro',
  2: 'Segundo',
  3: 'Terceiro',
  4: 'Quarto',
  5: 'Quinto',
  6: 'Sexto',
  7: 'Sétimo',
  8: 'Oitavo',
  9: 'Nono',
}
const Novena = ({ params: { slug } }: { params: { slug: string } }) => {
  const [day, setDay] = useState<number>(1)

  const current = novenas.find((o) => o.slug === slug) || novenas[0]
  const days = Object.keys(current.days).length
  const currentDay = current.days[day as keyof typeof current.days]

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl font-bold text-center">{current.title}</h2>
      <div className="w-full flex flex-col gap-2">
        <Text sentence={current.initial} />

        <div className="grid gap-4">
          <div className="flex gap-4 items-center justify-center text-2xl font-bold mt-8 text-white bg-blue-600 p-4 -mx-3 md:mx-0">
            Selecione o dia:{' '}
            <Select
              onValueChange={(strValue) => setDay(Number(strValue))}
              value={String(day)}
            >
              <SelectTrigger
                className="w-[60px] text-blue-600 text-lg"
                aria-label="Selecione o dia"
              >
                <SelectValue placeholder="Selecione o dia" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: days }).map((_, i) => (
                  <SelectItem key={i} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <h3 className="text-2xl indent-4 font-bold text-gray-800 text-center">
            {daysText[day as keyof typeof daysText]} Dia
          </h3>
          <Text sentence={currentDay} />
        </div>

        <Text sentence={current.final} />

        {day === days ? <Text sentence={current.last_day} /> : null}
      </div>
    </div>
  )
}

export default Novena
