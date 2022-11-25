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
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrackCard from "../track/TrackCard";
import {handleLike, handlePlay} from "../../redux/slices/musics.slice";
import TableRowCell from "../track/TableRowCell";


export default function TrackTable ({music, type}) {

    const data = useSelector((state) => state.musics.data);
    const dispatch = useDispatch();

    const tracks = (type === 'track' ? [music] : getTracksByPlaylist(data['track'], music.id));
    console.log(tracks)
    const [displayIcon, setDisplayIcon] = useState(false);

    const handleMusicClicked = track => {
        dispatch(handlePlay(track))
    }

    const handleLikeClicked = track => {
        dispatch(handleLike(track))
    }

    const handlePausePlayIcon = (track, index) => {
        if(track.playing || track.pause)
            return <PlayArrowIcon />
        else return index+1
    }

    return (
        <TableContainer>
            <Table sx={{backgroundColor: '#00000003', padding: '20px', borderCollapse: 'separate'}}>
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
                    <TableRow sx={{ borderColor: 'divider' }}>
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
                    {tracks.map((track, index) => (
                        <TableRow
                            key={track.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, "&:hover" : {backgroundColor: '#59595933'}, cursor: "pointer" }}
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
                                       onClick={() => handleLikeClicked(track)}>
                                <TableRowCell>
                                {(displayIcon || track.favorite) &&
                                    (track.favorite ? <FavoriteIcon color={"success"}/> : <FavoriteBorderIcon color={'inherit'}/>)
                                }</TableRowCell>
                            </TableCell>
                            <TableCell component="th" scope="row" align="center"><TableRowCell>{track.time}</TableRowCell></TableCell>
                            <TableCell component="th" scope="row" align="left"><TableRowCell>{displayIcon && <MoreHorizIcon />}</TableRowCell></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
