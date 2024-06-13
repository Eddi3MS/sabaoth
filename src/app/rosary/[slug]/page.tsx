'use client'
import Text from '@/components/Text'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { rosary } from '@/data/rosary'
import { objKeys } from '@/utils/objectTypedMethods'
import { useState } from 'react'

const Rosary = ({ params: { slug } }: { params: { slug: string } }) => {
  const current = rosary.find((o) => o.slug === slug) || rosary[0]

  const [mystery, setMystery] =
    useState<keyof typeof current.mysteries>('glorious')

  const options = objKeys(current.mysteries)
  const currentDay = current.mysteries[mystery]

  return (
    <div className="flex flex-col px-2 w-full ">
      <h2 className="text-3xl font-bold text-center">{current.title}</h2>
      <div className="w-full flex flex-col gap-2 max-w-prose mx-auto">
        <Text sentence={current.initial} />

        <div className="grid gap-4">
          <div className="flex gap-4 items-center justify-center text-2xl font-bold mt-8 text-white bg-blue-600 p-4">
            {current.mysteryTitle}:{' '}
            <Select
              onValueChange={(strValue: keyof typeof current.mysteries) =>
                setMystery(strValue)
              }
              value={mystery}
            >
              <SelectTrigger
                className="max-w-fit text-blue-600 text-lg gap-2"
                aria-label="Selecione o dia"
              >
                <SelectValue placeholder="Selecione o dia" />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {current.mysteryText[opt]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <h3 className="text-2xl indent-4 font-bold text-gray-800 text-center">
            {current.mysteryTitle} {current.mysteryText[mystery]}
          </h3>
          <Text sentence={currentDay} />
        </div>

        <Text sentence={current.final} />
      </div>
    </div>
  )
}

export default Rosary
