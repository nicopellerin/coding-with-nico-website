import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useMedia } from 'react-use-media'
import { motion } from 'framer-motion'

import PageHero from './PageHero'
import Footer from './Footer'
import SidebarTech from './SidebarTech'

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

const LayoutPost: React.FC<Props> = ({
  children,
  title = 'Tips & Tricks',
  bgColor = '#001',
  img,
  metaTitle,
}: Props) => {
  const router = useRouter()

  const isDesktop = useMedia({
    minWidth: 768,
  })

  return (
    <>
      <MDXProvider components={components}>
        <Head>
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
        </Head>
        <PageHero title={title} bgColor={bgColor} img={img} />
        <Main>
          <Container>
            {children}
            <BackButton
              onClick={() => router.back()}
              whileHover={{ y: -1 }}
              whileTap={{ y: 1 }}
            >
              <FaChevronLeft style={{ marginRight: 7 }} /> Back
            </BackButton>
          </Container>
          {isDesktop && <SidebarTech />}
        </Main>
        <Footer />
      </MDXProvider>
    </>
  )
}

export default LayoutPost

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

const BackButton = styled(motion.button)`
  border: none;
  padding: 0.8em 1em;
  font-size: 1.8rem;
  border-radius: 5px;
  background: #cc4bc2;
  color: #f4f4f4;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem rgba(204, 75, 194, 0.5));
  line-height: 1;
  margin-top: 50px;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`
