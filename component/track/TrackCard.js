import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function TrackCard ({track, size='40px', align='center', fontSize1='h4', fontSize2='body1'}) {

    return (
        <Grid container item gap={2} alignItems={align} flexWrap={"nowrap"} height={'100%'}>
            <Grid item sx={{boxShadow: '0px 6px 32px 6px rgba(0, 0, 0, 0.3)'}}>
                <Image src={track.image} alt={'track image'} style={{width: size, height: size, borderRadius: '2px'}}/>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"}>
                <Typography variant={fontSize1} noWrap textOverflow={"ellipsis"}>{track.title}</Typography>
                <Typography variant={fontSize2} noWrap textOverflow={"ellipsis"}>{track.singer}</Typography>
            </Grid>
        </Grid>
    )
}
