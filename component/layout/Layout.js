import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";

const sidebarWidth = 250;
const navbarHeight = 70;

export default function Layout({ children }) {
    return (
        <Grid container>
            <Grid item container>
                <Navbar decreaseWidth={sidebarWidth} />
            </Grid>

            <Grid item container>
                <Grid container item >
                    <Sidebar sidebarWidth={sidebarWidth}/>
                </Grid>
                <Grid container item ml={`${sidebarWidth}px`} mt={`${navbarHeight}px`} width={ `calc(100% - ${sidebarWidth}px)`} height={'100%'}>
                    {children}
                </Grid>
            </Grid>

            <Grid item container position={"fixed"} bottom={0}>
                <Footer />
            </Grid>
        </Grid>
    )
}