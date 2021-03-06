import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import PageHero from './PageHero'
import Footer from './Footer'
// import SidebarTech from './SidebarTech'

import { H1, H2 } from './Typography/Heading'
import Text from './Typography/Text'
import Code from './Typography/Code'

const components = {
  h1: H1,
  h2: H2,
  p: Text,
  code: Code,
}

interface Props {
  children: ReactNode
  title?: string
  bgColor?: string
  img?: string
  metaTitle?: string
}

const LayoutPage: React.FC<Props> = ({
  children,
  title = 'Tips & Tricks',
  bgColor = '#001',
  img,
  metaTitle,
}: Props) => (
  <>
    <MDXProvider components={components}>
      <Head>
        <title>{metaTitle || title} | Coding With Nico</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="og:title"
          content={`${metaTitle || title} | Coding With Nico`}
        />
        <meta name="og:url" content="https://codingwithnico.com" />
        {/* <meta
          name="description"
          content="Learn new life changing coding skills"
        />
        <meta
          name="og:description"
          content="Learn new life changing coding skills"
        /> */}
      </Head>
      <PageHero title={title} bgColor={bgColor} img={img} />
      <Main>
        <Container>{children}</Container>
        {/* <SidebarTech /> */}
      </Main>
      <Footer />
    </MDXProvider>
  </>
)

export default LayoutPage

// Styles
const Main = styled.main`
  max-width: 110rem;
  margin: 0 auto;
  position: relative;
  background: #001;
`

const Container = styled.div`
  padding: 4rem 2rem 6rem;
  color: #f4f4f4;

  @media (min-width: 768px) {
    padding: 0rem 0 6rem;
  }
`
