import React, { ReactNode } from 'react'
import Head from 'next/head'

import PageHero from './PageHero'

interface Props {
  children: ReactNode
  title?: string
  bgColor?: string
  img?: string
}

const LayoutPage: React.FC<Props> = ({
  children,
  title = 'Coding With Nico',
  bgColor = '#001',
  img,
}: Props) => (
  <>
    <Head>
      <title>{title} | Coding With Nico</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <PageHero title={title} bgColor={bgColor} img={img} />
    {children}
  </>
)

export default LayoutPage
