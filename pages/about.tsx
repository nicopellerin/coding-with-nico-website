import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Me from '../components/Me'
import LayoutPage from '../components/LayoutPage'

const AboutPage = () => {
  return (
    <LayoutPage title="About">
      <Wrapper>
        <Wave
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin slice"
          viewBox="0 0 1200 129"
        >
          <path
            width="100%"
            d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
            fill="#001"
          ></path>
        </Wave>
        <Container>
          <Info>
            <Me />
            <div>
              <Welcome
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 60,
                  delay: 0.1,
                }}
              >
                Hi! I'm Nico &#128400;{' '}
                <img
                  src="/images/icon-books.png "
                  style={{ width: '5rem', marginLeft: 12 }}
                />
              </Welcome>
              <Text
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 60,
                  delay: 0.1,
                }}
              >
                Based out of Montreal, Canada, I'm a developer with a passion
                for all things tech. Currently employed as an application
                developer, I enjoy continually learning new concepts and staying
                up-to-date with the latest tech in this fast-paced environment.
              </Text>
              <Text
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 60,
                  delay: 0.1,
                }}
              >
                When not coding, I love to produce electronic music, as well as
                design stuff. I also recently took an interest in creating audio
                VST plugins.
              </Text>
            </div>
          </Info>
        </Container>
      </Wrapper>
    </LayoutPage>
  )
}

export default AboutPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
  z-index: 100;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 6rem 2rem 10rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem 22rem;
  }

  @media (min-width: 1800px) {
    padding: 8rem 3rem 27rem;
  }
`

const Text = styled(motion.p)`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
`

const Info = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
  }
`

const Welcome = styled(motion.h3)`
  font-size: 3.4rem;
  color: #f4d7ff;
  display: flex;
  align-items: center;
`

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;
  top: -150px;
  left: 0;
  filter: drop-shadow(-1px -2px 1px rgba(155, 81, 224, 0.5));
  pointer-events: none;

  /* @media (min-width: 768px) {
    bottom: -1rem;
  }

  @media (min-width: 1024px) {
    bottom: -2rem;
  }

  @media (min-width: 1800px) {
    bottom: -5.2rem;
  } */
`

const Blob = styled(motion.img)`
  max-width: 40%;
`
