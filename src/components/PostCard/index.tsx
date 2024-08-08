import Card from "@mui/material/Card";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import {Post} from "@/types/post.type";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PostCard = ({post}: { post: Post }) => {
    const router = useRouter()
    return (
        <Card sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            color: 'white',
        }}>
            <CardActionArea onClick={() => router.push(`/${post['_id']}`)} disableRipple>
                <CardContent>

                    <Grid container>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'space-between',
                                gap: '0.3rem'
                            }}>
                                <MDFGradientText sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        md: '0.8rem'
                                    },
                                    fontWeight: 'bold',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {post['title']}
                                </MDFGradientText>

                                <Box>
                                    <Typography sx={{
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                    }}>
                                        Created By: {post['author']['fullName']}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: '1rem',
                                height: '100%'
                            }}>
                                <Typography sx={{
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',

                                }}>
                                    <Box sx={{
                                        display: {
                                            xs: 'block',
                                            md: 'inline'
                                        },
                                        textAlign: "right"
                                    }}>Created On:</Box> &nbsp;{new Date(post['createdAt']).toDateString()}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}


export default PostCard