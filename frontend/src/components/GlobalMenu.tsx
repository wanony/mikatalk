import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  Fab,
} from "@mui/material";
import Logo from "./MenuItems/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { GoPersonFill } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import CustomIconButton from "./MenuItems/customIconButtons/CustomIconButton";
import { useSidebar } from "./shared/SideBarContext";

const drawerWidth = 100;

const GlobalMenu = () => {
  // TODO:- Add global theme later on.
  // const theme = useTheme();
  const auth = useAuth();
  const { sidebarOpen, toggleSidebar } = useSidebar();

  const handleTestClick = () => {
    console.log("Clicked boss");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar sx={{ position: "fixed", bgcolor: "#FF8CA1" }}>
        <Toolbar>
          <Logo />
          <div style={{ marginLeft: "auto" }}>
            <>
              <NavLink
                bg="rgba(0, 0 ,0, 0.7)"
                to="/about"
                text="About"
                textColour="white"
              ></NavLink>
              {auth?.isLoggedIn ? (
                <>
                  <NavLink
                    bg="rgba(0, 0 ,0, 0.7)"
                    to="/chat"
                    text="Go to Chat"
                    textColour="white"
                  />
                  <NavLink
                    bg="rgba(0, 0, 0, 0.7)"
                    to="/"
                    text="Logout"
                    textColour="white"
                    onClick={auth.logout}
                  />
                </>
              ) : (
                <>
                  <NavLink
                    bg="rgba(0,0,0,0.7)"
                    to="/login"
                    text="Login"
                    textColour="white"
                  />
                  <NavLink
                    bg="rgba(0,0,0,0.7)"
                    to="/signup"
                    text="Sign Up"
                    textColour="white"
                  />
                </>
              )}
            </>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          zIndex: 100,
          width: drawerWidth,
          maxHeight: "80vh",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#4C5A6E",
            overflowY: "auto",
            paddingTop: 8,
          },
        }}
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
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
      <Fab
        color="primary"
        aria-label="toggle drawer"
        size="small"
        sx={{
          bgcolor: "white",
          boxShadow: "2px 2px 2px pink",
          color: "black",
          opacity: "80%",
          fontSize: 20,
          position: "fixed",
          zIndex: 1000,
          transform: "translateX(-50%)", // Center the FAB horizontally
          bottom: "50%",
          ...(sidebarOpen
            ? {
                left: drawerWidth + 30, // Middle of the drawer
              }
            : {
                left: 30,
              }),
          ":hover": {
            color: "pink",
            bgcolor: "white",
          },
        }}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </Fab>
    </Box>
  );
};

export default GlobalMenu;
