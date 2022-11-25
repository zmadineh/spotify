import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardImage from "./CardImage";

export default function MusicPageHeader ({image, title, description}) {

    return (
        <Grid container height={'35vh'} alignItems={"flex-end"} spacing={3} pl={3}>
            <Grid item>
                <CardImage image={image} />
            </Grid>
            <Grid item alignItems={"baseline"}>
                <Typography variant={"body2"}>PLAYLIST</Typography>
                <Typography variant={"h1"}>{title}</Typography>
                <Typography variant={"h6"}>{description}</Typography>
            </Grid>
        </Grid>
    )
}
