import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Logo from "./GlobalMenuItems/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import { FiSettings } from "react-icons/fi";
import { GoPersonFill } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import CustomIconButton from "./GlobalMenuItems/customIconButtons/CustomIconButton";
import { useSidebar } from "./shared/SideBarContext";
import GlobalMenuFab from "./GlobalMenuItems/GlobalMenuFab";
import GlobalMainDrawer from "./GlobalMenuItems/drawers/GlobalMainDrawer";
import GlobalMenuHeader from "./GlobalMenuItems/GlobalMenuHeader";

const drawerWidth = 100;

const GlobalMenu = () => {
  // TODO:- Add global theme later on.
  // const theme = useTheme();
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      <GlobalMenuHeader />

      <GlobalMainDrawer drawerWidth={drawerWidth} sidebarOpen={sidebarOpen} />

      <GlobalMenuFab
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        drawerWidth={drawerWidth}
      />
    </Box>
  );
};

export default GlobalMenu;
