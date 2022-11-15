import Navbar from './navbar'
import Footer from './footer'
import {Grid} from "@mui/material";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                <Grid bgcolor={'#313030'}>
                    {children}
                </Grid>
            </main>
            <Footer />
        </>
    )
}