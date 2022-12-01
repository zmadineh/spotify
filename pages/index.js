import {getCategories} from "../helper/getData";
import HomeContent from "../component/home/HomeContent";
import {useSelector} from "react-redux";
import {MainContentGrid} from "../component/home/MainContentGrid";
import Grid from "@mui/material/Grid";
import Cards from "../component/home/card/Cards";
import CardsList from "../component/home/card/CardsList";

export default function Home({categories}) {

    const recentData = useSelector((state) => state.musics.data.recentlyPlayed);

    const showMore = () => {
        console.log('show more')
    }

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} p={2} gap={2}
                         sx={{marginTop: '70px', marginBottom: '93px', width: '100%'}}
        >
            {recentData.length > 0 &&
                <Grid>
                    <Cards title={'Recently played'} showMore={showMore} data={recentData}/>
                </Grid>
            }

            <Grid>
                {
                    categories.map(category => (
                        <CardsList key={category.id} categoryId={category.id}/>
                    ))
                }
            </Grid>
        </MainContentGrid>
    )
}

export async function getStaticProps() {

    return {
        props: {
            categories: getCategories(),
        }
    };
}