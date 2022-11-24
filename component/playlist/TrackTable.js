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

import TableHeaderCell from "../track/TableHeaderCell";
import FlexCell from "../track/FlexCell";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrackCard from "../track/TrackCard";


export default function TrackTable ({playlistId}) {

    const trackData = useSelector((state) => state.tracks.data);
    const trackLoading = useSelector((state) => state.tracks.isReceived);
    const dispatch = useDispatch();

    // console.log(trackData)
    const tracks = getTracksByPlaylist(trackData, playlistId);

    const [displayFavIcon, setDisplayFavIcon] = useState(false);

    const handleMusicClicked = id => {
        // trackData.map(track => {
        //     if (track.id === id)
        //         track.favorite = true
        // });
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
                            <TableCell component="th" scope="row" align="center">{track.id}</TableCell>
                            <TableCell component="th" scope="row"
                                       onClick={() => handleMusicClicked(track.id)}
                            >
                                <TrackCard track={track} />
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">{track.album}</TableCell>
                            <TableCell component="th" scope="row" align="left">{track.date}</TableCell>

                            <TableCell component="th" scope="row" align="right">
                                {displayFavIcon &&
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
