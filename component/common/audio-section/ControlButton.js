import React from 'react'
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";


export const ToggleIconButton = styled(IconButton)(({ theme }) => ({
    '& 	.MuiButtonBase-root .Mui-focusVisible' : {
        color: theme.palette.secondary.main
    }
}));

export default function ControlButton ({children, active , onClick}) {

    return (
        <IconButton sx={{color: (active ? 'secondary.main' : 'action.disabledBackground')}} onClick={onClick}>
            {children}
        </IconButton>
    )
}