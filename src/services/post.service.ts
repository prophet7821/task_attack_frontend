import {Post} from "@/types/post.type";
import {instance} from './API';

export const getPost = async (page: number, limit: number, authorName ?: string): Promise<Post[]> => {
    const params: { [key: string]: any } = {page, limit};
    if (authorName) {
        params.authorName = authorName;
    }
    const {data} = await instance.get('/post', {params});
    return data;
}

export const getPostById = async (id: string): Promise<Post> => {
    const {data} = await instance.get(`/post/${id}`);
    return data;
}

export const getMyPosts = async (page: number, limit: number): Promise<Post[]> => {
    const {data} = await instance.get('/post/myPosts', {params: {page, limit}});
    return data;
}


export const createPost = async (post: Post): Promise<Post> => {
    const {data} = await instance.post('/post', post);
    return data;
}