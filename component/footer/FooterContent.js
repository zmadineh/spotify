import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleLike, pauseTrack, playTrack} from "../../redux/slices/musics.slice";
import FooterTrackCard from "../footer/FooterTrackCard";
import AudioPlayer from "../footer/audio-section/AudioPlayer";
import VolumeSlider from "./volume-section/VolumeSlider";

import Grid from "@mui/material/Grid";
import TrackModal from "../track/modal/TrackModal";
import useImageColor from "../../helper/useImageColor";
import TrackModalContent from "../track/modal/TrackModalContent";
import AudioControls from "./audio-section/AudioControls";
import AudioSlider from "./audio-section/AudioSlider";
import TrackCard from "../track/TrackCard";

export default function FooterContent({ sidebarWidth }) {

    const dispatch = useDispatch();
    const emptySongId = 0;

    // data
    const trackData = useSelector((state) => state.musics.data['track']);
    const currentPlayingId = useSelector((state) => state.musics.data.playing.track);
    const currentPlayListId = useSelector((state) => state.musics.data.playing.playlist);

    const currentTrack = trackData.find(track => track.id === currentPlayingId);
    const trackArray = trackData.filter(track => track.playlist_id === currentPlayListId);
    const trackIndex = trackArray.findIndex(item => item.id === currentPlayingId);

    // states
    const [isPlaying, setIsPlaying] = useState(false);
    const [src, setSrc] = useState(currentTrack.src);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [repeat, setRepeat] = useState(false)

    const [openModal, setOpenModal] = useState(false);
    const [dominantColor, setDominantColor] = useState('#ffffff')
    const { colors } = useImageColor(currentTrack.imagePath, { colors: 3, cors: true, format: 'hex' });

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar component
    const modalProgressBar = useRef();   // reference our progress bar component

    useEffect(() => {
        console.log(dominantColor, currentTrack.imagePath)
        if (colors) setDominantColor(colors[0])
    },[colors])

    const toggleOpenModal = useCallback(() => {
        if(currentTrack.id !== emptySongId)
            setOpenModal(!openModal)
    },[currentTrack, openModal]);

    const onCloseModal = () => {
       //
    }

    const handleLikeClick = useCallback((track) => {
        if (currentTrack.id !== emptySongId)
            dispatch(handleLike(track))
    }, [currentTrack]);

    const togglePlayPause = useCallback(() => {
        if(currentTrack.id !== emptySongId) {
            if (currentTrack.playing)
                dispatch(pauseTrack(currentTrack)) ;
            else if(currentTrack.pause)
                dispatch(playTrack(currentTrack))
            setIsPlaying(!isPlaying);
        }

    }, [currentTrack]);

    const skipForward = useCallback(() => {
        if (currentTrack.id !== emptySongId) {
            if (trackIndex+1 < trackArray.length) {
                dispatch(playTrack(trackArray[trackIndex + 1]))
                return true;
            }
            else {
                dispatch(pauseTrack(trackArray[trackIndex]))
                return false;
            }
        }
    }, [trackData]);

    const skipBackward = useCallback(() => {
        if(currentTrack.id !== emptySongId) {
            if (trackIndex-1 > -1 && !backward) {
                dispatch(playTrack(trackArray[trackIndex - 1]))
            }
        }
    },[trackData]);

    const handleShuffle = useCallback( () => {
        if(currentTrack.id !== emptySongId) {
            let randomIndex = Math.floor(Math.random() * trackArray.length);
            while(randomIndex === trackIndex){
                randomIndex = Math.floor(Math.random() * trackArray.length);
            }
            if (shuffle) {
                dispatch(playTrack(trackArray[randomIndex]))
            }
        }
    },[currentTrack]);

    const setCurrentTimeToProgress = useCallback((e) => {
        const time = e.currentTarget.currentTime

        // console.log('time: ', Math.floor(time), duration, e.currentTarget.currentTime)
        if(time === e.currentTarget.duration) {
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
                // console.log('skip')
            }
        }
        else {
            progressBar.current.value = time
            setCurrentTime(time.toFixed(2))
        }
    },[repeat, shuffle, currentTrack]);


    const {...audioProps} = {currentTrack, src, setSrc , duration, setDuration, currentTime, setCurrentTime,
        isPlaying, setIsPlaying, forward, skipForward, backward,
        skipBackward, repeat, setRepeat, shuffle, setShuffle, handleShuffle, togglePlayPause}


    return (
        <Grid container alignItems={"center"} width={"100%"} height={'93px'} color={'text.primary'} bgcolor={'background.secondary'}>

            <audio
                ref={audioPlayer}
                onTimeUpdate={setCurrentTimeToProgress}
                onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={src}
                preload="metadata">
            </audio>

            <Grid item mobile={4} tablet={3} laptop={3} p={1}>
                <FooterTrackCard
                    currentTrack={currentTrack}
                    handleLikeClick={handleLikeClick}
                    maxWidth={sidebarWidth}
                    toggleOpenModal={toggleOpenModal}
                />
            </Grid>

            <Grid item mobile={4} tablet={6} laptop={6} display={"flex"} justifyContent={"center"}>
                <Grid width={'100%'} p={1}>
                    <AudioControls {...audioProps} />
                    <AudioSlider audioPlayer={audioPlayer} progressBar={progressBar} {...audioProps}/>
                </Grid>
            </Grid>

            <Grid item mobile={4} tablet={3} laptop={3} display={"flex"} justifyContent={"flex-end"}>
                <VolumeSlider audioPlayer={audioPlayer} />
            </Grid>

            <TrackModal open={openModal} dominantColor={dominantColor} toggleOpenModal={toggleOpenModal} onCloseModal={onCloseModal}>

                <TrackModalContent
                    audioPlayer={audioPlayer} progressBar={modalProgressBar}
                    {...audioProps}/>

            </TrackModal>
        </Grid>
    )
}