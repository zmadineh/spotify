import Grid from "@mui/material/Grid";
import {useRouter} from "next/router";

export default function category () {

    const { query } = useRouter();
    const categoryId = query.categoryId;

    if (!categoryId) return <div>nothing to show...</div>

    return (
        <Grid>
            categoryId : {categoryId}
        </Grid>
    )
}