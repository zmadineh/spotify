import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";

export const PlaylistMainGrid = styled(Grid, {
    shouldForwardProp: (props) => props !== 'color',
})(({ theme, color,  }) => ({
    background: `linear-gradient(180deg, ${color} 0%, #000000 89.7%)`,
}))