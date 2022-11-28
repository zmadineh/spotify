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


export default function AudioControls ({repeat, setRepeat, shuffle, setShuffle, backward, skipBackward, forward, skipForward, isPlaying, togglePlayPause}) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('tablet'))

    const toggleRepeat = () => {
        console.log('in toggle repeat: ', repeat)
        setRepeat(!repeat)
    }

    const toggleShuffle = () => {
        setShuffle(!shuffle)
    }

    return (
        <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} gap={(mobileMatch ? 0.5 : 2)} color={'text.secondary'}>
            <IconButton sx={{color: (shuffle ? 'secondary.main' : 'action.disabledBackground')}} onClick={toggleShuffle}>
                <ShuffleIcon fontSize={"small"} />
            </IconButton>
            <IconButton sx={{color: (backward ? 'secondary.main' : 'action.disabledBackground')}} onClick={skipBackward}>
                <SkipPreviousIcon fontSize={"small"} />
            </IconButton>
            {/*<IconButton >*/}
                <PlayPauseAction color={"secondary.main"} onClick={togglePlayPause} size={'35px'}>
                    {isPlaying ? <PauseIcon color={"primary"}/> : <PlayArrowIcon color={"primary"}/>}
                </PlayPauseAction>
            {/*</IconButton>*/}
            <IconButton sx={{color: (forward ? 'secondary.main' : 'action.disabledBackground')}} onClick={skipForward}>
                <SkipNextIcon fontSize={"small"} />
            </IconButton>
            <IconButton sx={{color: (repeat ? 'secondary.main' : 'action.disabledBackground')}} onClick={toggleRepeat}>
                <RepeatIcon fontSize={"small"} />
            </IconButton>
        </Grid>

    )
}