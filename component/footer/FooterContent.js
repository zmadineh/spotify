import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleLike, pauseTrack, playTrack} from "../../redux/slices/musics.slice";
import FooterTrackCard from "../footer/FooterTrackCard";
import AudioPlayer from "../footer/audio-section/AudioPlayer";

import Grid from "@mui/material/Grid";
import VolumeSlider from "./volume-section/VolumeSlider";

export default function FooterContent({ sidebarWidth }) {

    const trackData = useSelector((state) => state.musics.data['track']);
    const currentPlayingId = useSelector((state) => state.musics.data.playing.track);
    const currentPlayListId = useSelector((state) => state.musics.data.playing.playlist);

    const currentTrack = trackData.find(track => track.id === currentPlayingId);
    const trackArray = trackData.filter(track => track.playlist_id === currentPlayListId);
    const trackIndex = trackArray.findIndex(item => item.id === currentPlayingId);

    const dispatch = useDispatch();

    // states
    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    // references
    const audioPlayer = useRef();   // reference our audio component

    const handleLikeClick = (track) => {
        if (!currentPlayingId)
            dispatch(handleLike(track))
    }

    const skipForward = useCallback(() => {
        if (currentTrack.id) {
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
        if(currentTrack.id) {
            if (trackIndex-1 > -1 && !backward) {
                dispatch(playTrack(trackArray[trackIndex - 1]))
            }
        }
    },[]);

    const handleShuffle = useCallback( () => {
        if(currentTrack.id) {
            const randomIndex = Math.floor(Math.random() * trackArray.length);
            if (shuffle) {
                dispatch(playTrack(trackArray[randomIndex]))
            }
        }
    });

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