import { prayers } from '@/data/prayers'
import React from 'react'

const Prayer = ({ params: { slug } }: { params: { slug: string } }) => {
  const current = prayers.find((o) => o.slug === slug) || prayers[0]
  return (
    <div className="flex flex-col  px-2 w-full  max-w-prose mx-auto">
      <h2 className="text-3xl mb-4 font-bold text-center">{current.name}</h2>
      <div className="w-full">
        {current.prayer.split('/').map((s, i) => (
          <p key={i} className="font-semibold text-gray-800 text-lg leading-7">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Prayer
