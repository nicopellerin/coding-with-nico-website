import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Coding With Nico' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Coding With Nico" />
      <meta
        property="og:description"
        content="Learn new life changing coding skills &#128640;"
      />
      <meta
        name="description"
        content="Learn new life changing coding skills &#128640;"
      />
    </Head>
    {children}
  </>
)

export default Layout
