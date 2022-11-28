import React from 'react'
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";

export const ToggleIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.action.disabledBackground,
    "&:hover, &.Mui-focusVisible": {
        color: theme.palette.secondary.main
    }
}));
export default function ControlButton ({children, active = false , onClick}) {

    return (
        <ToggleIconButton sx={{color: (active ? 'secondary.main' : 'action.disabledBackground')}} onClick={onClick}>
            {children}
        </ToggleIconButton>
    )
}