// PageWrapper.tsx
import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { useSidebar } from "../components/shared/SideBarContext";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { sidebarOpen } = useSidebar();

  console.log(sidebarOpen);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        boxSizing: "border-box",
        width: "auto",
        height: "100%",
        marginLeft: sidebarOpen ? "100px" : 0,
        transition: "margin-left 0.3s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
