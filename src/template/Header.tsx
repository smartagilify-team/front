import React, { useState } from "react";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

// utility about layout
import { drawerWidth } from "./utility";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleUser,
  faBars,
} from "../assets/fontawesome/pro-regular-svg-icons";

interface HeaderInterface {
  drawerState: boolean;
  handlerDrawer: () => void;
}

const Header: React.FC<HeaderInterface> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlerTheme = () => {
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handlerTheme}>
        {/* <LightbulbIcon fontSize='small' sx={{ mr: 2 }} /> */}
        <span>Theme mode</span>
      </MenuItem>
    </Menu>
  );

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      id='appBar'
      position='fixed'
      sx={{
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
      }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open-drawer'
          sx={{
            mr: 2,
            display: { xs: "inline-flex", md: "none" },
          }}
          onClick={props.handlerDrawer}>
          <FontAwesomeIcon icon={faBars} size='sm' />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton aria-label='mail-box' color='inherit'>
            <Badge badgeContent={4} color='error'>
              <FontAwesomeIcon icon={faEnvelope} />
            </Badge>
          </IconButton>
          {/* <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'>
              <Badge badgeContent={17} color='error'>
               
              </Badge>
            </IconButton> */}
          <IconButton
            onClick={handleProfileMenuOpen}
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            color='inherit'>
            <FontAwesomeIcon icon={faCircleUser} />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMenu}
    </AppBar>
    // </Box>
  );
};

export default Header;
