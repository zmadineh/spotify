import Link from 'next/link';
import Grid from "@mui/material/Grid";
import MusicCard from "./MusicCard";
import CardListHeader from "./CardListHeader";



export default function Cards({title, showMore, data}) {

    return (
        <>
            <Grid container flexDirection={"column"} spacing={2}>
                <CardListHeader title={title} onClick={showMore} />
                <Grid item container flexDirection={"column"} alignContent={"flex-start"} overflow={"scroll"} height={'35vh'} gap={2} ml={2.5}>
                    {
                        data.map(item => (
                            <MusicCard key={item.id} music={item} type={item.type}/>
                        ))
                    }
                </Grid>
            </Grid>
        </>

    )
}
