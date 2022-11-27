import Link from 'next/link';
import Grid from "@mui/material/Grid";
import {getCategoryById, getPlaylistsByCategory} from "../../../helper/getData";
import {useSelector} from "react-redux";
import Cards from "./Cards";


export default function CardsList({categoryId}) {

    const category = getCategoryById(categoryId);

    const playlistsData = useSelector((state) => state.musics.data['playlist']);
    const playlists = getPlaylistsByCategory(playlistsData, categoryId);

    const showMore = () => {
        console.log('show more')
    }

    return (
        <Grid mt={4}>
            {playlists.length > 0 &&
                <Cards title={category.title} data={playlists} showMore={showMore} />
            }
        </Grid>
    )
}
