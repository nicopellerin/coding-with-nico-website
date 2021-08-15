import * as React from 'react'
import { FC } from 'react'
import dynamic from 'next/dynamic'
import { ChasingDots } from 'better-react-spinkit'
const MDX = dynamic(() => import('@mdx-js/runtime'), {
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ChasingDots color="white" size={48} />
    </div>
  ),
})
import styled from 'styled-components'
import { FaCalendar } from 'react-icons/fa'
import { format } from 'date-fns'
import Head from 'next/head'

import LayoutBlog from '../../components/Layout/LayoutBlog'
import { Share } from '../../components/Share'

import { getAllPosts, getPostBySlug, Post } from '../../data/api'
import Counter from '../../components/Counter'

interface Props {
  post: Post
}

const BlogPost: FC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Coding With Nico</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={`${post.title} | Coding With Nico`}
        />
        <meta property="og:description" content={`${post.excerpt}`} />
        <meta name="description" content={`${post.excerpt}`} />
        <meta
          property="og:url"
          content={`https://codingwithnico.com/blog/${post.slug}`}
        />
      </Head>
      <LayoutBlog
        title={'Blog'}
        metaTitle={post.title}
        description={post.excerpt}
        img="/images/tips.png"
      >
        <Title>{post.title}</Title>
        <Info>
          <picture>
            <source
              srcSet={post.author.picture.replace('.jpg', '.webp')}
              type="image/webp"
            />
            <AuthorImage src={post.author.picture} alt={post.author.name} />
          </picture>
          <AuthorName>{post.author.name}</AuthorName>
          <PostDate>
            <FaCalendar style={{ marginRight: 7 }} />{' '}
            {format(post.date, 'MMMM d, yyyy')}
          </PostDate>
        </Info>
        <MDX>{post.content}</MDX>
        <Share url={`https://codingwithnico.com/blog/${post.slug}`} />
        <Counter slug={post.slug} />
      </LayoutBlog>
    </>
  )
}

export default BlogPost

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'coverImageAlt',
    'draft',
    'tech',
  ])
  return {
    props: { post },
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'tech'])

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

// Styles
const Title = styled.h2`
  font-size: 4.6rem;
  color: var(--pinkTextColor);
  margin-bottom: 20px;
`

const Info = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 12px;
  align-items: center;
  margin-bottom: 40px;
  width: max-content;
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
  margin-right: 10px;
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
