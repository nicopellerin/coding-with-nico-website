import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import PageHero from '../components/PageHero'

const AboutPage = () => {
  return (
    <Layout>
      <PageHero title="About" />
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
            <picture>
              <source srcSet="/images/me.webp" type="image/webp" />
              <Me src="/images/me.jpg" alt="Nico Pellerin" />
            </picture>
            <div>
              <Blob
                src="images/blob.svg"
                style={{ position: 'absolute', top: -150, left: 250 }}
                animate={{ rotate: [0, 5, 0], scale: [0.98, 1.03, 0.98] }}
                transition={{
                  type: 'tween',
                  duration: 7,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <Blob
                src="images/Triangle.png"
                style={{
                  position: 'absolute',
                  top: 50,
                  left: 350,
                  width: 300,
                  opacity: 0.4,
                  rotate: -10,
                }}
                // animate={{ rotate: [0, 5, 0], scale: [0.98, 1.03, 0.98] }}
                transition={{
                  type: 'tween',
                  duration: 7,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <Welcome>Hi! I'm Nico &#128400; </Welcome>
              <Text>
                I will be your instructor for this course. Based out of
                Montreal, Canada, I'm a developer with a passion for all things
                tech. Currently employed as an application developer, I enjoy
                continually learning new concepts and staying up-to-date with
                the latest tech in this fast-paced environment. When not coding,
                I love to produce electronic music, as well as design stuff. I
                also recently took an interest in creating audio VST plugins.
              </Text>
            </div>
          </Info>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
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
    padding: 6rem 3rem 27rem;
  }
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
`

const Info = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
  }
`

const Me = styled.img`
  max-width: 80%;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    margin-bottom: 0rem;
    max-width: 90%;
  }
`

const Welcome = styled.h3`
  font-size: 3.4rem;
  color: #f4d7ff;
`

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;
  top: -200px;
  left: 0;
  filter: drop-shadow(-1px -2px 1px rgba(155, 81, 224, 0.5));

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
