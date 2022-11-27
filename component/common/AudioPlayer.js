import React, { useState, useRef, useEffect } from 'react'

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from "@mui/material/IconButton";
import PlayPauseAction from "./PlayPauseAction";
import Grid from "@mui/material/Grid";
import {useDispatch} from "react-redux";
import {handlePlay} from "../../redux/slices/musics.slice";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

export default function AudioPlayer ({track, forward, backward, skipForward, skipBackward}) {

    const dispatch = useDispatch();
    const theme = useTheme();
    const tabletMatch = useMediaQuery(theme.breakpoints.down('tablet'))

    // state
    const [playing, setPlaying] = useState(false);
    const [src, setSrc] = useState("");
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        setPlaying(track.playing)
        setSrc(track.src)
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;

        if (track.playing) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, track.playing]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = playing;
        setPlaying(!prevValue);

        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        dispatch(handlePlay(track))
    }

    const toggleRepeat = () => {
        setRepeat(!repeat)
    }

    const toggleShuffle = () => {
        setShuffle(!shuffle)
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        setCurrentTime(progressBar.current.value);
    }

    return (
        <Grid>
            <Grid display={"flex"} justifyContent={"center"} gap={(tabletMatch ? 0.5 : 2)} color={'text.secondary'}>
                <IconButton sx={{color: (shuffle ? 'secondary.main' : 'action.disabledBackground')}} onClick={toggleShuffle}>
                    <ShuffleIcon fontSize={"small"} />
                </IconButton>
                <IconButton sx={{color: (backward ? 'secondary.main' : 'action.disabledBackground')}} onClick={skipBackward}>
                    <SkipPreviousIcon fontSize={"small"} />
                </IconButton>
                <IconButton onClick={togglePlayPause}>
                    <PlayPauseAction color={"secondary.main"}>
                        {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </PlayPauseAction>
                </IconButton>
                <IconButton sx={{color: (forward ? 'secondary.main' : 'action.disabledBackground')}} onClick={skipForward}>
                    <SkipNextIcon fontSize={"small"} />
                </IconButton>
                <IconButton sx={{color: (repeat ? 'secondary.main' : 'action.disabledBackground')}} onClick={toggleRepeat}>
                    <RepeatIcon fontSize={"small"} />
                </IconButton>
            </Grid>

            <Grid display={"flex"} justifyContent={"center"}>
                <audio ref={audioPlayer} src={src} preload="metadata"></audio>
                <Grid display={"flex"}>
                    <Grid><input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} /></Grid>
                    <Grid>{calculateTime(currentTime)} {(duration && !isNaN(duration)) && calculateTime(duration)}</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}