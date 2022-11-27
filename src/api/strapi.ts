import axios from 'axios'

const strapi = axios.create({
    baseURL: `${process.env.REACT_APP_STRAPI_API_BASE_URL}/api`,
    timeout: 3000,
});

export const getPosts = async () => {
    try {
        // Without populate param, strapi drops media/assets
        const res = await strapi.get('/posts?populate=*')
        return res.data.data
    }
    catch (e) {
        throw e
    }
}

export const getPostByID = async (id: string): Promise<IPost> => {
    try {
        // Without populate param, strapi drops media/assets
        const res = await strapi.get(`/posts/${id}?populate=*`)
        return res.data.data
    }
    catch (e) {
        throw e
    }
}

export const getFeaturedPost = async () => {
    try {
        // Without populate param, strapi drops media/assets
        const res = await strapi.get(`/posts/${process.env.REACT_APP_FEATURED_POST_ID}?populate=*`)
        return res.data.data
    }
    catch (e) {
        throw e
    }
}