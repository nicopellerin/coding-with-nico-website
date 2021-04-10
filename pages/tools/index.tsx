import * as React from 'react'
import styled from 'styled-components'

import { ToolsCard } from '../../components/Card'
import LayoutTipsTricks from '../../components/Layout/LayoutTipsTricks'

const ToolsPage = () => {
  return (
    <>
      <LayoutTipsTricks title="Tools" showTechBar={false}>
        <Wrapper>
          <ToolsCard
            title="OpenGraph + Errors Crawler"
            image={'/images/card-ogcrawler.webp'}
            link="/tools/og-errors-crawler"
            tech="golang"
          />
        </Wrapper>
      </LayoutTipsTricks>
    </>
  )
}

export default ToolsPage

// Styles
const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  grid-gap: 4rem;
  width: 100%;

  @media (max-width: 1024px) {
    justify-items: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
