import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { GoPersonFill } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import CustomIconButton from "../customIconButtons/CustomIconButton";

type Properties = {
  drawerWidth: number;
  sidebarOpen: boolean;
};

const GlobalMainDrawer = (properties: Properties) => {
  const handleTestClick = () => {
    console.log("Clicked boss");
  };

  return (
    <Drawer
      sx={{
        zIndex: 100,
        width: properties.drawerWidth,
        maxHeight: "80vh",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: properties.drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#4C5A6E",
          overflowY: "auto",
          paddingTop: 8,
        },
      }}
      variant="persistent"
      anchor="left"
      open={properties.sidebarOpen}
    >
      <Divider />
      <List sx={{ alignItems: "center" }}>
        <ListItemButton onClick={handleTestClick}>
          <ListItemIcon style={{ color: "white" }}>
            <CustomIconButton label="Students" icon={<GoPersonFill />} />
          </ListItemIcon>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={handleTestClick}>
          <ListItemIcon style={{ color: "white" }}>
            <CustomIconButton label="Messages" icon={<RiMessage2Line />} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
      <List sx={{ alignItems: "center", marginTop: "auto" }}>
        <ListItemButton onClick={handleTestClick}>
          <ListItemIcon style={{ color: "white" }}>
            <CustomIconButton
              label="Settings"
              icon={<FiSettings />}
              style={{ marginTop: "auto" }}
            />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default GlobalMainDrawer;
