import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import "../index.css";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import ChatBox from "../components/chat/ChatBox";

// TODO - TEMP ARRAY OF CHAT MESSAGES
// const tempChat = [
//   {
//     role: "user",
//     content: "Hello Mika.",
//   },
//   {
//     role: "model",
//     content: "Good morning wanony-sensei! XD",
//   },
//   {
//     role: "model",
//     content: "What are you doing? XD",
//   },
//   {
//     role: "model",
//     content: "Sensei?",
//   },
// ];

const Chat = () => {
  const auth = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      return navi("/login");
    }
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <SideBar />
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
  );
};

export default Chat;
