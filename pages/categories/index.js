import {MainContentGrid} from "../component/home/MainContentGrid";
import {getCategories} from "../helper/getData";
import CardsList from "../component/home/card/CardsList";

export default function Categories() {

    return (
        <MainContentGrid item container flexDirection={'column'} color={'text.primary'} minHeight={'100vh'} p={2} gap={10}>
            Categories page
        </MainContentGrid>
    )
}
