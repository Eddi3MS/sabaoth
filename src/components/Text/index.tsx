import { cn } from '@/lib/utils'

const Line = ({ text }: { text: string }) => {
  const isTitle = text.startsWith('#')
  const isSubtitle = text.startsWith('$')
  const hasPadding = text.startsWith('_')
  const isLink = text.startsWith('%')
  const isSeparator = text.startsWith('&')
  const isItalic = text.startsWith('!')

  const textFormatted =
    isTitle || hasPadding || isSubtitle || isLink || isItalic
      ? text.replace(text[0], '')
      : text

  if (isItalic) {
    return <span className="italic max-w-sm mx-auto mb-3">{textFormatted}</span>
  }

  if (text === '') {
    return <span className="block h-2 md:h-5" aria-hidden />
  }

  if (isSeparator) {
    return <hr />
  }

  if (isLink) {
    const [href, title] = textFormatted.split('*')

    return (
      <a
        href={`https://${href.replaceAll(' ', '/')}`}
        target="_blank"
        className="text-blue-500 font-bold text-sm flex items-center gap-1 hover:underline"
      >
        {title}{' '}
      </a>
    )
  }

  if (isTitle) {
    return (
      <h3 className=" text-gray-800 leading-7 font-bold text-2xl mt-4 text-center my-3">
        {textFormatted}
      </h3>
    )
  }

  if (isSubtitle) {
    return (
      <h4 className="text-gray-800 text-lg leading-7 md:indent-4 font-bold my-2">
        {textFormatted}
      </h4>
    )
  }

  return (
    <p
      className={cn(
        ' text-gray-800 text-lg leading-7',
        hasPadding && 'md:indent-4'
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
