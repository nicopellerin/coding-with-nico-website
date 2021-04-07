import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'
import { motion } from 'framer-motion'

import LayoutBlog from '../../components/Layout/LayoutBlog'

import { getAllPosts, Post } from '../../data/api'

interface Props {
  posts: Post[]
}

const IndexBlogPage: FC<Props> = ({ posts }) => {
  return (
    <LayoutBlog>
      {posts &&
        posts.map((post) => {
          return (
            <Wrapper
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 18,
                delay: 0.1,
              }}
            >
              <Link href={`/blog/${post.slug}`} passHref>
                <a>
                  <Title>{post.title}</Title>
                </a>
              </Link>
              <Info>
                <AuthorImage src={post.author.picture} alt={post.author.name} />
                <AuthorName>{post.author.name}</AuthorName>
                <PostDate>
                  <FaCalendar style={{ marginRight: 7 }} />{' '}
                  {format(post.date, 'MMMM d, yyyy')}
                </PostDate>
              </Info>
              <Excerpt>{post.excerpt}</Excerpt>
              <ReadMoreWrapper>
                <Link href={`/blog/${post.slug}`} passHref>
                  <a>Read more...</a>
                </Link>
              </ReadMoreWrapper>
            </Wrapper>
          )
        })}
    </LayoutBlog>
  )
}

export default IndexBlogPage

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'coverImageAlt',
    'excerpt',
    'draft',
  ])
  return {
    props: {
      posts,
    },
  }
}

// Styles
const Wrapper = styled(motion.div)`
  max-width: 110ch;
  margin: 0 auto;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 4rem;
  color: var(--pinkTextColor);
  margin-bottom: 20px;
`

const Info = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
`

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid hsl(257 98% 88% / 0.4);
`

const AuthorName = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  color: var(--primaryColorLight);
`

const PostDate = styled.span`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primaryColor);
  display: flex;
  align-items: center;
  /* letter-spacing: 1.01px; */
`

const Excerpt = styled.p`
  font-size: 1.8rem;
  color: var(--pinkTextColor);
  line-height: 1.6;
  margin-bottom: 40px;
  font-family: Lora;
`

const ReadMoreWrapper = styled.div`
  text-align: right;
  letter-spacing: 1.01px;

  & > a {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--secondaryColor);
  }

  & > a:hover {
    text-decoration: underline;
  }
`
