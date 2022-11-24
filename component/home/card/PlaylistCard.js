import Image from "next/image";
import {getPlaylistById} from "../../../helper/getData";

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

export default function PlaylistCard ({playlistId}) {

    const router = useRouter();
    const playlistsData = useSelector((state) => state.playlists.data);
    const playlistsLoading = useSelector((state) => state.playlists.isReceived);
    const dispatch = useDispatch();

    const playlist = getPlaylistById(playlistsData, playlistId);

    return (
        <Card
            variant="outlined"
            sx={{maxWidth: '180px', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'background.secondary'}}
            onClick={() => router.push(`playlists/${playlistId}`)}
        >
            <CardActionArea>
                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height={'180px'}>
                    <Image src={playlist.image} style={{width: '160px', height: '160px', borderRadius: '6px'}} />
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {playlist.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap textOverflow={'ellipsis'}>
                        {playlist.information}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
