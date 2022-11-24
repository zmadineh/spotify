import {getTracksByPlaylist} from "../../helper/getData";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import TableHeaderCell from "../track/TableHeaderCell";
import FlexCell from "../track/FlexCell";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrackCard from "../track/TrackCard";
import {handleLike, handlePlay} from "../../redux/slices/tracks.slice";


export default function TrackTable ({playlistId}) {

    const trackData = useSelector((state) => state.tracks.data);
    const dispatch = useDispatch();

    const tracks = getTracksByPlaylist(trackData, playlistId);

    const [displayFavIcon, setDisplayFavIcon] = useState(false);

    const handleMusicClicked = track => {
        dispatch(handlePlay(track))
    }

    const handleLikeClicked = track => {
        dispatch(handleLike(track))
    }

    const handlePausePlayIcon = (track) => {
        if(track.playing)
            return <PlayArrowIcon />
        else if (track.pause)
            return <PauseIcon />
        else return track.id
    }

    return (
        <TableContainer>
            <Table width={'100%'} sx={{backgroundColor: '#00000003'}}>
                <colgroup>
                    <col style={{width:'4%'}}/>
                    <col style={{width:'36%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'26%'}}/>
                    <col style={{width:'3%'}}/>
                    <col style={{width:'3%'}}/>
                    <col style={{width:'3%'}}/>
                </colgroup>
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><TableHeaderCell>#</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>TITLE</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>ALBUM</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>DATE ADDED</TableHeaderCell></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"><TableHeaderCell><AccessTimeIcon /></TableHeaderCell></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tracks.map((track) => (
                        <TableRow
                            key={track.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, "&:hover" : {backgroundColor: '#59595933'}, cursor: "pointer" }}
                            onMouseEnter={() => setDisplayFavIcon(true)}
                            onMouseLeave={() => setDisplayFavIcon(false)}
                        >
                            <TableCell component="th" scope="row" align="center">{handlePausePlayIcon(track)}</TableCell>
                            <TableCell component="th" scope="row"
                                       onClick={() => handleMusicClicked(track)}
                            >
                                <TrackCard track={track} />
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">{track.album}</TableCell>
                            <TableCell component="th" scope="row" align="left">{track.date}</TableCell>

                            <TableCell component="th" scope="row" align="right"
                                       onClick={() => handleLikeClicked(track)}>
                                {(displayFavIcon || track.favorite) &&
                                    (track.favorite ? <FavoriteIcon color={"error"}/> : <FavoriteBorderIcon color={'inherit'}/>)
                                }
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">{track.time}</TableCell>
                            <TableCell component="th" scope="row" align="left"><MoreHorizIcon /></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
