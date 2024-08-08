'use client'
import PostService from "@/API/PostService"
import useSWR from "swr"
import Loader from "../loader/Loader"
import Link from "next/link"

const Posts = () => {
    const { data: posts, isLoading } = useSWR('posts', PostService.getPosts)

    return isLoading ? <Loader /> : (
        <div>
            <h1>Blog posts</h1>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts