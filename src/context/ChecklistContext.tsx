'use client'

import { Col, Fle, Mel, San } from '@/data/temp'
import { objEntries, objFromEntries } from '@/utils/objectTypedMethods'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

type TempContextProps = {
  children: ReactNode
}

type TempContextData = {
  checkedList: number[]
  setCheckedList: Dispatch<SetStateAction<number[]>>
  result: {
    orderedScore: Record<'col' | 'mel' | 'fle' | 'san', number>
    dominant: 'col' | 'mel' | 'fle' | 'san'
  }
}

const TempContext = createContext({} as TempContextData)

export const TempContextProvider = ({ children }: TempContextProps) => {
  const [checkedList, setCheckedList] = useState<number[]>([])

  const result = useMemo(() => {
    const score = checkedList.reduce(
      (acc, att) => {
        if (Col.includes(att)) {
          acc.col++
        }
        if (Mel.includes(att)) {
          acc.mel++
        }
        if (Fle.includes(att)) {
          acc.fle++
        }
        if (San.includes(att)) {
          acc.san++
        }

        return acc
      },
      { col: 0, mel: 0, fle: 0, san: 0 }
    )

    const sortedToArray = objEntries(score).sort((a, b) => b[1] - a[1])

    const dominant = sortedToArray[0][0]

    const orderedScore = objFromEntries(sortedToArray)

    return { orderedScore, dominant }
  }, [checkedList])

  return (
    <TempContext.Provider value={{ checkedList, setCheckedList, result }}>
      {children}
    </TempContext.Provider>
  )
}

export const useChecklist = () => {
  const context = useContext(TempContext)

  if (!context) {
    throw new Error('context must be used within an Provider')
  }

  return context
}
