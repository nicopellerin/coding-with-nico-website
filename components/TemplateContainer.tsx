import { FC } from 'react'
import styled from 'styled-components'

const TemplateContainerStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;
  text-align: center;
  position: relative;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 2rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    /* padding: 2rem 3rem 14rem; */
  }

  @media (min-width: 1800px) {
    /* padding: 2rem 3rem 14rem; */
  }
`

const TemplateContainer: FC = ({ children }) => (
  <TemplateContainerStyled>{children}</TemplateContainerStyled>
)

export default TemplateContainer
