import Posts from "@/components/Posts/Posts"
import PostSearch from "@/components/postSearch/PostSearch"
import { Metadata } from "next"
import cl from './blog.module.css'

export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {

    return (
        <section className={cl.blog}>
            <PostSearch />
            <Posts />
        </section>
    )
}