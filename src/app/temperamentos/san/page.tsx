import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <Card className="max-w-[min(90%,1280px)] my-8 mx-auto">
      <CardHeader>
        <CardTitle>Sanguíneo</CardTitle>
      </CardHeader>
      <CardContent>
        O sanguíneo, assim como o colérico, se irrita fácil e fortemente,
        sentindo-se, da mesma forma, impulsionado a uma reação rápida; mas a
        impressão se apaga logo e não fica por muito tempo na alma. Sanguíneo é
        o típico “fogo de palha”, ele tende a dar uma resposta imediata, mas
        que, rapidamente, se esvai. Costuma falar antes de pensar, não
        necessariamente por impulsividade, mas porque é seu jeito de se orientar
        no mundo. Mas, nem todo sanguíneo falará muito. Alguns podem ter o traço
        de timidez, que pode dificultar a identificação do temperamento. O que
        deve ser preponderante nessa questão é: o não falar é algo que incomoda
        ou não? No geral, sanguíneos tímidos se incomodam profundamente quando
        não conseguem falar em determinado ambiente. Suas principais
        características são: motiva-se facilmente; altamente entusiasmado.
        Expressa-se e faz amizade facilmente. Geralmente é prestativo, alegre,
        afável e simpático. É criativo e tem uma imaginação ardente, além de ser
        otimista e brincalhão. Assimila as coisas rapidamente, mas não aprofunda
        e nem costuma guardar rancor. Com relação aos principais defeitos desse
        temperamento, destaca-se os seguintes: bagunceiro, inconstante,
        procrastinador. Tem dificuldade com esforço duro e contínuo. É
        superficial e julga rapidamente ter entendido alguma coisa. Tem alta
        facilidade de distração, fala muito e ouve pouco.
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
