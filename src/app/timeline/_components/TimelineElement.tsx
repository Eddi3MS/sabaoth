import { Church, ExternalLink } from 'lucide-react'
import { Saint } from '@/data/types'

type TimelineElement = Omit<Saint, 'id'> & {
  side: 'left' | 'right'
}

const TimelineElement = (props: TimelineElement) => {
  const { location, name, birth, decease, description, wiki, side } = props

  return (
    <div className="mt-6 sm:mt-0 sm:mb-6">
      <div className="flex flex-col sm:flex-row items-center">
        <div
          className={`flex w-full mx-auto items-center ${
            side === 'left' ? 'justify-start' : 'justify-end'
          }`}
        >
          <div
            className={`w-full sm:w-1/2  ${
              side === 'left' ? ' sm:pr-8' : ' sm:pl-8'
            }`}
          >
            <div className="border-blue-700 bg-background border-2 rounded shadow p-4 pt-6 md:pt-4 flex flex-col gap-2">
              <span className="flex justify-between">
                <span className="text-muted-foreground text-xs">
                  {birth ? birth : '?'} - {decease}
                </span>
              </span>
              <div>
                <h3 className="text-lg font-bold flex items-center md:items-center gap-2">
                  <span>{name}</span>
                  <a
                    href={`https://pt.wikipedia.org/wiki${wiki}`}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500 relative -top-[2px]"
                  >
                    <ExternalLink size={15} />
                  </a>
                </h3>
                <h4 className="text-muted-foreground font-semibold">
                  {location}
                </h4>
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight">
                  {description ? description : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-blue-500 border-white border-4 text-background w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <Church size={18} />
        </div>
      </div>
    </div>
  )
}

export default TimelineElement
