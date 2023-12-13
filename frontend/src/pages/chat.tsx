import { useEffect } from "react";
import { Box, Hidden } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/chat/ChatBox";
import PageWrapper from "./PageWrapper";

const Chat = () => {
  const auth = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      return navi("/login");
    }
  }, [auth]);

  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ChatBox />

        {/* <Button
            onClick={handleDeleteChats}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: 700,
              borderRadius: 3,
              mx: "auto",
              bgcolor: "black",
              ":hover": {
                color: "black",
                bgcolor: "white",
              },
            }}
          >
            Clear Conversation
          </Button> */}

        {/* From here is the Chat Box and Title */}
      </Box>
    </PageWrapper>
  );
};

export default Chat;
