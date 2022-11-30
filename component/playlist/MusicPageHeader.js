import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardImage from "./CardImage";

export default function MusicPageHeader ({image, title, description, type}) {

    return (
        <Grid container maxHeight={'30vh'} height={'100%'} flexWrap={"nowrap"} alignItems={"flex-end"} spacing={3} pl={3} pt={3}>
            <Grid item>
                <CardImage image={image} />
            </Grid>
            <Grid item alignItems={"baseline"}>
                <Typography variant={"body2"} noWrap textOverflow={'ellipsis'}>{type.toUpperCase()}</Typography>
                <Typography variant={"h1"} noWrap textOverflow={'ellipsis'} width={'100%'}>{title}</Typography>
                <Typography variant={"h6"} noWrap textOverflow={'ellipsis'} width={'90%'}>{description}</Typography>
            </Grid>
        </Grid>
    )
}
