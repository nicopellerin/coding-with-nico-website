import * as React from 'react'
import { FC } from 'react'
import MDX from '@mdx-js/runtime'
import { join } from 'path'

import LayoutTipsTricks from '../../../components/Layout/LayoutTipsTricks'
import { Share } from '../../../components/Share'

import { getAllPosts, getPostBySlug, Post } from '../../../data/api'

interface Props {
  post: Post
  tech: string
}

const TipsTricksPost: FC<Props> = ({ post, tech }) => {
  return (
    <>
      <LayoutTipsTricks
        title={'Tips & Tricks'}
        metaTitle={post.title}
        img="/images/tips.png"
      >
        <MDX>{post.content}</MDX>
        <Share
          url={`https://codingwithnico.com/tips-tricks/${tech}/${post.slug}`}
        />
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
