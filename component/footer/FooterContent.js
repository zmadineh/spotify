import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleLike, handlePlay, playTrack} from "../../redux/slices/musics.slice";
import FooterTrackCard from "../footer/FooterTrackCard";
import AudioPlayer from "../footer/audio-section/AudioPlayer";
import {emptyTrack} from "../../data/music-data/emptyTrack";

import Grid from "@mui/material/Grid";
import VolumeSlider from "./volume-section/VolumeSlider";

export default function FooterContent({ sidebarWidth }) {

    const trackData = useSelector((state) => state.musics.data['track']);
    const dispatch = useDispatch();

    // states
    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    // references
    const audioPlayer = useRef();   // reference our audio component

    let current = trackData.find(track => track.playing || track.pause);
    let emptyMusic = current === undefined ;
    const currentTrack = (emptyMusic ? emptyTrack : current)
    const trackArray = emptyMusic ? [] : trackData.filter(track => track.playlist_id === currentTrack.playlist_id)
    const [trackIndex, setTrackIndex] = useState(trackArray.findIndex(item => item.id === currentTrack.id))

    const handleLikeClick = (track) => {
        if (!emptyMusic)
            dispatch(handleLike(track))
    }

    const skipForward = () => {
        if (!emptyMusic) {
            if (trackIndex+1 < trackArray.length && !forward) {
                dispatch(playTrack(trackArray[trackIndex + 1]))
                setTrackIndex(trackIndex + 1)
            }
        }
    }

    const skipBackward = () => {
        if(!emptyMusic) {
            if (trackIndex-1 > -1 && !backward) {
                dispatch(playTrack(trackArray[trackIndex - 1]))
                setTrackIndex(trackIndex - 1)
            }
        }
    }

    const handleShuffle = () => {
        if(!emptyMusic) {
            const randomIndex = Math.floor(Math.random() * trackArray.length);
            if (shuffle) {
                dispatch(playTrack(trackArray[randomIndex]))
                setTrackIndex(randomIndex)
                console.log(shuffle, trackArray[randomIndex])
            }
        }
        console.log('shuffle ', shuffle)
    }

    return (
        <Grid container alignItems={"center"} width={"100%"} height={'93px'} color={'text.primary'} bgcolor={'background.secondary'}>

            <Grid item mobile={4} tablet={3} laptop={3} p={1}>
                <FooterTrackCard
                    currentTrack={currentTrack}
                    handleLikeClick={handleLikeClick}
                    maxWidth={sidebarWidth}
                />
            </Grid>

            <Grid item mobile={4} tablet={6} laptop={6} display={"flex"} justifyContent={"center"}>
                <AudioPlayer
                    audioPlayer={audioPlayer}
                    track={currentTrack}
                    skipForward={skipForward}
                    forward={forward}
                    backward={backward}
                    skipBackward={skipBackward}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    handleShuffle={handleShuffle}
                />
            </Grid>

            <Grid item mobile={4} tablet={3} laptop={3} display={"flex"} justifyContent={"flex-end"}>
                <VolumeSlider audioPlayer={audioPlayer} />
            </Grid>
        </Grid>
    )
}