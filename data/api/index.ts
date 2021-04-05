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
}

const postsDirectory = join(process.cwd(), "data/posts")

export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: any = []) => {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
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

export const getAllPosts = (fields: any[] = []) => {
    const slugs = getPostSlugs()
    const posts: Post[] = slugs.map((slug) => getPostBySlug(slug, fields)).sort((post1, post2) => post1.date > post2.date ? -1 : 1)

    return posts
}