import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";

export default function Navbar({decreaseWidth}) {

    const router = useRouter();
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(router.pathname.includes('music'))
    },[router])

    return (
        <Grid container justifyContent={"space-around"} alignItems={"center"}
              position={"fixed"} top={0} left={250} p={1}
              height={'70px'} width={ `calc(100% - ${decreaseWidth}px)`}
              zIndex={2000}
              sx={{backgroundColor: display ? 'background.navbarWithOpacity' : 'background.default'}}
        >
            <Grid item mobile={4} gap={1}>
                <IconButton sx={{backgroundColor: 'primary.main', color: 'primary.lighter'}}> <ArrowBackIosIcon /> </IconButton>
                <IconButton sx={{backgroundColor: 'primary.main', color: 'primary.lighter'}}> <ArrowForwardIosIcon /> </IconButton>
            </Grid>

            <Grid item mobile={8} gap={1} display={"flex"} justifyContent={"flex-end"} color={"secondary"}>
                <Button variant={"text"} color={"secondary"}>
                    <Typography noWrap>Sign up</Typography>
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                    <Typography noWrap>Log in</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}