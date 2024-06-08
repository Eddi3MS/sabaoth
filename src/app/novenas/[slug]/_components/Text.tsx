import { cn } from '@/lib/utils'
import React from 'react'

const Paragraph = ({ text }: { text: string }) => {
  const isTitle = text.startsWith('#')
  const isSubtitle = text.startsWith('$')
  const hasPadding = text.startsWith('_')
  return (
    <p
      className={cn(
        ' text-gray-800 text-lg leading-7',
        (isTitle || isSubtitle) && 'indent-4 font-bold',
        hasPadding && 'indent-4',
        isTitle && 'text-2xl mt-8'
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
        <Paragraph key={i} text={s} />
      ))}
    </>
  )
}

export default Text
