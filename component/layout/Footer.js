import {useDispatch, useSelector} from "react-redux";

import Grid from "@mui/material/Grid";
import todayTopHitImg from "../../public/image/track-image/today-top-hit.jpg";
import {handleLike, handlePlay} from "../../redux/slices/musics.slice";
import FooterTrackCard from "../footer/FooterTrackCard";
import AudioPlayer from "../common/AudioPlayer";
import {useState} from "react"; // an empty image


export default function Footer({ sidebarWidth }) {

    const trackData = useSelector((state) => state.musics.data['track']);
    const dispatch = useDispatch();

    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)

    const currentTrack = trackData.find(track => track.playing || track.pause);
    const trackArray = trackData.filter(track => track.playlist_id === currentTrack.playlist_id)
    const [trackIndex, setTrackIndex] = useState(trackArray.findIndex(item => item.id === currentTrack.id))

    let emptyMusic = false;

    const handleLikeClick = (track) => {
        if (!emptyMusic)
            dispatch(handleLike(track))
    }

    const skipForward = () => {
        if (trackIndex+1 < trackArray.length && !forward) {
            dispatch(handlePlay(trackArray[trackIndex + 1]))
            setTrackIndex(trackIndex + 1)
        }
        setForward(!forward)
    }

    const skipBackward = () => {
        if (trackIndex-1 > -1 && !backward) {
            dispatch(handlePlay(trackArray[trackIndex - 1]))
            setTrackIndex(trackIndex - 1)
        }
        setBackward(!backward)
    }

    return (
        <Grid container alignItems={"center"} width={"100%"} height={'75px'} color={'text.primary'} bgcolor={'background.secondary'}>

            <Grid item mobile={4} tablet={3} laptop={3} p={1}>
                <FooterTrackCard
                    currentTrack={currentTrack}
                    handleLikeClick={handleLikeClick}
                    maxWidth={sidebarWidth}/>
            </Grid>

            <Grid item mobile={4} tablet={6} laptop={6} display={"flex"} justifyContent={"center"}>
                <AudioPlayer
                    track={currentTrack}
                    skipForward={skipForward}
                    forward={forward}
                    backward={backward}
                    skipBackward={skipBackward}/>
            </Grid>

            <Grid item mobile={4} tablet={3} laptop={3} display={"flex"} justifyContent={"flex-end"}>
                end
            </Grid>
        </Grid>
    )
}