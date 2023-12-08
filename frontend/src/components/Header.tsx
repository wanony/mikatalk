import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "../components/shared/NavLink";

const Header = () => {
  const auth = useAuth();

  return (
    // TODO Update the colours to match momo talk
    <AppBar sx={{ bgcolor: "#FF8CA1", position: "static" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLink
                bg="rgba(0, 0 ,0, 0.7)"
                to="/chat"
                text="Go to chat"
                textColour="white"
              />
              <NavLink
                bg="rgba(0, 0, 0, 0.7)"
                to="/"
                text="logout"
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
