import React, {useEffect, useRef, useState} from "react";
import {TrackSlider} from "./TrackSlider";

import Grid from "@mui/material/Grid";

export default function AudioSlider ({isPlaying, setIsPlaying, repeat, shuffle, track, audioPlayer, togglePlayPause, handleShuffle}) {

    // states
    const [src, setSrc] = useState("");
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
            audioPlayer.current.play();
        else if (track.pause)
            audioPlayer.current.pause();


    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, track.playing, track.src]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const onChange = (e) => {
        const audio = audioPlayer.current
        audio.currentTime = e.target.value
        progressBar.current.value = audio.currentTime;
    }

    const getCurrDuration = (e) => {
        const time = e.currentTarget.currentTime

        if(time === audioPlayer.current.duration) {
            if (repeat) {
                progressBar.current.value = 0
                setCurrentTime(0)
                audioPlayer.current.play();
            }
            else if (shuffle) {
                togglePlayPause();
                handleShuffle();
                setIsPlaying(true)
                progressBar.current.value = 0
                setCurrentTime(0)
                audioPlayer.current.play();
            }
            else {
                togglePlayPause();
            }

        }
        else {
            progressBar.current.value = time
            setCurrentTime(time.toFixed(2))
        }
    }

    return (
        <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'flex-end'} width={'100%'}>
            <audio
                ref={audioPlayer}
                onTimeUpdate={getCurrDuration}
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
                        value={currentTime}
                        max={Number(duration)}
                        color={"progress"}
                        size={"medium"}
                    />

                    {/*<LinearProgress variant="determinate" ref={progressBar} onChange={changeRange} value={currentTime} color={"progress"}/>*/}
                </Grid>
                <Grid item>{(duration && !isNaN(duration)) && calculateTime(duration)}</Grid>
            </Grid>
        </Grid>
    )
}