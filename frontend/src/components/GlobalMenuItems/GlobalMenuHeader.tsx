import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import NavLink from "../shared/NavLink";
import { useAuth } from "../../context/AuthContext";

const GlobalMenuHeader = () => {
  const auth = useAuth();
  return (
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
  );
};

export default GlobalMenuHeader;
