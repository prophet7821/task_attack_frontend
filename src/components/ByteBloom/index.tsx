import React from "react";
import MDFGradientText from "@/components/MDFGradientText";
import {SxProps} from "@mui/system";
import styled from "@mui/material/styles/styled";

interface ByteBloomProps {
    style?: SxProps
}

const ByteBloomLogo = styled(MDFGradientText)({
    '&:hover': {
        cursor: 'pointer'
    }
})

const ByteBloom = (props: ByteBloomProps) => {
    return (
        <ByteBloomLogo
            sx={{...props.style}}>
            ByteBloom
        </ByteBloomLogo>
    );
}


export default ByteBloom