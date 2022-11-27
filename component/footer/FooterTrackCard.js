import TrackCard from "../track/TrackCard";

import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import IconButton from "@mui/material/IconButton";
import {useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function FooterTrackCard({currentTrack, handleLikeClick, maxWidth}) {

    const theme = useTheme();
    const mediumMatch = useMediaQuery(theme.breakpoints.up('medium'))

    return (
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"space-between"} maxWidth={maxWidth}>
            <TrackCard track={currentTrack} />
            { mediumMatch &&
                <Grid item display={"flex"}>
                    <IconButton sx={{color: "secondary.light"}} onClick={() => handleLikeClick(currentTrack)}>
                        {currentTrack.favorite ? <FavoriteIcon fontSize={"small"} color={"success"}/> : <FavoriteBorderIcon fontSize={"small"}/>}
                    </IconButton>
                    <IconButton sx={{color: "secondary.light"}}>
                        <MusicVideoIcon fontSize={"small"}/>
                    </IconButton>
                </Grid>
            }
        </Grid>
    )
}