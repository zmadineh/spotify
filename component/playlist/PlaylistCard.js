import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardImage from "./CardImage";

export default function PlaylistCard ({playlist}) {

    return (
        <Grid container height={'35vh'} alignItems={"flex-end"} spacing={3} pl={3}>
            <Grid item>
                <CardImage image={playlist.image} />
            </Grid>
            <Grid item alignItems={"baseline"}>
                <Typography variant={"body2"}>PLAYLIST</Typography>
                <Typography variant={"h1"}>{playlist.title}</Typography>
                <Typography variant={"h6"}>{playlist.information}</Typography>
            </Grid>
        </Grid>
    )
}
