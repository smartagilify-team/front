import React from "react";

import { useActions } from "../hook/useActions";
import { useSelector } from "../hook/useSelector";

import { useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MenuList from "./MenuList";

import { drawerWidth } from "./utility";

interface DashboardMenuInterface {
  drawerState: boolean;
  drawerWidth: number;
  handlerDrawer: () => void;
}

const DashboardMenu: React.FC<DashboardMenuInterface> = (props) => {
  const { setTheme, fetchTheme } = useActions();
  const themeMode = useSelector((state) => state.theme);
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked);
    fetchTheme();
  };

  const DrawerContent = (
    <>
      <Stack
        direction='row'
        alignItems='center'
        spacing={1}
        pt={3}
        pb={1}
        px={1}>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            backgroundColor: theme.palette.primary.light,
          }}>
          M
        </Avatar>
        <Stack>
          <Typography variant='subtitle2'>Mahdi Khoramjoo</Typography>
          <Typography variant='caption' color={theme.palette.text.secondary}>
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction='row'
        justifyContent='end'
        px={2}
        mb={1}
        alignItems='center'>
        <Typography variant='caption'>{theme.palette.mode}</Typography>
        <Switch
          checked={themeMode.theme}
          size='small'
          onChange={handleChange}
        />
      </Stack>
      <Divider variant='middle' />
      <MenuList />
    </>
  );

  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open>
        {DrawerContent}
      </Drawer>

      <Drawer
        anchor='left'
        variant='temporary'
        ModalProps={{ onBackdropClick: props.handlerDrawer, keepMounted: true }}
        open={props.drawerState}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}>
        {DrawerContent}
      </Drawer>
    </>
  );
};

export default DashboardMenu;
