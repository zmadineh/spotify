import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from "@mui/material/Box";

export default function PlaylistActionCard ({favorite}) {

    return (
        <Grid container height={'100px'} gap={2} p={3}>
            <IconButton sx={{borderRadius: '50%', backgroundColor: "success.main", width: '40px', height: '40px'}}><PlayArrowIcon color={"secondary"}/></IconButton>
            <IconButton sx={{color: "secondary.light"}}>{favorite ? <FavoriteIcon  color={"error"}/> : <FavoriteBorderIcon color={'inherit'}/>}</IconButton>
            <IconButton sx={{color: "secondary.light"}}><MoreHorizIcon /></IconButton>
        </Grid>
    )
}
