"use client"
import {useQuery} from "@tanstack/react-query";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PostsSkeleton from "@/components/PostsSkeleton";
import noData from '@/assets/no-data-icon.svg'
import {getMyPosts} from "@/services/post.service";
import PostCard from "@/components/PostCard";
import {useRecoilValue} from "recoil";
import {loadToken} from "@/atoms/loadToken.atom";
import {useRouter} from "next/navigation"
import MDFContainedBox from "@/components/MDFContainedBox";
import CreateButton from "@/components/CreateButton";
import CreatePostModal from "@/components/CreatePostModal";
import {userState} from "@/atoms/user.atom";


const DashboardPageSkeleton = () => {


    const user = useRecoilValue(userState);
    const tokenLoaded = useRecoilValue(loadToken);
    const router = useRouter();

    const {
        data,
        isLoading : postsLoading,
        isError,
    } = useQuery({
        enabled: !user.isLoading && tokenLoaded,
        queryKey: ["myPosts"],
        queryFn: () => {
            return getMyPosts(0, -1)
        }
    })

    if (user.isLoading) {
        return <></>;
    }

    // If token is not loaded or user is not authenticated, redirect to homepage
    if (!tokenLoaded || !user.data) {
        router.push('/');
        return null;
    }


    const noDataFound = () => (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <img src={noData.src} alt="No Data Found"/>
            <Box sx={{
                fontSize: {
                    xs: '1rem',
                    md: '1.5rem',
                },
                fontWeight: 'bold',
                color: '#9e9e9e',
            }}>
                No Data Found
            </Box>
        </Box>
    )


    return (
        <>
            <Container maxWidth={'lg'} sx={{
                color: 'white',
                padding: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        fontSize: {
                            xs: '1rem',
                            md: '1.5rem',
                        },
                        fontWeight: 'bold',
                    }}>
                        My Posts
                    </Box>

                    <MDFContainedBox>
                        <CreateButton/>
                    </MDFContainedBox>

                </Box>

                {postsLoading ? (
                    <PostsSkeleton />
                ) : isError || data?.length === 0 ? (
                    noDataFound()
                ) : (
                    <>
                        <Box sx={{ width: '100%' }}>
                            <Divider sx={{ backgroundColor: '#9e9e9e' }} />
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                {data?.map((post: any) => (
                                    <Grid key={post['_id']} item xs={12}>
                                        <PostCard post={post} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </>
                )}
            </Container>
            <CreatePostModal/>
        </>
    )
}


export default DashboardPageSkeleton