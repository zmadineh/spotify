import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

import {getPlaylistById} from "../../helper/getData";
import useImageColor from "../../helper/useImageColor";
import {PlaylistMainGrid} from "../../component/playlist/PlaylistMainGrid";
import PlaylistCard from "../../component/playlist/PlaylistCard";
import PlaylistActionCard from "../../component/playlist/PlaylistActionCard";

import Grid from "@mui/material/Grid";
import SongTable from "../../component/playlist/SongTable";


export default function playlist () {

    const { query } = useRouter();
    const playlistId = Number(query.playlistId);

    if (!playlistId) return <div>nothing to show...</div>

    const playlist = getPlaylistById(playlistId);
    const [dominantColor, setDominantColor] = useState('#000000')
    const { colors } = useImageColor(playlist.imagePath, { colors: 3, cors: true, format: 'hex' });

    useEffect(() => {
        if (colors) setDominantColor(colors[0])
    },[colors])

    return (
        <PlaylistMainGrid item container color={dominantColor} flexDirection={'column'} height={'100%'} gap={4} sx={{marginBottom: '75px'}}>
            <PlaylistCard playlist={playlist} />
            <Grid container sx={{backgroundColor: 'secondary.lighter'}}>
                <PlaylistActionCard favorite={false} />
                <SongTable playlistId={playlistId} />
            </Grid>
        </PlaylistMainGrid>
    )
}