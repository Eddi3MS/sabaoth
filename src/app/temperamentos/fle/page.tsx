import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle>Fleumático</CardTitle>
      </CardHeader>
      <CardContent>
        O fleumático não se deixa afetar tão facilmente pelas impressões, nem se
        sente mais inclinado a reagir, e as impressões, por sua parte, logo se
        desvanecem. Suas principais características são: apaziguador, inimigo
        dos conflitos, facilmente adaptável, prudente, sensato, reflexivo,
        tranquilo, discreto. É um coração bom, mas que não se excita facilmente
        e que falta entusiasmo e espontaneidade. São apreciadores da harmonia e
        da cooperação, intuitivos e, dificilmente, se irritam com algo. É um
        temperamento que se beneficia profundamente com a passagem do tempo,
        desenvolvendo o discernimento e apurando a intuição. Uma das melhores
        características do fleumático é sua capacidade de escuta, que não deixa
        as relíquias do outro se perderem em sua profundidade. Dentre os
        principais defeitos do fleumático está a lentidão, a falta de entusiasmo
        e tendência a procrastinar, o que o leva a perder muitas oportunidades.
        O mais forte de todos esses defeitos ainda parece ser a preguiça, que
        faz com que ele tenda a se fechar no mundo de seus próprios pensamentos,
        os quais são mais fáceis e brandos do que a realidade nua e crua.
        Fleumáticos tendem também a uma passividade diante da vida, além de
        trabalharem devagar e perderem o foco facilmente. Outro elemento que
        precisa ser controlado é o fato de que eles podem ser muito
        influenciáveis, tendo em vista que, tal como a água, podem se adaptar a
        qualquer situação. O fleumático também sofre do “efeito tsunami” que é o
        que ocorre após ele recuar em muitas situações de conflito e guardar
        muitas coisas para si, ele volta com toda e pode ter uma reação
        desproporcional à situação.
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/temperamentos">Voltar</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Page
