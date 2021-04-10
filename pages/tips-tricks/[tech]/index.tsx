import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutTipsTricks from '../../../components/Layout/LayoutTipsTricks'
import TemplateContainer from '../../../components/Layout/TemplateContainer'
import { Card, CardList } from '../../../components/Card'

import { getAllPosts, Post } from '../../../data/api'
import { join } from 'path'

interface Props {
  posts: Post[]
  tech: string
}

const TipsAndTricksPage: FC<Props> = ({ posts, tech }) => {
  return (
    <LayoutTipsTricks title={'Tips & Tricks'} img="/images/tips.png">
      <Wrapper>
        <TemplateContainer>
          <TechWrapper>
            <picture>
              <source srcSet={`/images/tech/${tech}.webp`} type="image/webp" />
              <TechLogo src={`/images/tech/${tech}.png`} width="90rem" />
            </picture>
          </TechWrapper>
          <Tech>{tech}</Tech>
          <CardList>
            {posts.map((post) => (
              <Card {...post} />
            ))}
          </CardList>
        </TemplateContainer>
      </Wrapper>
    </LayoutTipsTricks>
  )
}

export default TipsAndTricksPage

export async function getStaticProps({
  params,
}: {
  params: { slug: string; tech: string }
}) {
  const tipsDirectory = join(process.cwd(), 'data/tips')

  const posts = getAllPosts(
    [
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'coverImageAlt',
      'excerpt',
      'draft',
      'tech',
    ],
    tipsDirectory
  )
  return {
    props: {
      posts: posts.filter((t) => t.tech === params.tech),
      tech: params.tech,
    },
  }
}

export async function getStaticPaths() {
  const tipsDirectory = join(process.cwd(), 'data/tips')

  const posts = getAllPosts(['slug', 'tech'], tipsDirectory)

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          tech: posts.tech,
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

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
  text-transform: capitalize;
`

const TechLogo = styled(motion.img)`
  border-radius: 5px;
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
