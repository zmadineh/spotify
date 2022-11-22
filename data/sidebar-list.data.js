import {HomeIcon} from "../public/icons/HomeIcon";
import {CreateNewIcon} from "../public/icons/CreateNewIcon";
import {LibraryIcon} from "../public/icons/LibraryIcon";
import {LikedIcon} from "../public/icons/LikedIcon";
import {SearchIcon} from "../public/icons/SearchIcon";

export const sidebarRoutes = [
    {id: 1, name: 'home', title: 'Home', icon: <HomeIcon />, link: '/'},
    {id: 2, name: 'search', title: 'Search', icon: <SearchIcon />, link: '/search'},
    {id: 3, name: 'library', title: 'Your Library', icon: <LibraryIcon />, link: '/library'},
]

export const sidebarOptions = [
    {id: 1, name: 'create', title: 'Create Playlist', icon: <CreateNewIcon />, link: '/create'},
    {id: 2, name: 'favorite', title: 'Liked Songs', icon: <LikedIcon />, link: '/liked'},
]
