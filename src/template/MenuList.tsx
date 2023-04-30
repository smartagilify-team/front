import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Routes from "./routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuList: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const { pathname } = useLocation();

  const checkSelectedItem = () => {
    const startChar = pathname.lastIndexOf("/");
    const endChar = pathname.length + 1;
    const thisRoute = pathname.slice(startChar, endChar);
    const selectedDefualt = Routes.findIndex(
      (route) => route.route === thisRoute
    );
    return selectedDefualt;
  };
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedItem(checkSelectedItem());
  }, []);

  const clickHandler = (index: number, route: string) => {
    navigate(route);
    setSelectedItem(index);
  };

  return (
    <List>
      {Routes.map((route, index) => (
        <ListItem key={route.title} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => clickHandler(index, route.route)}
            selected={selectedItem === index}
            sx={{
              minHeight: 48,
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: "center",
              }}>
              <FontAwesomeIcon icon={route.icon} />
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
