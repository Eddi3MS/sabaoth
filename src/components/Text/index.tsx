import { cn } from '@/lib/utils'
import React from 'react'

const Line = ({ text }: { text: string }) => {
  const isTitle = text.startsWith('#')
  const isSubtitle = text.startsWith('$')
  const hasPadding = text.startsWith('_')

  const textFormatted =
    isTitle || hasPadding || isSubtitle ? text.replace(text[0], '') : text

  if (text === '') {
    return <br />
  }

  if (isTitle) {
    return (
      <h3 className=" text-gray-800 leading-7 select-none indent-4 font-bold text-2xl mt-4 text-center">
        {textFormatted}
      </h3>
    )
  }

  if (isSubtitle) {
    return (
      <h4 className="text-gray-800 text-lg leading-7 select-none indent-4 font-bold">
        {textFormatted}
      </h4>
    )
  }

  return (
    <p
      className={cn(
        ' text-gray-800 text-lg leading-7 select-none',
        hasPadding && 'indent-4'
      )}
    >
      {isTitle || hasPadding || isSubtitle ? text.replace(text[0], '') : text}
    </p>
  )
}

const Text = ({ sentence }: { sentence: string }) => {
  return (
    <>
      {sentence.split('/').map((s, i) => (
        <Line key={i} text={s} />
      ))}
    </>
  )
}

export default Text
