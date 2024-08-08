import {instance} from "@/services/API";

export const getProfile = async() =>{
    const {data} = await instance.get('/profile');
    return data
}
