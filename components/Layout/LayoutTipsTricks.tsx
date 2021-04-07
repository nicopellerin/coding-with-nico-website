import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useMedia } from 'react-use-media'

import PageHero from '../PageHero'
import Footer from '../Navigation/Footer'
import SidebarTech from '../SidebarTech'

interface Props {
  children: ReactNode
  title?: string
  bgColor?: string
  img?: string
  metaTitle?: string
}

const LayoutTipsTricks: React.FC<Props> = ({
  children,
  title = 'Tips & Tricks',
  bgColor = '#001',
  img,
  metaTitle,
}: Props) => {
  const isDesktop = useMedia({
    minWidth: 768,
  })

  return (
    <>
      <Head>
        <title>{metaTitle || title} | Coding With Nico</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={`${metaTitle || title} | Coding With Nico`}
        />
        <meta
          name="description"
          content="Learn new life changing coding skills"
        />
        <meta
          property="og:description"
          content="Learn new life changing coding skills"
        />
      </Head>
      <PageHero title={title} bgColor={bgColor} img={img} />
      <Main>
        <Container>{children}</Container>
        {isDesktop && <SidebarTech />}
      </Main>
      <Footer />
    </>
  )
}

export default LayoutTipsTricks

// Styles
const Main = styled.main`
  max-width: 110rem;
  margin: 0 auto;
  position: relative;
  background: #001;
`

const Container = styled.div`
  padding: 4rem 2rem 4rem;
  color: #f4f4f4;

  @media (min-width: 768px) {
    padding: 0rem 0 4rem;
  }
`
