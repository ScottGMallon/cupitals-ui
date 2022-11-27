
interface IPost {
    id: number
    attributes: {
        author: string
        description: string
        featured: boolean
        content: string
        title: string
        subtitle: string
        createdAt: Date
        updatedAt: Date
        publishedAt: Date
        authorImage: IStrapiImage
        image: IStrapiImage
    }
}

interface IStrapiImage {
    data: {
        id: number
        attributes: {
            name: string
            alternativeText: string
            width: number
            height: number
            url: string
        }
    }
}