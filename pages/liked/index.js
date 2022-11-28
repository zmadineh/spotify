import {useSelector} from "react-redux";
import Image from "next/image";

import {MainContentGrid} from "../../component/home/MainContentGrid";
import Cards from "../../component/home/card/Cards";
import nothingToShow from "../../public/image/nothing-to-show.png";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Liked() {

    const playlistsData = useSelector((state) => state.musics.data['playlist']);
    const likedPlaylists = playlistsData.filter(playlist => playlist.favorite === true);
    const tracksData = useSelector((state) => state.musics.data['track']);
    const likedTracks = tracksData.filter(track => track.favorite === true);


    const showMore = () => {
        console.log('show more');
    }

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} p={2} gap={2}
                         sx={{marginTop: '70px', marginBottom: '80px', width: '100%'}}
        >
            {likedPlaylists.length > 0 &&
                <Cards title={'Liked Playlists'} data={likedPlaylists} showMore={showMore} />
            }

            {likedTracks.length > 0 &&
                <Cards title={'Liked Tracks'} data={likedTracks} showMore={showMore} />
            }

            {(!likedPlaylists.length && !likedTracks.length) &&
                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} width={'100%'} height={'100%'}>
                    {/*<Image src={nothingToShow} alt={'nothing to show'} />*/}
                    <Typography variant={'h2'}>Nothing to Show</Typography>
                </Grid>
            }

        </MainContentGrid>
    )
}
