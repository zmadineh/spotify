import {useRouter} from "next/router";
import TrackCard from "../track/TrackCard";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import IconButton from "@mui/material/IconButton";
import {useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import TrackModal from "../track/modal/TrackModal";
import {useEffect, useState} from "react";
import useImageColor from "../../helper/useImageColor";
import Box from "@mui/material/Box";

export default function FooterTrackCard({currentTrack, handleLikeClick, maxWidth, toggleOpenModal}) {

    const router = useRouter();
    const theme = useTheme();
    const mediumMatch = useMediaQuery(theme.breakpoints.up('medium'))

    return (
        <Grid container item alignItems={"center"} justifyContent={"space-between"} maxWidth={maxWidth}>
            <Grid item width={'60%'} sx={{cursor: 'pointer'}} onClick={toggleOpenModal}> <TrackCard track={currentTrack}/> </Grid>
            { mediumMatch &&
                <Grid item width={'40%'} display={"flex"}>
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