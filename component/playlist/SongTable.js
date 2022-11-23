import {getSongByPlaylist} from "../../helper/getData";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function SongTable ({playlistId}) {

    const songs = getSongByPlaylist(playlistId);

    return (
        <TableContainer  sx={{backgroundColor: 'rgba(۰,۰,۰,0.01)'}}>
            <Table width={'100%'}>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>album</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs.map((song) => (
                        <TableRow
                            key={song.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{song.id}</TableCell>
                            <TableCell component="th" scope="row">{song.title}</TableCell>
                            <TableCell component="th" scope="row" align="left">{song.album}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
