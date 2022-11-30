import React, {useState, useCallback} from 'react'
import {useDispatch} from "react-redux";
import {handlePlay, pauseTrack, playTrack} from "../../../redux/slices/musics.slice";
import AudioSlider from "./AudioSlider";
import AudioControls from "./AudioControls";

import Grid from "@mui/material/Grid";

export default function AudioPlayer (props) {

    const {audioPlayer, currentTrack, isPlaying, setIsPlaying, forward, skipForward, backward,
        skipBackward, repeat, setRepeat, shuffle, setShuffle, handleShuffle, togglePlayPause} = props

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
                track={currentTrack}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                repeat={repeat}
                shuffle={shuffle}
                togglePlayPause={togglePlayPause}
                handleShuffle={handleShuffle}
                skipForward={skipForward}
            />
        </Grid>
    )
}