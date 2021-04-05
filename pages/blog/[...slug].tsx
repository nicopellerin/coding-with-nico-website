import * as React from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import path from 'path'

import LayoutTipsTricks from '../../components/Layout/LayoutTipsTricks'

const BlogPost = () => {
  return (
    <LayoutTipsTricks title={'Tips & Tricks'} img="/images/tips.png">
      {/* <Wrapper>
        <TemplateContainer>
          <TechWrapper>
            <TechLogo
              src="/images/tech/graphql.png"
              layoutId="graphql"
              width="100rem"
            />
          </TechWrapper>
          <Tech>GraphQL</Tech>
          <CardList>
            {graphqlPosts.map((post) => (
              <Card {...post} />
            ))}
          </CardList>
        </TemplateContainer>
      </Wrapper> */}
      <h1>Custon</h1>
    </LayoutTipsTricks>
  )
}

export default BlogPost

// export async function getStaticPaths() {
//   const postsDirectory = path.join(process.cwd(), 'tip-tricks')
// }
