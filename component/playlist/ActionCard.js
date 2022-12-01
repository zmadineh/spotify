import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useState} from "react";
import PlayPauseAction from "../common/PlayPauseAction";
import {useDispatch} from "react-redux";
import {
    handlePlay,
    addRecent,
    handleLike,
    pausePlaylist,
    playPlaylist,
    pauseTrack, playTrack
} from "../../redux/slices/musics.slice";

export default function ActionCard ({music}) {

    const dispatch = useDispatch();

    const handlePlayMusic = () => {
        if (music.type === 'playlist'){
            if (music.playing)
                dispatch(pausePlaylist(music))
            else if (music.pause || !music.playing)
                dispatch(playPlaylist(music))
        }
        else if (music.type === 'track'){
            if (music.playing)
                dispatch(pauseTrack(music))
            else if (music.pause || !music.playing)
                dispatch(playTrack(music))
        }

        dispatch(addRecent(music))
    }

    const handleLikeClick = () => {
        dispatch(handleLike(music))
    }

    return (
        <Grid container gap={2} p={3}>
            <PlayPauseAction color={"success.main"} onClick={handlePlayMusic} size={'50px'}>
                { music.playing ? <PauseIcon color={"primary"}/> : <PlayArrowIcon  color={"primary"}/> }
            </PlayPauseAction>
            <IconButton sx={{color: "secondary.light"}} onClick={handleLikeClick}>
                {music.favorite ? <FavoriteIcon color={"success"}/> : <FavoriteBorderIcon color={'inherit'}/>}
            </IconButton>
            <IconButton sx={{color: "secondary.light"}}><MoreHorizIcon /></IconButton>
        </Grid>
    )
}
