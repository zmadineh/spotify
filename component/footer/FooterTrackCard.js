import TrackCard from "../track/TrackCard";

import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import IconButton from "@mui/material/IconButton";


export default function FooterTrackCard({currentTrack, handleLikeClick, maxWidth}) {

    return (
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"space-between"} maxWidth={maxWidth}>
            <TrackCard track={currentTrack} />
            <Grid item display={"flex"}>
                <IconButton sx={{color: "secondary.light"}} onClick={handleLikeClick}>
                    {currentTrack.favorite ? <FavoriteIcon fontSize={"small"} color={"error"}/> : <FavoriteBorderIcon fontSize={"small"}/>}
                </IconButton>
                <IconButton sx={{color: "secondary.light"}}>
                    <MusicVideoIcon fontSize={"small"}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}