"use client"
import Container from '@mui/material/Container';
import {useQuery} from "@tanstack/react-query";
import {getPostById} from "@/services/post.service";
import PostDetailsSkeleton from "@/components/PostDetailsSkeleton";
import PostDetailsError from "@/components/PostDetailsError";
import {Grid} from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";


const PostDetails = ({params}: { params: { id: string } }) => {

    const {data, isLoading, isError} = useQuery({
        queryKey: [params.id],
        queryFn: () => getPostById(params.id)
    })

    return (
        <>
            {
                isLoading ? (
                    <PostDetailsSkeleton/>
                ) : isError ? (<PostDetailsError/>) : (
                    <>
                        <Container maxWidth={'xl'} sx={{
                            margin: '1rem 0',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box sx={{
                                        height: '50px',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: '1rem',
                                            overflow: 'hidden',
                                        }}>
                                            <Typography sx={{
                                                fontSize: '1.5rem',
                                                color: 'white',
                                                textShadow: '0 0 5px rgba(0,0,0,0.5)',
                                                fontWeight: 'bold'
                                            }}>{data?.title}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>


                                <Grid item xs={12}>
                                    <Box sx={{
                                        height: '50px',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: '1rem',
                                            overflow: 'hidden',
                                        }}>
                                            <Typography sx={{
                                                fontSize: '.7rem',
                                                color: 'white',
                                                textShadow: '0 0 5px rgba(0,0,0,0.5)',
                                                fontWeight: 'bold'
                                            }}><Box sx={{
                                                display: {
                                                    xs: 'block',
                                                    md: 'inline'
                                                },
                                                textAlign: "center"
                                            }}>Author : </Box>
                                                <MDFGradientText>{data?.authorId?.fullName}</MDFGradientText>
                                            </Typography> &nbsp; | &nbsp;
                                            <Typography sx={{
                                                fontSize: '.7rem',
                                                color: 'white',
                                                textShadow: '0 0 5px rgba(0,0,0,0.5)',
                                                fontWeight: 'bold'
                                            }}>
                                                <Box sx={{
                                                    display: {
                                                        xs: 'block',
                                                        md: 'inline'
                                                    },
                                                    textAlign: "center"
                                                }}>Created On : </Box>
                                                <MDFGradientText>{new Date(data?.createdAt).toDateString()}</MDFGradientText>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                        backgroundColor: 'rgba(255,255,255, 0.2)',
                                        padding: '1rem',
                                        boxSizing: 'border-box'
                                    }}>
                                        <Typography sx={{
                                            fontSize: '.7rem',
                                            color: 'white',
                                            textShadow: '0 0 5px rgba(0,0,0,0.5)',
                                            fontWeight: 'bold'
                                        }}>
                                            {data?.content}
                                        </Typography>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Container>
                    </>
                )
            }
        </>

    )
}

export default PostDetails