import {getTracksByPlaylist} from "../../helper/getData";
import {useDispatch, useSelector} from "react-redux";
import {
    addRecent,
    handleLike,
    handlePlay,
    pausePlaylist,
    pauseTrack,
    playPlaylist, playTrack
} from "../../redux/slices/musics.slice";
import TableHeaderCell from "./TableHeaderCell";
import TrackRow from "./TrackRow";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled, useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.text.primary,
    },
    padding: "6px 4px",
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
}));

export default function TrackTable ({music, type}) {

    const data = useSelector((state) => state.musics.data);
    const dispatch = useDispatch();
    const theme = useTheme();
    const mediumMatch = useMediaQuery(theme.breakpoints.down('medium'))
    const tabletMatch = useMediaQuery(theme.breakpoints.down('tablet'))

    const tracks = (type === 'track' ? [music] : getTracksByPlaylist(data['track'], music.id));

    const handleMusicClicked = track => {
        if (track.playing)
            dispatch(pauseTrack(track))
        else if (track.pause || !track.playing)
            dispatch(playTrack(track))

        // dispatch(handlePlay(track))
        dispatch(addRecent(track))
    }

    const handleLikeClicked = track => {
        dispatch(handleLike(track))
    };

    return (
        <TableContainer>
            <Table sx={{padding: ' 0 20px', borderCollapse: 'separate', border: 0}} >
                <colgroup>
                    <col style={{width: '4%'}}/>
                    <col style={{width: {tablet: '89%', medium: '54%', laptop: '40%' }}}/>
                    <col style={{width: {tablet: '0%', medium: '35%', laptop: '27%'  }}}/>
                    <col style={{width: {medium: '0%', laptop: '22%'  }}}/>
                    <col style={{width: '2%'}}/>
                    <col style={{width: '3%'}}/>
                    <col style={{width: '2%'}}/>
                </colgroup>
                <TableHead>
                    <TableRow>
                        <HeaderTableCell align="center"><TableHeaderCell>#</TableHeaderCell></HeaderTableCell>
                        <HeaderTableCell><TableHeaderCell>TITLE</TableHeaderCell></HeaderTableCell>
                        {!tabletMatch && <HeaderTableCell><TableHeaderCell>ALBUM</TableHeaderCell></HeaderTableCell>}
                        {!mediumMatch && <HeaderTableCell><TableHeaderCell>DATE ADDED</TableHeaderCell></HeaderTableCell>}
                        <HeaderTableCell align="center"></HeaderTableCell>
                        <HeaderTableCell align="center"><TableHeaderCell><AccessTimeIcon /></TableHeaderCell></HeaderTableCell>
                        <HeaderTableCell align="center"></HeaderTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {tracks.map((track, index) => (
                        <TrackRow
                            key={track.id}
                            track={track}
                            index={index}
                            handleLikeClicked={handleLikeClicked}
                            handleMusicClicked={handleMusicClicked}
                            mediumMatch={mediumMatch}
                            tabletMatch={tabletMatch}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
