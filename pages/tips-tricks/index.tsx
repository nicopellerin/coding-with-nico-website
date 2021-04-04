import * as React from 'react'
import styled from 'styled-components'

import LayoutPage from '../../components/LayoutPage'
import SelectTech from '../../components/SelectTech'

const TipsTricksPage = () => {
  return (
    <LayoutPage title={'Tips & Tricks'} img="/images/tips.png">
      <Wrapper>
        <Container>
          <SelectTech />
        </Container>
      </Wrapper>
    </LayoutPage>
  )
}

export default TipsTricksPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
  z-index: 100;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 2rem 0rem 2rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 3rem 2rem;
  }

  @media (min-width: 1800px) {
    padding: 2rem 3rem 2rem;
  }
`
