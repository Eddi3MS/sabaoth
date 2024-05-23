'use client'
import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Link = ({
  className,
  href,
  ...rest
}: ComponentProps<typeof NextLink>) => {
  const pathname = usePathname()
  return (
    <NextLink
      className={cn(
        'font-bold uppercase leading-3 transition-colors',
        pathname === href
          ? 'text-blue-700 hover:text-blue-500'
          : 'text-gray-700 hover:text-gray-500',
        className
      )}
      href={href}
      {...rest}
    />
  )
}

export default Link
