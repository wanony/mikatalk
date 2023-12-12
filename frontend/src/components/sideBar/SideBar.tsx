import { AppBar, SvgIcon, Toolbar } from "@mui/material";
import React from "react";
import CustomIconButton from "./customIconButtons/CustomIconButton";
import { useNavigate } from "react-router-dom";
import { RiMessage2Line } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { FiSettings } from "react-icons/fi";

const SideBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#4C5A6E",
        width: "fit-content",
        minWidth: "80px",
        flexShrink: 0,
        flexDirection: "column",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <CustomIconButton
            label="Students"
            icon={<GoPersonFill />}
            destination="/"
          />
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              margin: "8px 0",
            }}
          />
          <CustomIconButton
            label="Messages"
            icon={<RiMessage2Line />}
            destination="/"
          />
        </div>
        <div>
          <CustomIconButton
            label="Settings"
            icon={<FiSettings />}
            destination="/"
            style={{ marginTop: "auto" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SideBar;
