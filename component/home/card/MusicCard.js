import Image from "next/image";
import {useRouter} from "next/router";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Link from "next/Link";

export default function MusicCard ({music, type}) {

    const router = useRouter();
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('tablet'))
    const containerWidth = (mobileMatch ? '120px' : '180px');
    const imageSize = (mobileMatch ? '100px' : '160px');

    return (
        <Card
            variant="outlined"
            sx={{maxWidth: containerWidth, borderRadius: '8px', cursor: 'pointer', backgroundColor: 'background.secondary'}}
            // onClick={() => router.push(`musics/${type}/${music.id}`)}
        >
            <CardActionArea>

                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height={containerWidth} p={1}>
                    <Link href={`musics/${type}/${music.id}`}>
                        <Image src={music.image} alt={'music image'} style={{width: imageSize, height: imageSize, borderRadius: (type === 'playlist' ? '6px' : '50%')}} />
                    </Link>
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  noWrap textOverflow={'ellipsis'}>
                        {music.title}
                    </Typography>
                    {!mobileMatch &&
                        <Typography variant="body2" color="text.secondary" noWrap textOverflow={'ellipsis'}>
                            {type === 'track' ? music.singer : music.information}
                        </Typography>
                    }
                </CardContent>

            </CardActionArea>
        </Card>
    )
}
