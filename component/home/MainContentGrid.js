import {styled} from "@mui/material/styles";
import {Grid} from "@mui/material";

export const MainContentGrid = styled(Grid)(({ theme }) => ({
    background: theme.palette.background.mainGradient,
    margin: 0,
}));