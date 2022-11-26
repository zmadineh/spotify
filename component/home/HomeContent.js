import {MainContentGrid} from "./MainContentGrid";
import {getCategories} from "../../helper/getData";
import CardsList from "./card/CardsList";
import Cards from "./card/Cards";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";

export default function HomeContent() {

    const categories = getCategories();
    const recentData = useSelector((state) => state.musics.data.recentlyPlayed);

    const showMore = () => {
        console.log('show more')
    }

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} p={2} gap={2} sx={{marginTop: '70px', marginBottom: '80px'}}>
            <Grid>
                <Cards title={'Recently played'} showMore={showMore} data={recentData} />
            </Grid>

            <Grid>
                {
                    categories.map(category => (
                        <CardsList key={category.id} categoryId={category.id} />
                    ))
                }
            </Grid>
        </MainContentGrid>
    )
}
