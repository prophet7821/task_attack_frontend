import PostDetails from "@/components/PostDetails";
import {Metadata} from "next";
import {getPostById} from "@/services/post.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const {id} = params;
    try {
        const post = await getPostById(id);
        return {
            title: `${post.title}| ByteBloom`,
        }
    } catch (e) {
        return {
            title: `Post Details | ByteBloom`,
        }

    }

}
const PostDetailsPage = ({params}: { params: { id: string } }) => {
    return (
        <>
            <PostDetails params={params}/>
        </>

    )
}

export default PostDetailsPage;