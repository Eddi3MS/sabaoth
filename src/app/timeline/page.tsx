'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import './styles.css'
import { useInView } from 'react-intersection-observer'
import { Church } from 'lucide-react'

const data = [
  {
    id: 4,
    name: 'São Francisco de Assis',
    location: 'Assis, Itália.',
    date: '1181 - 1226',
    description:
      'São Francisco de Assis, foi um frade católico nascido na atual Itália. Depois de uma juventude irrequieta e mundana, voltou-se para uma vida religiosa de completa pobreza, fundando a ordem mendicante dos Frades Menores, mais conhecidos como Franciscanos, que renovaram o Catolicismo de seu tempo.',
  },
  {
    id: 5,
    name: 'Santo Antônio de Pádua',
    location: 'Pádua, Itália.',
    date: '1195 - 1231',
    description:
      'Santo Antônio ou Antônio de Lisboa ou de Pádua, foi um Doutor da Igreja que viveu na viragem do século XII para o século XIII.',
  },
  {
    id: 1,
    name: "Santa Tereza D'Ávila",
    location: 'Ávila, Espanha.',
    date: '1515 - 1582',
    description:
      'Freira carmelita, mística e santa católica, importante por suas obras sobre a vida contemplativa e espiritual e por sua atuação durante a Contrarreforma. Foi também uma das reformadoras da Ordem Carmelita e é considerada cofundadora da Ordem dos Carmelitas Descalços, juntamente com São João da Cruz.',
  },
  {
    id: 2,
    name: 'São João da Cruz',
    location: 'Fontiveros, Espanha.',
    description:
      "Místico, sacerdote e frade carmelita espanhol, foi um dos mais importantes expoentes da Contrarreforma. Foi também um dos reformadoras da Ordem Carmelita e é considerado cofundador da Ordem dos Carmelitas Descalços, juntamente com Santa Tereza D'Ávila.",
    date: '1542 - 1591',
  },
  {
    id: 3,
    name: 'Santa Teresinha do Menino Jesus',
    location: 'Lisieux, França.',
    description:
      'Freira carmelita descalça francesa, lembrada como um dos mais influentes modelos de santidade para católicos e religiosos em geral, por seu "jeito prático e simples de abordar a vida espiritual".',
    date: '1873 - 1897',
  },
]

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <section ref={ref}>
      <VerticalTimeline lineColor="" animate={true}>
        {data.map((s, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              visible={inView}
              contentStyle={{
                border: '2px solid  rgb(29 ,78 ,216 ,1)',
                boxShadow: 'none',
                borderRadius: '.5rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(29 ,78 ,216 ,1)',
              }}
              dateClassName="text-black lg:text-blue-800 !font-bold"
              date={s.date}
              iconStyle={{ background: 'rgb(29 ,78 ,216 ,1)', color: '#fff' }}
              icon={<Church />}
            >
              <h3 className="text-lg font-bold">{s.name}</h3>
              <h4 className="text-muted-foreground font-semibold">
                {s.location}
              </h4>
              <p className="text-base">{s.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}

