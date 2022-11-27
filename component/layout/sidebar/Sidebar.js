import React, {useState} from 'react';
import Image from "next/image";

import CreateList from "../../common/CreateList";

import spotifyLogo from "../../../public/svg/spotify-logo.svg";
import {sidebarRoutes, sidebarOptions} from "../../../data/sidebar-list.data";

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";


export default function Sidebar({sidebarOpen, sidebarWidth}) {

    const [selectedItem, setSelectedItem] = useState('home');

    const handleListItemClick = (event, item) => {
        setSelectedItem(item);
    };

    return (
        <Grid
            bgcolor={'background.default'}
            color={"text.secondary"}
            width={sidebarWidth}
            minheight={'100vh'}
            height={'100%'}
            p={3}
            position={"fixed"}
            top={0}
            left={0}>
            <Image src={spotifyLogo} alt={'spotify-icon'} px={1}/>

            <Box sx={{ width: (sidebarOpen ? '100%' : 0)}} mt={2}>
                <CreateList list={sidebarRoutes} selectedItem={selectedItem} handleClick={handleListItemClick}/>

                <Box mt={2}>
                    <Typography variant={"body1"} letterSpacing={2}>Playlist</Typography>
                    <CreateList list={sidebarOptions} selectedItem={selectedItem} handleClick={handleListItemClick}/>
                </Box>
                <Divider sx={{backgroundColor: 'divider'}}/>
            </Box>
        </Grid>
    )
}

