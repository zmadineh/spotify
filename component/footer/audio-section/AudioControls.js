import React from 'react';
import ControlButton from "./ControlButton";
import PlayPauseAction from "../../common/PlayPauseAction";

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Grid from "@mui/material/Grid";


export default function AudioControls (props) {

    const {isPlaying, skipForward, skipBackward, repeat, setRepeat, shuffle, setShuffle, togglePlayPause} = props

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
            <ControlButton onClick={skipForward}>
                <SkipNextIcon fontSize={"small"} />
            </ControlButton>
            <ControlButton active={repeat} onClick={toggleRepeat}>
                <RepeatIcon fontSize={"small"} />
            </ControlButton>
        </Grid>

    )
}