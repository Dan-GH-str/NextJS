'use client'
export default function PostsError({ error }: { error: Error }) {
    return <h1>{error.message}</h1>
}