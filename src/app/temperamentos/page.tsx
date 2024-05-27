'use client'

import CheckboxItem from './_components/CheckboxItem'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useChecklist } from '@/context/ChecklistContext'
import { Reactions, tempLabels } from '@/data/temp'
import { objEntries } from '@/utils/objectTypedMethods'
import Link from 'next/link'

const eu = [
  2, 4, 6, 8, 12, 13, 16, 20, 21, 23, 24, 26, 27, 31, 34, 35, 39, 40, 48, 52,
  54, 57, 58, 62, 63, 64, 65, 68, 70, 73, 74, 75, 78, 81, 85, 88, 92, 97, 98,
  101, 102, 103, 106, 109, 111, 117, 118, 122, 145, 147, 149, 150, 151, 10, 19,
  22, 25, 33, 37, 43, 61, 86, 89, 93, 95, 96, 100, 107, 113, 119, 126, 128, 131,
  132, 137, 139, 153, 156, 159, 160, 162, 163, 164, 165, 166, 168, 167, 169,
  170, 173, 174, 175, 176, 177, 179, 180, 181, 182, 183, 184, 185, 186, 187,
  188, 190, 193, 195, 198, 202, 203, 204, 205, 206, 207, 208, 210, 214, 215,
  217, 220, 221, 222, 225, 227, 229, 232,
]

export default function Home() {
  const { checkedList, setCheckedList, result } = useChecklist()

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 gap-4 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">
        Indicador de Temperamento
      </h1>
      <div className="flex flex-col gap-2 max-w-screen-lg">
        <ul className="list-disc pl-5">
          <li className="text-sm lg:text-base font-semibold text-secondary-foreground">
            Marque as caixas abaixo que descrevem suas tendências habituais, os
            padrões de reação evidentes desde a infância, em relação a cada uma
            das seguintes qualidades.
          </li>
          <li className="font-bold text-sm lg:text-base">
            <span className="text-red-700">
              Não selecione as qualidades que você gostaria de ter ou que você é
              obrigado a ter no trabalho.
            </span>
          </li>
          <li className="text-sm lg:text-base font-semibold text-secondary-foreground">
            Escolha aquelas qualidades que mais frequentemente se aplicam a
            você, que seu cônjuge ou melhores amigos diriam que você tem, as
            qualidades que você mais frequentemente possui em tempos de
            tranquilidade ou as quais você recorre em momentos de estresse e até
            aquelas tendências menos positivas que voce está tentando evitar.
          </li>
          <li className="text-sm lg:text-base font-semibold text-secondary-foreground">
            A lista fica salva no seu navegador, caso deseje{' '}
            <span
              className="underline cursor-pointer"
              onClick={() => setCheckedList([])}
            >
              clique aqui
            </span>{' '}
            para resetar.
          </li>
        </ul>
      </div>

      <section className="grid grid-cols-1  gap-3 mt-8 mb-4">
        {Reactions.map(({ id, text }) => (
          <CheckboxItem
            key={id}
            text={text}
            id={id}
            checked={checkedList.includes(id)}
            onCheckedChange={(checked) => {
              setCheckedList((curr) => {
                if (!!checked) {
                  return [...curr, id]
                } else {
                  return curr.filter((num) => num !== id)
                }
              })
            }}
          />
        ))}
      </section>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[250px]" disabled={!checkedList.length}>
            Ver Resultado
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resultado:</DialogTitle>
          </DialogHeader>

          <p>
            Seu temperamento predominante é{' '}
            <Link
              href={`/temperamentos/${result.dominant}`}
              className=" font-semibold text-blue-500 hover:text-blue-600"
            >
              {tempLabels[result.dominant]}
            </Link>
          </p>

          <DialogDescription>Score completo.</DialogDescription>
          <div className="flex flex-col gap-2">
            {objEntries(result.orderedScore).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className="border-b [&:last-of-type]:border-none flex justify-between pb-1"
                >
                  <span>{tempLabels[key]}:</span> <span>{value}</span>
                </div>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}

