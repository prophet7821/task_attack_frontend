"use client"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import {searchModalState} from "@/atoms/searchModal.atom";
import {useRecoilState} from "recoil";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";
import {useRouter} from "next/navigation";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255,.1)',
    backdropFilter: 'blur(0.5rem)',
    borderRadius: '1rem',
    width: {
        xs: '90%',
        md: '50%',
    },

};

const SearchModal = () => {
    const router = useRouter();
    const [open, setOpen] = useRecoilState(searchModalState);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleClose = () => {
        setOpen(false)
        setSearchTerm('')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchTerm) {
            router.push(`/?authorName=${searchTerm}`)
            handleClose();
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box>
                    <TextField
                        onChange={handleChange}
                        onKeyUp={handleKeyPress}
                        sx={{
                            width: '100%',
                            '& fieldset': {
                                border: 'none',
                            },
                        }} placeholder='Search' InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SvgIcon viewBox="0 0 24 24">
                                    <defs>
                                        <linearGradient id="gradient-search" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#EF4444"/>
                                            <stop offset="100%" stopColor="#F59E0B"/>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill="url(#gradient-search)"
                                        d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </SvgIcon>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            searchTerm !== "" && (
                                <InputAdornment position={"end"}>
                                    <KeyboardReturnIcon sx={{color: "#fff"}}/>
                                </InputAdornment>
                            )
                        ),
                        sx: {
                            color: 'white',
                            fontSize: {
                                xs: '0.8rem',
                                sm: '1.5rem',
                            },
                            fontWeight: 'bold',
                        }
                    }}/>
                </Box>
            </Box>
        </Modal>
    )
}


export default SearchModal;