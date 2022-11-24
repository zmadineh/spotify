import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function SongCard ({song}) {

    return (
        <Grid container spacing={2}>
            <Grid item sx={{boxShadow: '0px 6px 32px 6px rgba(0, 0, 0, 0.2)'}}>
                <Image src={song.image} alt={'song image'} style={{width: '40px', height: '40px'}}/>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"}>
                <Typography variant={"h4"}>{song.title}</Typography>
                <Typography variant={"body1"}>{song.singer}</Typography>
            </Grid>
        </Grid>
    )
}
