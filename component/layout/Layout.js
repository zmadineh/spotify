import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import {useState} from "react";

const sidebarWidth = 250;
const navbarHeight = 70;
const footerHeight = 93;

export default function Layout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Grid container>
            <Grid item container>
                <Navbar decreaseWidth={sidebarWidth} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            </Grid>

            <Grid item container>
                <Grid container item sx={{display: {mobile: 'none', tablet: 'flex'}}} >
                    <Sidebar sidebarOpen={sidebarOpen} sidebarWidth={sidebarWidth}/>
                </Grid>
                <Grid container item
                      ml={{mobile: '0px', tablet: `${sidebarWidth}px`}}
                      mt={`${navbarHeight}`}
                      width={{mobile: '100%', tablet: `calc(100% - ${sidebarWidth}px)`}}>
                    {children}
                </Grid>
            </Grid>

            <Grid item container position={"fixed"} bottom={0}>
                <Footer sidebarWidth={sidebarWidth}/>
            </Grid>
        </Grid>
    )
}