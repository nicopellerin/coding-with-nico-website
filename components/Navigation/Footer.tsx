import * as React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>
      &copy;{new Date().getFullYear()} Coding With Nico
    </FooterStyled>
  )
}

export default Footer

// Styles
const FooterStyled = styled.footer`
  padding: 4rem 0 4rem 0;
  text-align: center;
  font-size: 1.6rem;
  color: #f4d7ff;
  font-weight: 500;
  background: #001;
`
