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
import { join } from 'path'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaAngleLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'

import LayoutTipsTricks from '../../../components/Layout/LayoutTipsTricks'
import { Share } from '../../../components/Share'
import Counter from '../../../components/Counter'

import { getAllPosts, getPostBySlug, Post } from '../../../data/api'

interface Props {
  post: Post
  tech: string
}

const TipsTricksPost: FC<Props> = ({ post, tech }) => {
  const router = useRouter()

  return (
    <>
      <LayoutTipsTricks
        title={'Tips & Tricks'}
        metaTitle={post.title}
        img="/images/tips.png"
      >
        <MDX>{post.content}</MDX>
        <BackButton
          onClick={() => router.back()}
          whileHover={{ y: -1 }}
          whileTap={{ y: 1 }}
        >
          <FaAngleLeft style={{ marginRight: 5, fontSize: '2rem' }} />
          Back
        </BackButton>
        <Share
          url={`https://codingwithnico.com/tips-tricks/${tech}/${post.slug}`}
        />
        <Counter slug={router.query.slug as string} />
      </LayoutTipsTricks>
    </>
  )
}

export default TipsTricksPost

export async function getStaticProps({ params }: any) {
  const tipsDirectory = join(process.cwd(), 'data/tips')

  const post = getPostBySlug(
    params.slug,
    [
      'title',
      'excerpt',
      'date',
      'slug',
      'author',
      'content',
      'coverImage',
      'coverImageAlt',
      'draft',
    ],
    tipsDirectory
  )
  return {
    props: { post, tech: params.tech },
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
const BackButton = styled(motion.button)`
  border: none;
  padding: 0.8em 1.8em;
  font-size: 1.8rem;
  border-radius: 5px;
  /* background: hsl(284, 80%, 60%); */
  background: #cc4bc2;
  color: var(--primaryColorLight2);
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  will-change: transform;
  line-height: 1;
  margin-top: 50px;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`
