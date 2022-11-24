import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";

export default function Footer({ children }) {

    const trackData = useSelector((state) => state.tracks.data);
    const dispatch = useDispatch();

    return (
        <Grid color={'text.primary'} bgcolor={'background.secondary'} width={"100%"} height={'75px'}>
            <Grid>

            </Grid>
            <Grid>

            </Grid>
            <Grid>
                
            </Grid>
        </Grid>
    )
}