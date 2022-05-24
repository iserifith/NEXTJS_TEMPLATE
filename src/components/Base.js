import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { Brightness4 } from "@mui/icons-material";

import {
  setAppStateDarkTheme,
  setAppStateLightTheme,
} from "../states/reducers/app.reducer";
import { APP_NAME } from "../utils/constant";

const Base = ({ children }) => {
  const theme = useTheme();
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
    >
      <AppBar
        style={{
          background:
            app.app_state_theme === "light"
              ? "rgb(255, 255, 255, 0.9)"
              : "rgb(0, 0, 0, 0.85)",

          padding: "10px 25px",
          boxShadow: "none",
        }}
        position="sticky"
      >
        <Toolbar
          style={{
            display: "flex",
          }}
          disableGutters
        >
          <Box
            flex="1"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="inherit">
              <Box padding="5px">
                <Image
                  src={
                    app.app_state_theme === "light"
                      ? "/app-icon-dark.png"
                      : "/app-icon-light.png"
                  }
                  height={25}
                  width={25}
                  alt="icon"
                />
              </Box>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {APP_NAME}
            </Typography>
          </Box>

          <Box>
            <IconButton
              color="inherit"
              onClick={() => {
                if (app.app_state_theme === "light") {
                  dispatch(setAppStateDarkTheme());
                } else {
                  dispatch(setAppStateLightTheme());
                }
              }}
            >
              <Brightness4 />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Box>
  );
};

export default Base;
