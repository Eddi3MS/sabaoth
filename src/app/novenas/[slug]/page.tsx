'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { novenas } from '@/data/novenas'
import { useState } from 'react'
import Text from './_components/Text'

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
    <div className="flex flex-col px-2 w-full ">
      <h2 className="text-3xl font-bold text-center">{current.title}</h2>
      <div className="w-full flex flex-col gap-2 max-w-prose">
        <Text sentence={current.initial} />

        <div className="grid gap-4">
          <h3 className="flex gap-2 items-center text-2xl font-bold mt-8 indent-4 text-blue-600">
            Selecione o dia:{' '}
            <Select
              onValueChange={(strValue) => setDay(Number(strValue))}
              value={String(day)}
            >
              <SelectTrigger className="w-[60px]">
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
          </h3>

          <h4 className="text-2xl indent-4 font-bold text-gray-800">
            {daysText[day as keyof typeof daysText]} Dia
          </h4>
          <Text sentence={currentDay} />
        </div>

        <Text sentence={current.final} />

        {day === days ? <Text sentence={current.last_day} /> : null}
      </div>
    </div>
  )
}

export default Novena
