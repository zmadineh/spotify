import Link from 'next/link';
import {Grid} from "@mui/material";
import Sidebar from "../component/sidebar";

export default function Home() {
  return (
    <Grid>
        <Sidebar>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/search">Search</Link>
                </li>
                <li>
                    <Link href="/library">My library</Link>
                </li>
            </ul>
        </Sidebar>
    </Grid>
  )
}
