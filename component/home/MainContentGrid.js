import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";

export const MainContentGrid = styled(Grid)(({ theme }) => ({
    background: theme.palette.background.mainGradient,
    margin: 0,
}));