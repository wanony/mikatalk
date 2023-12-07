import React, { useLayoutEffect, useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../helpers/api-communicator";
import toast from "react-hot-toast";

type Message = {
  role: "user" | "model";
  content: string;
};

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
  const chatInputRef = useRef<HTMLInputElement | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    const content = chatInputRef.current?.value as string;
    if (chatInputRef && chatInputRef.current) {
      chatInputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content: content };
    setChatMessages((previous) => [...previous, newMessage]);

    const chatData = await sendChatRequest(content);

    setChatMessages([...chatData.chats]);
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting chats...", { id: "deletechat" });
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Deleted chats successfully!", { id: "deletechat" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete chats!", { id: "deletechat" });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading chats...", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats!", { id: "loadchats" });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Loading failed!", { id: "loadchats" });
        });
    }
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        marginTop: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {/* TODO change this to something more appealing later rather than name + sensei */}
            {auth?.user?.name[0].toUpperCase()}
            {"S"}
          </Avatar>
          <Typography sx={{ mx: "auto" }}>
            You are talking with Mika!
          </Typography>
          <Typography sx={{ mx: "auto", my: 4, padding: 3 }}>
            You can talk to her about anything, but avoid sharing personal
            information!
          </Typography>
          <Button
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
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          padding: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: 600,
          }}
        >
          {/* TODO - Update this to reflect the real model name */}
          Model - MikaLLama-0.1
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSubmit();
              }
            }}
            ref={chatInputRef}
            placeholder="Message Mika..."
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton
            onClick={handleSubmit}
            sx={{ marginLeft: "auto", color: "white" }}
          >
            <AiOutlineSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
