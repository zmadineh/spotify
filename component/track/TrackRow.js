import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardImage from "../playlist/CardImage";
import {getSongByPlaylist} from "../../helper/getData";
import TableCell from "@mui/material/TableCell";
import TableRowCell from "./TableRowCell";
import TrackCard from "./TrackCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TableRow from "@mui/material/TableRow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useState} from "react";

export default function TrackRow ({track, index, handleLikeClicked, handleMusicClicked}) {

    const [displayIcon, setDisplayIcon] = useState(false);


    const handlePausePlayIcon = (track, index) => {
        if(track.playing || track.pause)
            return <PlayArrowIcon />
        else return index+1
    }

    return (
        <TableRow
            sx={{cursor: "pointer", border: '1px solid', "&:hover" : {backgroundColor: 'background.tableRowHover'},}}
            onMouseEnter={() => setDisplayIcon(true)}
            onMouseLeave={() => setDisplayIcon(false)}
        >
            <TableCell component="th" scope="row" align="center"><TableRowCell>{handlePausePlayIcon(track, index)}</TableRowCell></TableCell>
            <TableCell component="th" scope="row"
                       onClick={() => handleMusicClicked(track)}
            >
                <TrackCard track={track} />
            </TableCell>
            <TableCell component="th" scope="row" align="left"><TableRowCell>{track.album}</TableRowCell></TableCell>
            <TableCell component="th" scope="row" align="left"><TableRowCell>{track.date}</TableRowCell></TableCell>

            <TableCell component="th" scope="row" align="right"
                       className={'hoverToggle'}
                       onClick={() => handleLikeClicked(track)}>
                <TableRowCell>
                    {(displayIcon || track.favorite) &&
                        (track.favorite ? <FavoriteIcon color={"success"}/> : <FavoriteBorderIcon color={'inherit'}/>)
                    }</TableRowCell>
            </TableCell>
            <TableCell component="th" scope="row" align="center"><TableRowCell>{track.time}</TableRowCell></TableCell>
            <TableCell component="th" scope="row" align="left"><TableRowCell>{displayIcon && <MoreHorizIcon />}</TableRowCell></TableCell>

        </TableRow>
    )
}
