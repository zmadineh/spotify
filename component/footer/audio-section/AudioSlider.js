import React, {useCallback, useEffect, useRef, useState} from "react";
import {TrackSlider} from "./TrackSlider";

import Grid from "@mui/material/Grid";

export default function AudioSlider (props) {

    const {audioPlayer, currentTrack, src, setSrc , duration, setDuration, currentTime, setCurrentTime
        , setIsPlaying, progressBar, skipForward, repeat, shuffle, handleShuffle, togglePlayPause} = props

    useEffect(() => {

        console.log('slider useEffect : ', currentTime)

        // progressBar.current.value = currentTime
        setIsPlaying(currentTrack.playing)
        setSrc(currentTrack.src)

        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;

        if (currentTrack.playing)
            audioPlayer.current.play().then(function() {
        }).catch(function(error) {
            console.log('The play() Promise rejected!', error);})

        else if (currentTrack.pause)
            audioPlayer.current.pause();

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, currentTrack]);

    const calculateTime = useCallback((secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }, []);

    const onChange = useCallback((e) => {
        audioPlayer.current.currentTime = e.target.value
        progressBar.current.value =  audioPlayer.current.currentTime;
        setCurrentTime(audioPlayer.current.currentTime)
    }, []);


    return (
        <Grid display={"flex"} alignItems={'center'} width={'100%'} gap={2}>
                <Grid item>{calculateTime(currentTime)}</Grid>
                <Grid item display={"flex"} alignItems={"center"} width={'100%'}>

                    {/*<input type="range" defaultValue="0" ref={progressBar} onChange={onChange} style={{width: '100%', height: '5px'}}/>*/}

                    <TrackSlider
                        aria-label="Volume"
                        ref={progressBar}
                        onChange={onChange}
                        defaultValue={0}
                        value={(currentTime ? currentTime : 0)}
                        max={(duration ? duration : 0)}
                        color={"progress"}
                        size={"medium"}
                    />

                    {/*<LinearProgress variant="determinate" ref={progressBar} onChange={changeRange} value={currentTime} color={"progress"}/>*/}
                </Grid>
                <Grid item>{(duration && !isNaN(duration)) && calculateTime(duration)}</Grid>
        </Grid>
    )
}