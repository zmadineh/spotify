import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CardListHeader({title, onClick}) {

    return (
        <Grid item container justifyContent={"space-between"}>
            <Button variant={"text"} onClick={onClick}><Typography variant={'h3'} color={'text.primary'}>{title}</Typography></Button>
            <Button variant={"text"}><Typography variant={'body2'} color={'text.secondary'}>see all</Typography></Button>
        </Grid>
    )
}
