import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../components/LayoutPage'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <LayoutPage title="Contact" img="/images/contact.png">
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
          <Title>Say hi &mdash;</Title>
          <Tagline>
            Just wanna say hi, got a question or are interested in retaining my
            services for a project? <br />
            Hit me up using the form and I will get back to you asap.
          </Tagline>
          <ContactForm />
        </Container>
      </Wrapper>
    </LayoutPage>
  )
}

export default ContactPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
  z-index: 100;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 2rem 2rem 10rem;

  @media (min-width: 768px) {
    padding: 2rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 3rem 22rem;
  }

  @media (min-width: 1800px) {
    padding: 2rem 3rem 27rem;
  }
`

const Title = styled.h2`
  font-size: 6.2rem;
  color: #f4d7ff;
`

const Tagline = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2em;
  margin-bottom: 5rem;
  color: #f4d7ff;

  @media (max-width: 500px) {
    line-height: 1.5em;
  }
`

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;
  top: -200px;
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
