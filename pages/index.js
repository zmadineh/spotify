import {Grid} from "@mui/material";
import {MainContentGrid} from "../component/home/MainContentGrid";
import {getCategories} from "../helper/getData";
import CardsList from "../component/home/card/CardsList";

export default function Home() {
    const categories = getCategories();

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} minHeight={'100vh'} p={2} gap={10}>
            {
                categories.map(category => (
                    <CardsList categoryId={category.id} />
                ))
            }
        </MainContentGrid>
    )
}
