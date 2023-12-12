import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import ChatItem from "./ChatItem";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  sendChatRequest,
  deleteUserChats,
  getUserChats,
} from "../../helpers/api-communicator";

type Message = {
  role: "user" | "model";
  content: string;
};

const ChatBox = () => {
  const auth = useAuth();
  const navi = useNavigate();
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

  useEffect(() => {
    if (!auth?.user) {
      return navi("/login");
    }
  }, [auth]);

  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: { md: 1, xs: 1, sm: 1 },
        flexDirection: "column",
        alignContent: "center",
        padding: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "black",
          mb: 2,
          mx: "auto",
          fontWeight: 400,
        }}
      >
        {/* TODO - Update this to reflect the real model name */}
        Model - MikaLLama-0.1
      </Typography>
      <Box
        ref={chatBoxRef}
        sx={{
          width: "100%",
          height: "60vh",
          borderRadius: 0,
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

      {/* From here is the Chat Box input */}

      <div
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: 8,
          backgroundColor: "#515E6E",
          display: "flex",
          margin: "auto",
        }}
      >
        {" "}
        <input
          type="text"
          id="chat-input-box"
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
  );
};

export default ChatBox;
