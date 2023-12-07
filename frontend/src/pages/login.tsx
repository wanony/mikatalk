import { Box, Typography, Button } from "@mui/material";
import { IoLogIn } from "react-icons/io5";
import React from "react";
import CustomTextInput from "../components/shared/CustomTextInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing in", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed in", { id: "login" });
    } catch (error) {
      toast.error("Sign in failed", { id: "login" });
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box
        padding={3}
        marginTop={3}
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img
          src="Mika_Portrait.png"
          alt="Mika"
          style={{ width: "250px" }}
        ></img>
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        marginLeft={"auto"}
        marginTop={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomTextInput type="email" name="email" label="Email" />
            <CustomTextInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                width: "400px",
                borderRadius: 2,
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  bgcolor: "pink",
                  color: "black",
                },
              }}
              endIcon={<IoLogIn />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
