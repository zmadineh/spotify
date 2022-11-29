import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

import useImageColor from "../../../helper/useImageColor";
import {MusicMainGrid} from "../../../component/playlist/MusicMainGrid";
import MusicPageHeader from "../../../component/playlist/MusicPageHeader";
import ActionCard from "../../../component/playlist/ActionCard";
import TrackTable from "../../../component/track/TrackTable";

import Grid from "@mui/material/Grid";

export default function music () {

    const { query } = useRouter();
    const type = query.type;
    const musicId = Number(query.id);

    if (!musicId || !type) return <div>nothing to show...</div>

    const data = useSelector((state) => state.musics.data[type]);
    const item = data.find(d => d.id === musicId);

    if(!item) return <div>nothing to show...</div>;

    const [dominantColor, setDominantColor] = useState('#000000')
    const { colors } = useImageColor(item.imagePath, { colors: 3, cors: true, format: 'hex' });

    useEffect(() => {
        if (colors) setDominantColor(colors[0])
    },[colors])

    return (
        <MusicMainGrid item container color={dominantColor} flexDirection={'column'} height={'100%'} gap={4} sx={{marginBottom: '80px'}} pt={'70px'}>
            <MusicPageHeader image={item.image} title={item.title} description={type === 'track' ? item.singer : item.information}/>
            <Grid container sx={{backgroundColor: 'secondary.lighter'}}>
                <ActionCard music={item} />
                <TrackTable music={item} type={type} />
            </Grid>
        </MusicMainGrid>
    )
}


// // Generates `/playlist/1` and `/playlist/2`
// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { type: 'playlist', id: '1' } }, { params: { type: 'playlist',  id: '2' } }],
//         fallback: false, // can also be true or 'blocking'
//     }
// }
//
// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//     return {
//         // Passed to the page component as props
//         props: { post: {} },
//     }
// }
