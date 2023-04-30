import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumb from "../components/Breadcrumb";

import { drawerWidth } from "./utility";

interface MainInterface {
  drawerWidth: number;
  drawerState: boolean;
  children: React.ReactNode;
}

const Main: React.FC<MainInterface> = (props) => {
  return (
    <Box
      component='main'
      sx={{
        p: 3,
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: {xs: 0, md: `${drawerWidth}px`}
      }}>
      <Toolbar />
      <Breadcrumb />
      {props.children}
    </Box>
  );
};

export default Main;
