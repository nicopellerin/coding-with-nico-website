import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../components/LayoutPage'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <LayoutPage title="Contact" img="/images/contact.png">
      <Wrapper>
        <Container>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
            Say hi &mdash;
          </Title>
          <Tagline
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
            Just wanna say hi, got a question or are interested in retaining my
            services for a project?
          </Tagline>
          <Tagline
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
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
    padding: 2rem 3rem 10rem;
  }

  @media (min-width: 1800px) {
    padding: 2rem 3rem 12rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 5.2rem;
  color: #f4d7ff;
  margin-bottom: 3.2rem;

  @media (min-width: 768px) {
    font-size: 6.2rem;
  }
`

const Tagline = styled(motion.h3)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2em;
  margin-bottom: 0rem;
  color: #f4d7ff;

  @media (max-width: 500px) {
    line-height: 1.5em;
    margin-bottom: 2rem;
  }
`
