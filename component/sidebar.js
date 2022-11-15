import {Grid} from "@mui/material";

export default function Sidebar({ children }) {
    return (
        <Grid bgcolor={"#000"} color={"#fff"} borderColor={'#fff'} border={'1px solid'} width={'300px'} height={'100vh'}>
            {children}
        </Grid>
    )
}