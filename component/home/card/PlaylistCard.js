import Link from 'next/link';
import Image from "next/image";
import {getPlaylistById} from "../../../helper/getData";

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function PlaylistCard ({playlistId}) {

    const playlist = getPlaylistById(playlistId);

    return (
        <Card variant="outlined" sx={{width: '100%', maxWidth: '200px', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'background.secondary', padding: 2}}>
            <CardActionArea>
                <Image src={playlist.image} style={{width: '160px', height: '160px'}} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {playlist.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {playlist.information}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
