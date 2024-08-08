import TypePost from "@/types/post.types"

export default class PostService {
    static async getPosts(): Promise<TypePost[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: { revalidate: 60 },
        })

        if(!response.ok) throw new Error('Failed to fetch posts')

        return response.json()
    }

    static async getPostsBySearch(search: string): Promise<TypePost[]> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
            next: { revalidate: 60 },
        })

        if(!response.ok) throw new Error('Failed to fetch posts')

        return response.json()
    }
}