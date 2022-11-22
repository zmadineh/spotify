import {styled} from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";

export const SidebarListItemButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: '5px',
    paddingLeft: '8px',
    '& .Mui-selected': {
        backgroundColor: theme.palette.primary.light
    },
}));