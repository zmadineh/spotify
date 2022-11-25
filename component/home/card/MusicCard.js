import Image from "next/image";

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {useRouter} from "next/router";

export default function MusicCard ({music, type}) {

    const router = useRouter();

    return (
        <Card
            variant="outlined"
            sx={{maxWidth: '180px', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'background.secondary'}}
            onClick={() => router.push(`musics/${type}/${music.id}`)}
        >
            <CardActionArea>
                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height={'180px'}>
                    <Image src={music.image} style={{width: '160px', height: '160px', borderRadius: '6px'}} />
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {music.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap textOverflow={'ellipsis'}>
                        {type === 'track' ? music.singer : music.information}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
