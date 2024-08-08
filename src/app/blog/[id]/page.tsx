import TypePost from "@/types/post.types"

async function getPostById(id: number): Promise<TypePost> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    })

    return response.json()
}

type TypeProps = {
    params: {
        id: number
    }
}

export async function generateMetadata({ params: { id } }: TypeProps) {
    const { title } = await getPostById(id)

    return {
        title
    }
}

export default async function Post({ params: { id } }: TypeProps) {
    const post = await getPostById(id)

    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
}