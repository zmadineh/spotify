import Link from "next/Link";
import {useRouter} from "next/router";
import {Grid} from "@mui/material";

export default function LinkToMusic({children, type, id}) {

    const router = useRouter();

    return (
        <Grid onClick={() => router.push(`musics/${type}/${id}`)}>
            {children}
        </Grid>
    )
}