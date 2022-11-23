import Link from 'next/link';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {getCategoryById, getPlaylistsByCategory} from "../../../helper/getData";
import PlaylistCard from "./PlaylistCard";


export default function CardsList({categoryId}) {

    const category = getCategoryById(categoryId);
    const playlists  = getPlaylistsByCategory(categoryId);

    return (
        <Grid>
            {playlists.length > 0 &&
                <Grid container flexDirection={"column"} spacing={2}>
                    <Grid item container>
                        <Typography variant={'h3'} color={'text.primary'}>{category.title}</Typography>
                    </Grid>
                    <Grid item container flexDirection={"column"} alignContent={"flex-start"} overflow={"scroll"} height={'35vh'} gap={2}>
                        {
                            playlists.map(playlist => (
                                <PlaylistCard playlistId={playlist.id}/>
                            ))
                        }
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}
