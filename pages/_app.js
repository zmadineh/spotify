import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import {theme} from "../themes/theme";

import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {Provider} from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <Layout>
                  <CssBaseline />
                <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
      </Provider>
      )
}

export default MyApp
