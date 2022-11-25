import {useDispatch, useSelector} from "react-redux";

import Grid from "@mui/material/Grid";
import todayTopHitImg from "../../public/image/track-image/today-top-hit.jpg";
import {handleLike} from "../../redux/slices/musics.slice";
import FooterTrackCard from "../footer/FooterTrackCard";
import AudioPlayer from "../common/AudioPlayer"; // an empty image


export default function Footer({ sidebarWidth }) {

    const trackData = useSelector((state) => state.musics.data['track']);
    const dispatch = useDispatch();
    let currentTrack = trackData.find(track => track.playing || track.pause)
    let emptyMusic = true;
    if (!currentTrack)
        currentTrack = {
            title: 'title',
            singer: 'singer',
            image: todayTopHitImg,
            favorite: false
        };
    else emptyMusic = false;

    const handleLikeClick = () => {
        if (!emptyMusic )
            dispatch(handleLike(currentTrack))
    }

    return (
        <Grid container alignItems={"center"} width={"100%"} height={'75px'} color={'text.primary'} bgcolor={'background.secondary'}>

            <Grid item xs={2} p={1}>
                <FooterTrackCard currentTrack={currentTrack} handleLikeClick={handleLikeClick} maxWidth={sidebarWidth}/>
            </Grid>

            <Grid item xs={8} display={"flex"} justifyContent={"center"}>
                <AudioPlayer track={currentTrack}/>
            </Grid>

            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
                end
            </Grid>
        </Grid>
    )
}