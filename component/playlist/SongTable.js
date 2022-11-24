import {getSongByPlaylist} from "../../helper/getData";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongCard from "../song/SongCard";
import TableHeaderCell from "../song/TableHeaderCell";
import FlexCell from "../song/FlexCell";
import {useState} from "react";
import {songData} from "../../data/songs/song.data";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function SongTable ({playlistId}) {

    const songs = getSongByPlaylist(playlistId);

    const [displayFavIcon, setDisplayFavIcon] = useState(false);

    const handleMusicClicked = id => {
        songData.map(song => {
            if (song.id === id)
                song.favorite = true
        });
    }

    return (
        <TableContainer>
            <Table width={'100%'} sx={{backgroundColor: '#00000003'}}>
                <colgroup>
                    <col style={{width:'4%'}}/>
                    <col style={{width:'36%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'10%'}}/>
                </colgroup>
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><TableHeaderCell>#</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>TITLE</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>ALBUM</TableHeaderCell></TableCell>
                        <TableCell><TableHeaderCell>DATE ADDED</TableHeaderCell></TableCell>
                        <TableCell align="center"><TableHeaderCell><AccessTimeIcon /></TableHeaderCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs.map((song) => (
                        <TableRow
                            key={song.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, "&:hover" : {backgroundColor: '#59595933'}, cursor: "pointer" }}
                            onMouseEnter={() => setDisplayFavIcon(true)}
                            onMouseLeave={() => setDisplayFavIcon(false)}
                        >
                            <TableCell component="th" scope="row" align="center">{song.id}</TableCell>
                            <TableCell component="th" scope="row"
                                       onClick={() => handleMusicClicked(song.id)}
                            >
                                <SongCard song={song} />
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">{song.album}</TableCell>
                            <TableCell component="th" scope="row" align="left">{song.date}</TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <FlexCell>
                                    {displayFavIcon &&
                                        (song.favorite ? <FavoriteIcon color={"error"}/> : <FavoriteBorderIcon color={'inherit'}/>)
                                    }
                                    {song.time} <MoreHorizIcon />
                                </FlexCell>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
