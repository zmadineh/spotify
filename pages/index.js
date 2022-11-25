import {MainContentGrid} from "../component/home/MainContentGrid";
import {getCategories} from "../helper/getData";
import CardsList from "../component/home/card/CardsList";

export default function Home() {
    const categories = getCategories();

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} p={2} gap={2} sx={{marginTop: '70px', marginBottom: '80px'}}>
            {
                categories.map(category => (
                    <CardsList key={category.id} categoryId={category.id} />
                ))
            }
        </MainContentGrid>
    )
}
