import React, { ReactNode } from 'react'
// import Head from 'next/head'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import PageHero from '../PageHero'
import Footer from '../Navigation/Footer'

import { H1, H2 } from '../Typography/Heading'
import Text from '../Typography/Text'
import Code from '../Typography/Code'
import { InlineCode } from '../Typography/InlineCode'

import SelectTech from '../../components/SelectTech'
import Spacer from '../../components/Spacer'

const components = {
  h1: H1,
  h2: H2,
  p: Text,
  code: Code,
  inlineCode: InlineCode,
  SelectTech,
  Spacer,
}

interface Props {
  children: ReactNode
  title?: string
  bgColor?: string
  img?: string
  metaTitle?: string
  description?: string
}

const LayoutBlog: React.FC<Props> = ({
  children,
  title = 'Blog',
  bgColor = '#001',
  img,
}: Props) => {
  return (
    <>
      <MDXProvider components={components}>
        {/* <Head>
          <title>{metaTitle || title} | Coding With Nico</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:title"
            content={`${metaTitle || title} | Coding With Nico`}
          />
          <meta property="og:description" content={`${description}`} />
          <meta name="description" content={`${description}`} />
        </Head> */}
        <PageHero title={title} bgColor={bgColor} img={img} />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </MDXProvider>
    </>
  )
}

export default LayoutBlog

// Styles
const Main = styled.main`
  position: relative;
  background: #001;
`

const Container = styled.div`
  padding: 4rem 2rem 4rem;
  color: #f4f4f4;
  max-width: 90rem;
  margin: 0 auto;

  @media (min-width: 1280px) {
    padding: 0rem 0 8rem;
  }
`
