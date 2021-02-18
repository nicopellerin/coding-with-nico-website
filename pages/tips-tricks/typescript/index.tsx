import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../../../components/LayoutPage'

const TypescriptPage = () => {
  return (
    <LayoutPage title={'Tips & Tricks'} img="/images/tips.png">
      <Wrapper>
        <Container>
          <TechLogo
            src="/images/tech/typescript.png"
            layoutId="typescript"
            width="100rem"
          />
          <Tech>Typescript</Tech>
          <ComingSoon
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 18, delay: 0.6 }}
          >
            Coming soon!
          </ComingSoon>
        </Container>
      </Wrapper>
    </LayoutPage>
  )
}

export default TypescriptPage

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
  text-align: center;

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

const Tech = styled(motion.h2)`
  color: #f4d7ff;
  font-size: 2.4rem;
`

const TechLogo = styled(motion.img)`
  margin-bottom: 1rem;
`

const ComingSoon = styled(motion.h3)`
  font-size: 4rem;
  margin-top: 8rem;
  color: #61dafb;
`
