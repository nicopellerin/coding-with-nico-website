import { FC } from 'react'
import styled from 'styled-components'
import SidebarTech from './SidebarTech'

const TemplateContainerStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 4rem 2rem 10rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 3rem 14rem;
  }

  @media (min-width: 1800px) {
    padding: 2rem 3rem 14rem;
  }
`

const TemplateContainer: FC = ({ children }) => (
  <TemplateContainerStyled>
    {children}
    <SidebarTech />
  </TemplateContainerStyled>
)

export default TemplateContainer
