import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Box";

const PostDetailsSkeleton = () => {
    return (
        <Container maxWidth={'xl'} sx={{
            margin: '1rem 0',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                        gap: '1rem',
                        height: '100px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            backgroundColor: 'rgba(255,255,255, 0.2)'
                        }}>
                            <Skeleton animation={"wave"} variant={"rectangular"} width={'100%'} height={'100%'}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        padding: '1rem',
                        gap: '1rem',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            flexDirection: 'row'

                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                width: '100%',
                                justifyContent:"flex-end"
                            }}>
                                <Box sx={{
                                    backgroundColor: 'rgba(255,255,255, 0.2)',
                                    height: '5vh',
                                    width: '40%',
                                    borderRadius: '0.5rem'
                                }}>
                                    <Skeleton animation={"wave"} variant={"rectangular"} width={'100%'} sx={{
                                        height: '100%'
                                    }}/>
                                </Box>
                            </Box>


                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    backgroundColor: 'rgba(255,255,255, 0.2)',
                                    height: '5vh',
                                    width: '40%',
                                    borderRadius: '0.5rem'
                                }}>
                                    <Skeleton animation={"wave"} variant={"rectangular"} width={'100%'} sx={{
                                        height: '100%'
                                    }}/>
                                </Box>
                            </Box>
                        </Box>





                        <Box sx={{
                            backgroundColor: 'rgba(255,255,255, 0.2)',
                            height: '5vh',
                            borderRadius: '0.5rem'
                        }}>

                            {
                                Array.from({length: 10}).map((_, index) => (
                                    <Skeleton key={index} animation={"wave"} variant={"rectangular"} width={'100%'}
                                              sx={{
                                                  height: '100%'
                                              }}/>
                                ))
                            }
                        </Box>


                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PostDetailsSkeleton;