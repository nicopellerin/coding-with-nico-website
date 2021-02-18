import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../../../components/LayoutPage'
import TemplateContainer from '../../../components/TemplateContainer'

const GraphqlPage = () => {
  return (
    <LayoutPage title={'Tips & Tricks'} img="/images/tips.png">
      <Wrapper>
        <TemplateContainer>
          <TechLogo
            src="/images/tech/graphql.png"
            layoutId="graphql"
            width="100rem"
          />
          <Tech>GraphQL</Tech>
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

export default GraphqlPage

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
  margin-bottom: 1.6rem;
`

const ComingSoon = styled(motion.h3)`
  font-size: 4rem;
  margin-top: 8rem;
  color: #61dafb;
`
