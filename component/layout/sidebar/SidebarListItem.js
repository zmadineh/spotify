import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {SidebarListItemButton} from "./SidebarListItemButton";
import React from "react";
import Link from "next/link";

export default function SidebarListItem({selectedItem, item, handleClick}) {
    const selected = selectedItem === item.name
    return (
        <Link href={item.link}>
            <SidebarListItemButton
                selected={selected}
                onClick={(event) => handleClick(event, item.name)}
                sx={{color: (selected ? 'secondary.main' : 'inherit')}}
            >
                <ListItemIcon sx={{color: (selected ? 'secondary.main' : 'inherit')}}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={<Typography variant={"body1"}>{item.title}</Typography>}/>
            </SidebarListItemButton>
        </Link>
    )
}