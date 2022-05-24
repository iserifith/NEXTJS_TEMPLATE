import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { NotificationsProvider } from "@mantine/notifications";
import { darkMui, lightMui } from "../src/utils/muiTheme";
import createEmotionCache from "../src/utils/createEmotionCache";
import { wrapper } from "../src/states/store";
import "../styles/globals.css";
import Base from "../src/components/Base";
import { useSelector } from "react-redux";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { app_state_theme } = useSelector((state) => state.app);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Obscura</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={app_state_theme === "light" ? lightMui : darkMui}>
        <CssBaseline />
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
          }}
        >
          <NotificationsProvider>
            <Base>
              <Component {...pageProps} />
            </Base>
          </NotificationsProvider>
        </MantineProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
