import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardMenu from "./DashboardMenu";
import Header from "./Header";
import Main from "./Main";

const Template: React.FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerState, setDrawerState] = useState(true);
  const drawerWidth = 240;

  const drawerToggle = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handlerDrawer={drawerToggle} drawerState={drawerState} />
      <DashboardMenu handlerDrawer={drawerToggle} drawerWidth={drawerWidth} drawerState={drawerState} />
      <Main drawerState={drawerState} drawerWidth={drawerWidth}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default Template;
