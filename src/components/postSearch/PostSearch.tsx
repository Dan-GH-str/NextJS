'use client'

import PostService from "@/API/PostService"
import { useState } from "react"
import useSWR from "swr"

const PostSearch = () => {
    const { mutate } = useSWR('posts')
    const [ search, setSearch ] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const posts = PostService.getPostsBySearch(search)

        mutate(posts)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default PostSearch