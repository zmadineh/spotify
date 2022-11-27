import {useState} from "react";

import TableRowCell from "./TableRowCell";
import TrackCard from "./TrackCard";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TableRow from "@mui/material/TableRow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";


const BodyTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.stickyHeader}`]: {
        color: theme.palette.text.primary,
    },
    padding: "8px 4px 0px 4px",
    borderBottom: 0
}));

export default function TrackRow ({track, index, handleLikeClicked, handleMusicClicked, mediumMatch, tabletMatch}) {

    const [displayIcon, setDisplayIcon] = useState(false);


    const handlePausePlayIcon = (track, index) => {
        if(track.playing || track.pause)
            return <PlayArrowIcon />
        else return index+1
    }

    return (
        <TableRow
            sx={{cursor: "pointer", "&:hover" : {backgroundColor: 'background.tableRowHover'},}}
            onMouseEnter={() => setDisplayIcon(true)}
            onMouseLeave={() => setDisplayIcon(false)}
        >
            <BodyTableCell component="th" scope="row" align="center"><TableRowCell>{handlePausePlayIcon(track, index)}</TableRowCell></BodyTableCell>
            <BodyTableCell component="th" scope="row"
                       onClick={() => handleMusicClicked(track)}
            >
                <TrackCard track={track} />
            </BodyTableCell>
            {!tabletMatch && <BodyTableCell component="th" scope="row" align="left"><TableRowCell>{track.album}</TableRowCell></BodyTableCell>}
            {!mediumMatch && <BodyTableCell component="th" scope="row" align="left"><TableRowCell>{track.date}</TableRowCell></BodyTableCell>}

            <BodyTableCell component="th" scope="row" align="right"
                       className={'hoverToggle'}
                       onClick={() => handleLikeClicked(track)}>
                <TableRowCell>
                    {(displayIcon || track.favorite) &&
                        (track.favorite ? <FavoriteIcon color={"success"}/> : <FavoriteBorderIcon color={'inherit'}/>)
                    }</TableRowCell>
            </BodyTableCell>
            <BodyTableCell component="th" scope="row" align="center"><TableRowCell>{track.time}</TableRowCell></BodyTableCell>
            <BodyTableCell component="th" scope="row" align="left"><TableRowCell>{displayIcon && <MoreHorizIcon />}</TableRowCell></BodyTableCell>

        </TableRow>
    )
}
