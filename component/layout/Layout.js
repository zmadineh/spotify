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
                <Grid item >
                    <Sidebar />
                </Grid>
                <Grid item ml={`${sidebarWidth}px`} mt={`${navbarHeight}px`} width={'100%'} height={'100%'}>
                    {children}
                </Grid>
            </Grid>

            <Grid item container position={"fixed"} bottom={0}>
                <Footer />
            </Grid>
        </Grid>
    )
}