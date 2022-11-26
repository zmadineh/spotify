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

import TableHeaderCell from "./TableHeaderCell";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrackCard from "./TrackCard";
import {addRecent, handleLike, handlePlay} from "../../redux/slices/musics.slice";
import TableRowCell from "./TableRowCell";
import TrackRow from "./TrackRow";


export default function TrackTable ({music, type}) {

    const data = useSelector((state) => state.musics.data);
    const dispatch = useDispatch();

    const tracks = (type === 'track' ? [music] : getTracksByPlaylist(data['track'], music.id));
    console.log(tracks)

    const handleMusicClicked = track => {
        dispatch(handlePlay(track))
        dispatch(addRecent(track))
    }

    const handleLikeClicked = track => {
        dispatch(handleLike(track))
    };

    return (
        <TableContainer>
            <Table sx={{backgroundColor: '#00000003', padding: ' 0 20px', borderCollapse: 'separate', border: 0}}>
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
                    <TableRow sx={{borderBottom: "2px solid black",}}>
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
                        <TrackRow
                            key={track.id}
                            track={track}
                            index={index}
                            handleLikeClicked={handleLikeClicked}
                            handleMusicClicked={handleMusicClicked}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
