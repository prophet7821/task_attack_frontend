"use client"
import Modal from '@mui/material/Modal'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import Box from '@mui/material/Box'
import {createPostModalState} from '@/atoms/createPostModal.atom'
import Divider from '@mui/material/Divider'
import MDFContainedBox from "@/components/MDFContainedBox";
import Button from '@mui/material/Button'
import {snackbarState} from "@/atoms/snackbarState.atom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";
import {InputAdornment} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CreatePostTextField from "@/components/CreatePostModal/CreatePostTextField";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "@/services/post.service";


const CreatePostModal = () => {

    const [createPostModalOpen, setCreatePostModalOpen] = useRecoilState(createPostModalState)
    const setSnackBarState = useSetRecoilState(snackbarState)
    const validationSchema = yup.object({
        title: yup
            .string()
            .required('Title is required')
            .min(3, 'Title must be at least 3 characters long')
            .max(100, 'Title must be less than 100 characters'),
        content: yup
            .string()
            .required('Content is required')
            .min(10, 'Content must be at least 10 characters long')
    });
    const queryClient = useQueryClient()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255,.2)',
        backdropFilter: 'blur(0.5rem)',
        borderRadius: '1rem',
        width: {
            xs: '90%',
            sm: '60%',
            md: '50%',
        },
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    };


    const handleClose = () => {
        setCreatePostModalOpen(false)
    }

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['myPosts']})
            setSnackBarState({
                open: true,
                message: 'Post Created Successfully',
                severity: 'success'
            })
            handleClose()
        },
        onError :() => {
            setSnackBarState({
                open: true,
                message: 'Failed to create post',
                severity: 'error'
            })
        }
    })


    const submitPost = (values: {
        title: string,
        content: string
    }) => {
        console.log(values)
        mutation.mutate(values)
    }


    return (
        <Modal
            open={createPostModalOpen}
            onClose={handleClose}
        >
            <Box sx={style}>


                <Box sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.6rem 0.6rem 0 0.6rem',
                }}>
                    Create New Post
                </Box>


                <Box sx={{
                    width: '100%',
                }}>
                    <Divider sx={{
                        backgroundColor: '#9e9e9e'
                    }}/>
                </Box>


                <Box sx={{
                    p: 3,
                    boxSizing: 'border-box',
                    width: '100%',
                    maxHeight: '40vh',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '0.2rem',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#EF4444',
                        borderRadius: '1rem',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
                component={"form"} onSubmit={handleSubmit(submitPost)}>
                    <Grid container rowGap={'0.5rem'}>
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{
                                    width: {
                                        xs: '100%',
                                    }
                                }}>
                                    <CreatePostTextField fullWidth variant={"outlined"} placeholder={"Title"}
                                                         type={"text"} {...register("title")}
                                                         InputProps={{
                                                             endAdornment: (
                                                                 <InputAdornment position={"end"}>
                                                                     {errors.title && (
                                                                         <Tooltip title={errors.title.message}>
                                                                             <ErrorOutlineIcon sx={{color: 'red'}}/>
                                                                         </Tooltip>
                                                                     )}
                                                                 </InputAdornment>
                                                             )
                                                         }}
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{
                                    width: {
                                        xs: '100%',
                                    }
                                }}>
                                    <CreatePostTextField fullWidth variant={"outlined"} placeholder={"Content"}
                                                         type={"text"} {...register("content")}
                                                         InputProps={{
                                                             endAdornment: (
                                                                 <InputAdornment position={"end"}>
                                                                     {errors.content && (
                                                                         <Tooltip title={errors.content.message}>
                                                                             <ErrorOutlineIcon sx={{color: 'red'}}/>
                                                                         </Tooltip>
                                                                     )}
                                                                 </InputAdornment>
                                                             )
                                                         }}/>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                boxSizing: 'border-box',
                                p: 1
                            }}>
                                <MDFContainedBox>
                                    <Button type={"submit"} sx={{
                                        textTransform: 'none',
                                        color: 'white'
                                    }}>
                                        Submit
                                    </Button>
                                </MDFContainedBox>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Modal>
    )
}


export default CreatePostModal;