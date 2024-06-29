import Text from '@/components/Text'
import { prayers } from '@/data/prayers'
import React from 'react'

const Prayer = ({ params: { slug } }: { params: { slug: string } }) => {
  const current = prayers.find((o) => o.slug === slug) || prayers[0]
  return (
    <div className="flex flex-col  px-2 w-full  max-w-prose mx-auto text-left">
      <h2 className="text-3xl mb-4 font-bold text-center">{current.name}</h2>
      <Text sentence={current.prayer} />
    </div>
  )
}

export default Prayer
