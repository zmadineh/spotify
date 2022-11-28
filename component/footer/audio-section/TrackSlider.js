import {styled} from "@mui/material/styles";
import Slider from "@mui/material/Slider";


export const TrackSlider = styled(Slider)(({ theme }) => ({
    height: 4,
    '& .MuiSlider-thumb': {
        width: 8,
        height: 8,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
        },
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
            }`,
        },
        '&.Mui-active': {
            width: 20,
            height: 20,
        },
    },
    '& .MuiSlider-rail': {
        opacity: 0.28,
    },
}));