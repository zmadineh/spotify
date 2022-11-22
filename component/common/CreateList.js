import React from "react";
import SidebarListItem from "../layout/sidebar/SidebarListItem";

import List from "@mui/material/List";

export default function CreateList({list, selectedItem, handleClick}) {

    return (
        <List component="nav" >
            {
                list.map(item => (
                    <SidebarListItem key={item.id} selectedItem={selectedItem} item={item} handleClick={handleClick}/>
                ))
            }
        </List>
    )
}