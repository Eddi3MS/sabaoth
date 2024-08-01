import Text from '@/components/Text'
import { prayers } from '@/data/prayers'
import React from 'react'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const current = prayers.find((o) => o.slug === slug) || prayers[0]
  return {
    title: current.name,
    description: `${current.name} em ${current.lang}`,
  }
}

const Prayer = ({ params: { slug } }: { params: { slug: string } }) => {
  const current = prayers.find((o) => o.slug === slug) || prayers[0]
  return (
    <div className="flex flex-col  px-2 w-full  text-left">
      <h2 className="text-3xl mb-4 font-bold text-center max-w-lg mx-auto">
        {current.name}
      </h2>
      <div className=" max-w-prose">
        <Text sentence={current.prayer} />
      </div>
    </div>
  )
}

export default Prayer
