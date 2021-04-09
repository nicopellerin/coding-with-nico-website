import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
    title: string
    excerpt: string
    coverImage?: string
    date: number
    author: {
        name: string
        picture: string
    }
    ogImage: {
        url: string
    }
    content?: string
    description?: string
    slug: string
    tech: string
}

const postsDirectory = join(process.cwd(), "data/posts")

export const getPostSlugs = (dir = postsDirectory) => {
    return fs.readdirSync(dir)
}

export const getPostBySlug = (slug: string, fields: any = [], dir = postsDirectory) => {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(dir, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf-8")
    const { data, content } = matter(fileContents)

    const items = {} as any

    fields.forEach((field: any) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }
        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export const getAllPosts = (fields: any[] = [], dir = postsDirectory) => {
    const slugs = getPostSlugs(dir)

    const posts: Post[] = slugs.map((slug) => getPostBySlug(slug, fields, dir)).sort((post1, post2) => post1.date > post2.date ? -1 : 1)

    return posts
}