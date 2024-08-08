import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import {useSetRecoilState} from "recoil";
import AddIcon from '@mui/icons-material/Add';
import {createPostModalState} from "@/atoms/createPostModal.atom";

const MDFButton = styled(Button)({
    color: 'white',
    textTransform: 'none',
})

const FilterButton = () => {
    const setCreatePostModalOpen = useSetRecoilState(createPostModalState)
    return (
        <MDFButton startIcon={<AddIcon/>} onClick={()=> setCreatePostModalOpen(true)}>
            Create
        </MDFButton>
    )
}

export default FilterButton