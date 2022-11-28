import React from 'react'
import PlayPauseAction from "../PlayPauseAction";

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import ControlButton from "./ControlButton";


export const ToggleIconButton = styled(IconButton)(({ theme }) => ({
   '& 	.MuiButtonBase-root .Mui-focusVisible' : {
       color: theme.palette.secondary.main
   }
}));

export default function AudioControls ({repeat, setRepeat, shuffle, setShuffle, backward, skipBackward, forward, skipForward, isPlaying, togglePlayPause}) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('tablet'))

    const toggleRepeat = () => {
        if (!repeat) setShuffle(false)
        setRepeat(!repeat)
    }

    const toggleShuffle = () => {
        if (!shuffle) setRepeat(false)
        setShuffle(!shuffle)

    }

    return (
        <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} gap={(mobileMatch ? 0.5 : 2)}>
            <ControlButton active={shuffle} onClick={toggleShuffle}>
                <ShuffleIcon fontSize={"small"} />
            </ControlButton>
            <ControlButton active={false} onClick={skipBackward}>
                <SkipPreviousIcon fontSize={"small"} />
            </ControlButton>
            <PlayPauseAction color={"secondary.main"} onClick={togglePlayPause} size={'35px'}>
                {isPlaying ? <PauseIcon color={"primary"}/> : <PlayArrowIcon color={"primary"}/>}
            </PlayPauseAction>
            <ControlButton active={false} onClick={skipForward}>
                <SkipNextIcon fontSize={"small"} />
            </ControlButton>
            <ControlButton active={repeat} onClick={toggleRepeat}>
                <RepeatIcon fontSize={"small"} />
            </ControlButton>
        </Grid>

    )
}