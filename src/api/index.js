import axios from 'axios'

export const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await axios.get(url).then((res) => res)
        return response.data
    } catch (error) {
        throw error.response
    }
}

export const getPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    try {
        const response = await axios.get(url).then((res) => res)
        return response.data
    } catch (error) {
        throw error.response
    }
}

export const addPost = async (post) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await axios.post(url, post).then((res) => res)
        return response.data
    } catch (error) {
        throw error.response
    }
}

export const deletePost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
        const response = await axios.delete(url).then((res) => res)
        return response.data
    } catch (error) {
        throw error.response
    }
}


