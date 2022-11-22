import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import {theme} from "../themes/theme";

import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider  theme={theme}>
          <Layout>
              <CssBaseline />
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
      )
}

export default MyApp
