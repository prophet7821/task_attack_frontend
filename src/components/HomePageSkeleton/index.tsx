"use client"
import {useQuery} from "@tanstack/react-query";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PostsSkeleton from "@/components/PostsSkeleton";
import noData from '@/assets/no-data-icon.svg'
import {getPost} from "@/services/post.service";
import PostCard from "@/components/PostCard";
import {Post} from "@/types/post.type";




const HomePageSkeleton = ({searchParams}: {
    searchParams: { [key: string]: string }
}) => {



    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["posts", searchParams],
        queryFn: () => {
            return getPost(0, -1, searchParams["authorName"])
        }
    })


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
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        fontSize: {
                            xs: '1rem',
                            md: '1.5rem',
                        },
                        fontWeight: 'bold',
                    }}>
                        All Posts
                    </Box>

                </Box>

                {isLoading ? (
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
                                {data?.map((post: Post) => (
                                    <Grid key={post['_id']} item xs={12}>
                                        <PostCard post={post} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </>
                )}
            </Container>
        </>
    )
}


export default HomePageSkeleton