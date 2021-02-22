import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../../../components/LayoutPage'
import TemplateContainer from '../../../components/TemplateContainer'

const JavascriptPage = () => {
  return (
    <LayoutPage title={'Tips & Tricks'} img="/images/tips.png">
      <Wrapper>
        <TemplateContainer>
          <TechLogo
            src="/images/tech/javascript.png"
            layoutId="javascript"
            width="100rem"
          />
          <Tech>Javascript</Tech>
          <ComingSoon
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 18, delay: 0.6 }}
          >
            Coming soon!
          </ComingSoon>
        </TemplateContainer>
      </Wrapper>
    </LayoutPage>
  )
}

export default JavascriptPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
  z-index: 100;
`

const Tech = styled(motion.h2)`
  color: #f4d7ff;
  font-size: 2.4rem;
`

const TechLogo = styled(motion.img)`
  margin-bottom: 1rem;
  border-radius: 10%;
`

const ComingSoon = styled(motion.h3)`
  font-size: 4rem;
  margin-top: 8rem;
  color: #61dafb;
`
