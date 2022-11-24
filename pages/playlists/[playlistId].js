import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

import {getPlaylistById} from "../../helper/getData";
import useImageColor from "../../helper/useImageColor";
import {PlaylistMainGrid} from "../../component/playlist/PlaylistMainGrid";
import PlaylistHeader from "../../component/playlist/PlaylistHeader";
import PlaylistActionCard from "../../component/playlist/PlaylistActionCard";

import Grid from "@mui/material/Grid";
import TrackTable from "../../component/playlist/TrackTable";
import {useDispatch, useSelector} from "react-redux";


export default function playlist () {

    const { query } = useRouter();
    const playlistId = Number(query.playlistId);

    if (!playlistId) return <div>nothing to show...</div>

    const playlistsData = useSelector((state) => state.playlists.data);
    const playlistsLoading = useSelector((state) => state.playlists.isReceived);
    const dispatch = useDispatch();

    const playlist = getPlaylistById(playlistsData, playlistId);
    const [dominantColor, setDominantColor] = useState('#000000')
    const { colors } = useImageColor(playlist.imagePath, { colors: 3, cors: true, format: 'hex' });

    useEffect(() => {
        if (colors) setDominantColor(colors[0])
    },[colors])

    return (
        <PlaylistMainGrid item container color={dominantColor} flexDirection={'column'} height={'100%'} gap={4} sx={{marginBottom: '75px'}}>
            <PlaylistHeader playlist={playlist} />
            <Grid container sx={{backgroundColor: 'secondary.lighter'}}>
                <PlaylistActionCard favorite={false} />
                <TrackTable playlistId={playlistId} />
            </Grid>
        </PlaylistMainGrid>
    )
}