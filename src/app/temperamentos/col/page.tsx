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
        <CardTitle>Colérico</CardTitle>
      </CardHeader>
      <CardContent>
        O colérico se irrita fácil e fortemente; se sente impulsionado a reagir
        de imediato; a impressão fica por muito tempo na alma e facilmente
        conduz a novas irritações. Ele é voltado para a resolução das coisas e
        consegue enxergá-las com praticidade. Geralmente, os coléricos são
        fortes e magnânimos; por isso, não é possível contê-los, pois seria como
        fechar a tampa de uma panela de pressão. Ademais, coléricos não costumam
        tomar decisões para agradar aos demais. Eles perseguem aquilo que
        acreditam, seus objetivos e ideais. Tende ao orgulho. Suas principais
        características são: expansividade, praticidade, liderança,
        assertividade, raciocínio rápido, gosto por desafios e competições,
        trabalhador, educador, pessoa de convicção e vontade fortes, com forte
        determinação e magnanimidade. O colérico é aquele que empreende, que vai
        a frente, que transforma e que está sempre buscando fazer o melhor. Já
        os principais defeitos desse temperamento são: propensos a ira,
        insensibilidade e orgulho, e, caso não percorram um caminho de virtudes,
        podem se tornar propensos à vingança. Eles costumam ter pouco trato com
        as pessoas e podem ser imprudentes e arrogantes, por se verem sempre com
        a razão. O seu grande defeito é exatamente conseguir resolver os
        problemas de fora, mas ter um ponto cego nos problemas que estão dentro
        de si mesmo.
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
