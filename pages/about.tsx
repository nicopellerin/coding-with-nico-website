import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaTwitter } from 'react-icons/fa'

import { Me } from '../components/About'
import LayoutPage from '../components/Layout/LayoutPage'

const AboutPage = () => {
  return (
    <LayoutPage title="About">
      <Wrapper>
        <Container>
          <Info>
            <Me />
            <RightDiv>
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
                Hi! I&apos;m Nico &#128400;{' '}
                <picture>
                  <source srcSet="/images/icon-books.webp" type="image/webp" />
                  <img
                    src="/images/icon-books.png"
                    style={{ width: '5rem', marginLeft: 12 }}
                    alt=""
                  />
                </picture>
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
                Based out of Montreal, Canada, I&apos;m a developer with a
                passion for all things tech. Currently employed as an
                application developer, I enjoy continually learning new concepts
                and staying up-to-date with the latest tech in this fast-paced
                environment.
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
                You can also find me on{' '}
                <Twit>
                  Twitter{' '}
                  <FaTwitter style={{ marginLeft: 5, fontSize: '2rem' }} />
                </Twit>
                @{' '}
                <StyledA
                  href="https://twitter.com/nicopellerin_io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>nicopellerin_io</strong>
                </StyledA>
              </Text>
            </RightDiv>
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
  padding: 6rem 2rem 2rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem 10rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem 12rem;
  }

  @media (min-width: 1800px) {
    padding: 8rem 3rem 12rem;
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

const RightDiv = styled.div`
  @media (max-width: 500px) {
    margin-top: 4rem;
  }

  margin-top: unset;
`

const StyledA = styled.a`
  color: #1da1f2;
`

const Twit = styled.span`
  color: #1da1f2;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  background: rgba(10, 161, 240, 0.1);
  padding: 0.45rem 0.75rem;
  border-radius: 0.5rem;
  line-height: 1;
`
