import React, { useState, useRef, useEffect } from 'react'
// import styles from "../styles/AudioPlayer.module.css";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from "@mui/material/IconButton";
import PlayPauseAction from "./PlayPauseAction";
import Grid from "@mui/material/Grid";

export default function AudioPlayer ({track}) {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
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

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        changeRange();
    }

    const handlePausePlayIcon = (track) => {
        if(track.playing)
            return <PauseIcon />
        else if (track.pause)
            return <PlayArrowIcon />
    }

    const handlePlayMusic = (track) => {
        // const audioEl = document.getElementsByClassName("audio-element")[0];
        // if(currentTrack.pause)
        //     audioEl.play();
        // else if(currentTrack.playing)
        //     audioEl.pause();
        // dispatch(handlePlay(currentTrack));
    };

    return (
        <div>
            <Grid display={"flex"} justifyContent={"center"} gap={2} color={'text.secondary'}>
                <IconButton color={"inherit"}><ShuffleIcon fontSize={"small"} /></IconButton>
                <IconButton color={"inherit"}><SkipPreviousIcon fontSize={"small"} /></IconButton>
                <IconButton>
                    <PlayPauseAction color={"secondary.main"} onClick={togglePlayPause}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </PlayPauseAction>
                </IconButton>
                <IconButton color={"inherit"}><SkipNextIcon fontSize={"small"} /></IconButton>
                <IconButton color={"inherit"}><RepeatIcon fontSize={"small"} /></IconButton>
            </Grid>

            <Grid display={"flex"} justifyContent={"center"}>
                <audio ref={audioPlayer} src={track.src} preload="metadata"></audio>
                <Grid display={"flex"}>
                    <Grid><input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} /></Grid>
                    <Grid>{calculateTime(currentTime)} {(duration && !isNaN(duration)) && calculateTime(duration)}</Grid>
                </Grid>

            </Grid>


            {/*<button onClick={backThirty}><SkipPreviousIcon /> 30</button>*/}
            {/*<button onClick={togglePlayPause}>*/}
            {/*    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}*/}
            {/*</button>*/}
            {/*<button onClick={forwardThirty}>30 <SkipNextIcon /></button>*/}

            {/* current time */}
            {/*<div>{calculateTime(currentTime)}</div>*/}

            {/* progress bar */}
            {/*<div>*/}
            {/*    <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />*/}
            {/*</div>*/}

            {/* duration */}
            {/*<div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>*/}
        </div>
    )
}