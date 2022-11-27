import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function TrackCard ({track}) {

    return (
        <Grid item display={"flex"} gap={2} alignItems={"center"} flexWrap={"nowrap"} height={'100%'}>
            <Grid item sx={{boxShadow: '0px 6px 32px 6px rgba(0, 0, 0, 0.2)'}}>
                <Image src={track.image}  alt={'track image'} alt={'track image'} style={{width: '40px', height: '40px', borderRadius: '2px'}}/>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"}>
                <Typography variant={"h4"}>{track.title}</Typography>
                <Typography variant={"body1"}>{track.singer}</Typography>
            </Grid>
        </Grid>
    )
}
