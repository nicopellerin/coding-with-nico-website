import React, { ReactNode } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import PageHero from './PageHero'

interface Props {
  children: ReactNode
  title?: string
}

const LayoutPage = ({ children, title = 'Coding With Nico' }: Props) => (
  <>
    <Head>
      <title>{title} | Coding With Nico</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <PageHero title={title} />
    {children}
  </>
)

export default LayoutPage
