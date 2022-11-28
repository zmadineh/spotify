import React, {useEffect, useRef, useState} from "react";
import Grid from "@mui/material/Grid";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import {Slider} from "@mui/material";

export default function VolumeSlider ({ audioPlayer }) {

    const maxVolume = 100;

    // states
    const [currentVolume, setCurrentVolume] = useState(20);

    const onChange = (e) => {
        audioPlayer.current.volume = e.target.value / 100
        setCurrentVolume(e.target.value)
    }

    const volumeIconChanger = () => {
        if (currentVolume > 60)
            return <VolumeUpIcon />
        else if (currentVolume > 10)
            return <VolumeDownIcon />
        else if (currentVolume > 0)
            return <VolumeMuteIcon />
        else if (currentVolume === 0)
            return <VolumeOffIcon />
    }

    return (
            <Grid container justifyContent={"center"} alignItems={"center"} spacing={1} width={'90%'}>
                <Grid item>{volumeIconChanger()}</Grid>
                <Grid item display={"flex"} alignItems={"center"} mobile={8}>
                    <Slider
                        aria-label="Volume"
                        onChange={onChange}
                        defaultValue={0}
                        value={currentVolume}
                        max={maxVolume}
                        color={"progress"}
                        size={"small"}
                    />
                </Grid>
            </Grid>
    )
}