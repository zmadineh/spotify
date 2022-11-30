import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from "@mui/material/Grid";
import {MusicMainGrid} from "../../playlist/MusicMainGrid";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TrackModal({children, open, dominantColor, toggleOpenModal, onCloseModal}) {

    return (
            <Dialog
                fullScreen
                open={open}
                onClose={onCloseModal}
                TransitionComponent={Transition}
            >
                <MusicMainGrid container flexDirection={'column'} justifyContent={'space-between'} color={dominantColor} height={'100%'}>
                    <Grid item xs={1}>
                        <AppBar sx={{ position: 'relative', backgroundColor: 'background.modalNav'}}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="primary.main"
                                    onClick={toggleOpenModal}
                                    aria-label="close"
                                    sx={{backgroundColor: 'secondary.light'}}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Grid>

                    <Grid item xs={11} >
                        {children}
                    </Grid>
                </MusicMainGrid>
            </Dialog>
    );
}