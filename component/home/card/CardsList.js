import Link from 'next/link';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {getCategoryById, getPlaylistById, getPlaylistsByCategory} from "../../../helper/getData";
import PlaylistCard from "./PlaylistCard";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";


export default function CardsList({categoryId}) {

    const category = getCategoryById(categoryId);

    const playlistsData = useSelector((state) => state.playlists.data);
    const playlistsLoading = useSelector((state) => state.playlists.isReceived);
    const dispatch = useDispatch();

    const playlists = getPlaylistsByCategory(playlistsData, categoryId);

    return (
        <Grid>
            {playlists.length > 0 &&
                <Grid container flexDirection={"column"} spacing={2}>
                    <Grid item container justifyContent={"space-between"}>
                        <Button variant={"text"}><Typography variant={'h3'} color={'text.primary'}>{category.title}</Typography></Button>
                        <Button variant={"text"}><Typography variant={'body2'} color={'text.secondary'}>see all</Typography></Button>
                    </Grid>
                    <Grid item container flexDirection={"column"} alignContent={"flex-start"} overflow={"scroll"} height={'35vh'} gap={2} ml={2.5}>
                        {
                            playlists.map(playlist => (
                                <PlaylistCard key={playlist.id} playlistId={playlist.id}/>
                            ))
                        }
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}
