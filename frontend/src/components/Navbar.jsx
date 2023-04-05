import { useState, React} from 'react'
import { Box,styled, Toolbar, Typography} from '@mui/material'
import { theme } from "../theme"
import { ExpandMoreRounded} from '@mui/icons-material'
import NavbarElements from "./Navbar"

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    justifyContent: "space-evenly"

});



export default function Navbar(){
    return(
        <StyledToolbar>
        <Typography>
            Flone
        </Typography>
        <NavbarElements name={"Home"}/>
        </StyledToolbar>
    )
}