import React, {useState, useCallback} from 'react'
import {useDispatch} from "react-redux";
import {handlePlay, pauseTrack, playTrack} from "../../../redux/slices/musics.slice";
import AudioSlider from "./AudioSlider";
import AudioControls from "./AudioControls";

import Grid from "@mui/material/Grid";

export default function AudioPlayer ({track, audioPlayer, forward, backward, skipForward, skipBackward, shuffle, setShuffle, handleShuffle}) {

    const dispatch = useDispatch();

    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState(false)

    const togglePlayPause = useCallback(() => {

        console.log(track.playing, track.pause)

        if (track.playing) {
            audioPlayer.current.pause();
            dispatch(pauseTrack(track)) ;
        }
        else if(track.pause) {
            audioPlayer.current.play();
            dispatch(playTrack(track))
        }
        setIsPlaying(!isPlaying);

    }, [track]);

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
                handleShuffle={handleShuffle}
            />
        </Grid>
    )
}