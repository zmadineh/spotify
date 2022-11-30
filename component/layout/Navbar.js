import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Navbar({decreaseWidth, setSidebarOpen, sidebarOpen}) {

    const router = useRouter();
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(router.pathname.includes('music'))
    },[router])

    const sidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <Grid container justifyContent={"space-around"} alignItems={"center"}
              position={"fixed"} top={0}
              left={{mobile: 0, medium: decreaseWidth}}
              p={1}
              height={'70px'} width={{mobile: '100%', medium: `calc(100% - ${decreaseWidth}px)`}}
              zIndex={1150}
              sx={{backgroundColor: display ? 'background.navbarWithOpacity' : 'background.default'}}
        >
            {/*<Grid item mobile={1} gap={1}>*/}
            {/*    <IconButton sx={{backgroundColor: 'primary.main', color: 'primary.lighter'}} onClick={sidebarToggle}> <ArrowBackIosIcon /> </IconButton>*/}
            {/*</Grid>*/}

            <Grid item mobile={4} display={"flex"} gap={1}>
                <Link href={'/'}>
                    <IconButton sx={{backgroundColor: 'primary.light', color: 'primary.lighter'}}> <ArrowBackIosIcon /> </IconButton>
                </Link>
                <Link href={'/'} aria-disabled={true}>
                    <IconButton sx={{backgroundColor: 'primary.light', color: 'primary.lighter'}}> <ArrowForwardIosIcon /> </IconButton>
                </Link>
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