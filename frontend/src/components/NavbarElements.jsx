import {useState,React} from 'react'
import { Box,styled, Toolbar, Typography} from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material';

const StyledBox = styled(Box)({
    display: "flex",
});

export default function NavbarElements(props){
    return(
        <StyledBox>
            <Typography>
                {props.name}
                </Typography>
                <ExpandMoreRounded/>
            </StyledBox>
    )
}