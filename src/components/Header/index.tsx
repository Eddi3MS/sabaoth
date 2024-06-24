'use client'

import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { HTMLAttributes, useEffect, useMemo, useState } from 'react'
import Link from '../Link'
import { Button } from '../ui/button'

const Nav = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={cn('py-4 gap-8 items-center flex', className)}>
      <Link href="/">Home</Link>
      <Link href="/timeline">Santos</Link>
      <Link href="/temperamentos">Temperamentos</Link>
      <Link href="/prayers">Orações</Link>
      <Link href="/novenas">Novenas</Link>
      <Link href="/rosary">Rosario</Link>
    </nav>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const doc = document.querySelector('body')
    if (!doc) return

    if (open) {
      doc.style.overflow = 'hidden'
    } else {
      doc.style.overflow = 'initial'
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <Nav
        className={cn(
          'lg:hidden',
          open
            ? 'fixed inset-0 z-10 bg-background flex-col justify-center'
            : 'hidden'
        )}
      />
      <header className="shadow-md px-4 sticky left-0 right-0 top-0 bg-background z-20 ">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden flex items-center justify-center my-2"
          onClick={() => setOpen((curr) => !curr)}
        >
          <MenuIcon />
        </Button>
        <div className="w-[calc(100vw-30px)]">
          <Nav className="hidden lg:flex w-[min(98%,1170px)] mx-auto" />
        </div>
      </header>
    </>
  )
}

export default Header
