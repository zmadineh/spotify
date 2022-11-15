import {Grid, Typography} from "@mui/material";

export default function Navbar({ children }) {
    return (
        <Grid container alignItems={"center"} bgcolor={"#000"} color={"#fff"} borderColor={'#fff'} border={'1px solid'}  width={'100%'} height={'50px'}>
            <Typography px={'20px'}>
                Navbar
            </Typography>
        </Grid>
    )
}