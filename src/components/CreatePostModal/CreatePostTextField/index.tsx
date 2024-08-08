"use client"
import TextField from '@mui/material/TextField';
import styled from "@mui/material/styles/styled";

const CreatePostTextField = styled(TextField)(({theme}) => ({
    // backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    borderRadius: '10px',
    '& fieldset': {
        border: 'none',
    },
    '& .MuiInputBase-input': {
        color: 'white',
    }


}));


export default CreatePostTextField;