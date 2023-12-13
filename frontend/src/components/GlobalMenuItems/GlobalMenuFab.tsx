import { Fab } from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type Properties = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  drawerWidth: number;
};

const GlobalMenuFab = (properties: Properties) => {
  return (
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
        ...(properties.sidebarOpen
          ? {
              left: properties.drawerWidth + 30, // Middle of the drawer
            }
          : {
              left: 30,
            }),
        ":hover": {
          color: "pink",
          bgcolor: "white",
        },
      }}
      onClick={properties.toggleSidebar}
    >
      {properties.sidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </Fab>
  );
};

export default GlobalMenuFab;
