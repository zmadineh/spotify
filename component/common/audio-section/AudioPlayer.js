import React, {useRef, useState} from 'react'
import {useDispatch} from "react-redux";
import {handlePlay} from "../../../redux/slices/musics.slice";
import AudioSlider from "./AudioSlider";
import AudioControls from "./AudioControls";

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AudioPlayer ({track, forward, backward, skipForward, skipBackward}) {

    const dispatch = useDispatch();
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('tablet'))

    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    // references
    const audioPlayer = useRef();   // reference our audio component

    const togglePlayPause = () => {
        if (!isPlaying)
            audioPlayer.current.play();
        else
            audioPlayer.current.pause();
        setIsPlaying(!isPlaying);
        dispatch(handlePlay(track))
    }

    return (
        <Grid width={'100%'} p={1}>
            <AudioControls
                isPlaying={isPlaying}
                repeat={repeat}
                setRepeat={setRepeat}
                shuffle={shuffle}
                setShuffle={setShuffle}
                forward={forward}
                skipForward={skipForward}
                backward={backward}
                skipBackward={skipBackward}
                togglePlayPause={togglePlayPause}
            />
            <AudioSlider
                audioPlayer={audioPlayer}
                track={track}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                repeat={repeat}
                shuffle={shuffle}
                togglePlayPause={togglePlayPause}
            />
        </Grid>
    )
}