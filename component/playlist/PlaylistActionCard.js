import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from "@mui/material/Box";
import {useState} from "react";

export default function PlaylistActionCard ({favorite}) {
    const [play, setPlay] = useState(false)

    const handlePlayMusic = () => {
        setPlay(!play);
    }

    return (
        <Grid container height={'100px'} gap={2} p={3}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
                 sx={{borderRadius: '50%', backgroundColor: "success.main", width: '40px', height: '40px'}}
                 onClick={handlePlayMusic}
            >
                { play ? <PauseIcon color={"secondary"}/> : <PlayArrowIcon  color={"secondary"}/> }
            </Box>
            <IconButton sx={{color: "secondary.light"}}>{favorite ? <FavoriteIcon  color={"error"}/> : <FavoriteBorderIcon color={'inherit'}/>}</IconButton>
            <IconButton sx={{color: "secondary.light"}}><MoreHorizIcon /></IconButton>
        </Grid>
    )
}
