import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Timeline dos Santos',
  description: 'Os santos da Igreja Católica ordenados em uma linha temporal',
}

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default Layout
