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
          <TechWrapper>
            <TechLogo
              src="/images/tech/graphql.png"
              layoutId="graphql"
              width="100rem"
            />
          </TechWrapper>
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
  margin-bottom: 0;
`

const TechLogo = styled(motion.img)`
  border-radius: 10%;
  width: 9rem;
`

const TechWrapper = styled.div`
  background: rgba(131, 82, 253, 0.1);
  width: min-content;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.55));
  border: 1px solid rgba(131, 82, 253, 0.3);
  margin-bottom: 1.2rem;
`
const ComingSoon = styled(motion.h3)`
  font-size: 4rem;
  margin-top: 8rem;
  color: #61dafb;
`
