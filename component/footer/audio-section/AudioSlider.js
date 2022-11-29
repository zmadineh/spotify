import React, {useCallback, useEffect, useRef, useState} from "react";
import {TrackSlider} from "./TrackSlider";

import Grid from "@mui/material/Grid";

export default function AudioSlider ({isPlaying, setIsPlaying, repeat, shuffle, track, audioPlayer, togglePlayPause, handleShuffle, skipForward}) {

    // states
    const [src, setSrc] = useState(track.src);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const progressBar = useRef();   // reference our progress bar

    useEffect(() => {

        setIsPlaying(track.playing)
        setSrc(track.src)

        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;

        if (track.playing)
            audioPlayer.current.play().then(function() {
        }).catch(function(error) {
            console.log('The play() Promise rejected!', error);})

        else if (track.pause)
            audioPlayer.current.pause();

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, track]);

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
    }, []);

    const setCurrentTimeToProgress = useCallback((e) => {
        const time = e.currentTarget.currentTime

        if(time === audioPlayer.current.duration) {
            progressBar.current.value = 0
            setCurrentTime(0)

            if (repeat) {
                audioPlayer.current.play();
            }
            else if (shuffle) {
                togglePlayPause();
                handleShuffle();
                setIsPlaying(true)
                audioPlayer.current.play();
            }
            else {
                togglePlayPause();
                const next = skipForward();
                if(next)
                    audioPlayer.current.play();
                else
                    audioPlayer.current.pause();
                console.log('skip')
            }
        }
        else {
            progressBar.current.value = time
            setCurrentTime(time.toFixed(2))
        }
    },[repeat, shuffle, track]);

    return (
        <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'flex-end'} width={'100%'}>
            <audio
                ref={audioPlayer}
                onTimeUpdate={setCurrentTimeToProgress}
                onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={src}
                preload="metadata">
            </audio>

            <Grid container justifyContent={"center"} alignItems={"center"} spacing={2} m={'-11px'}>
                <Grid item>{calculateTime(currentTime)}</Grid>
                <Grid item display={"flex"} alignItems={"center"} mobile={8}>

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
                <Grid item>{(duration && !isNaN(duration)) && calculateTime(duration).toString()}</Grid>
            </Grid>
        </Grid>
    )
}