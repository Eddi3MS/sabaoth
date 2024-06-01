import React from 'react'
import { prayers } from '../page'

const Prayer = ({ params: { slug } }: { params: { slug: string } }) => {
  const current = prayers.find((o) => o.slug === slug) || prayers[0]
  return (
    <div className="flex flex-col items-center px-2">
      <h2 className="text-3xl mb-4 font-bold">{current.name}</h2>
      <div>
        {current.prayer.split('/').map((s, i) => (
          <p key={i} className="font-semibold text-gray-800 text-lg">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Prayer
