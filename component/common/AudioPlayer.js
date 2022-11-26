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

export default function AudioPlayer ({track, skipForward, skipPrevious}) {

    const dispatch = useDispatch();

    // state
    const [playing, setPlaying] = useState(false);
    const [src, setSrc] = useState("");
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

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
        console.log('use effect: ', track.playing, track.pause, currentTime, track.src)

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

        console.log('audio: ', track.playing, track.pause)
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        dispatch(handlePlay(track))
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
        // progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    console.log('audio vasat: ', track.playing, track.pause)

    return (
        <div>
            <Grid display={"flex"} justifyContent={"center"} gap={2} color={'text.secondary'}>
                <IconButton color={"inherit"}><ShuffleIcon fontSize={"small"} /></IconButton>
                <IconButton color={"inherit"} onClick={skipPrevious}><SkipPreviousIcon fontSize={"small"} /></IconButton>
                <IconButton>
                    <PlayPauseAction color={"secondary.main"} onClick={togglePlayPause}>
                        {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </PlayPauseAction>
                </IconButton>
                <IconButton color={"inherit"} onClick={skipForward}><SkipNextIcon fontSize={"small"} /></IconButton>
                <IconButton color={"inherit"}><RepeatIcon fontSize={"small"} /></IconButton>
            </Grid>

            <Grid display={"flex"} justifyContent={"center"}>
                <audio ref={audioPlayer} src={src} preload="metadata"></audio>
                <Grid display={"flex"}>
                    <Grid><input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} /></Grid>
                    <Grid>{calculateTime(currentTime)} {(duration && !isNaN(duration)) && calculateTime(duration)}</Grid>
                </Grid>

            </Grid>
        </div>
    )
}