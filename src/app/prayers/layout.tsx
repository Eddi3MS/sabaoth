'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()
  const isRoot = pathname === '/prayers'

  const handleBack = () => {
    router.push('/prayers')
  }

  return (
    <div className="flex flex-col w-[min(94%,1170px)] mx-auto gap-8 py-8">
      <div className="flex justify-center relative">
        {!isRoot ? (
          <Button
            variant="outline"
            className="absolute left-0"
            size="icon"
            onClick={handleBack}
          >
            <ArrowLeft size={18} />
          </Button>
        ) : null}
        <h1 className="text-4xl text-center">
          Orações <br className="md:hidden" /> Católicas
        </h1>
      </div>

      {children}
    </div>
  )
}

export default Layout
