import Grid from "@mui/material/Grid";
import TrackCard from "../TrackCard";
import AudioSlider from "../../footer/audio-section/AudioSlider";
import AudioControls from "../../footer/audio-section/AudioControls";
import VolumeSlider from "../../footer/volume-section/VolumeSlider";

export default function TrackModalContent (props) {

    const {audioPlayer, progressBar, ...audioProps} = props

    return (
        <Grid container gap={3} p={5}>
            <TrackCard track={props.currentTrack} size={'200px'} align={'flex-end'} fontSize1={'h3'} fontSize2={'h4'}/>
            <AudioSlider audioPlayer={audioPlayer} progressBar={progressBar} {...audioProps}/>

            <Grid container justifyContent={"space-between"}>
                <Grid item display={"flex"} alignItems={"center"} width={'50%'}>
                    <AudioControls {...audioProps}/>
                </Grid>
                <Grid item display={"flex"} alignItems={"center"}  width={'50%'}>
                    <VolumeSlider audioPlayer={audioPlayer} />
                </Grid>
            </Grid>
        </Grid>
    )
}