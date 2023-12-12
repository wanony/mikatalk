import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeBlocks(message: string) {
  if (message.includes("```")) {
    const split = message.split("```");
    return split;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("]") ||
    str.includes("#") ||
    str.includes("//") ||
    str.includes("(") ||
    str.includes(")")
  ) {
    return true;
  }
  return false;
}

function splitBlockFirstWord(block: string): string {
  const words = block.split(" ");
  const contentExceptFirstWord = words.slice(1).join(" ");
  return contentExceptFirstWord;
}

function getProgrammingLanguage(str: string) {
  return str.split(" ")[0];
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "model";
}) => {
  const auth = useAuth();
  const messageBlocks = extractCodeBlocks(content);

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        gap: 2,
        alignSelf: role === "user" ? "flex-end" : "flex-start",
      }}
    >
      {role === "model" && (
        <Avatar
          sx={{
            bgcolor: "rgba(255, 0, 0, 0.1)",
            ml: 0,
            display: { xs: "none", sm: "none", md: "center" }, // Hide on small and extra-small screens
          }}
        >
          <img src="Mika_Icon.png" alt="mika" width={"40px"} />
        </Avatar>
      )}
      <Box
        sx={{
          backgroundColor: role === "model" ? "#E5E5EA" : "#007BFF",
          borderRadius: 8,
          maxWidth: "70%",
          padding: 2,
        }}
      >
        {!messageBlocks && (
          <Typography
            sx={{
              fontSize: "20px",
              color: role === "model" ? "black" : "white",
            }}
          >
            {content}
          </Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={darcula}
                language={getProgrammingLanguage(block)}
              >
                {splitBlockFirstWord(block)}
              </SyntaxHighlighter>
            ) : (
              <Typography
                key={index}
                sx={{
                  fontSize: "20px",
                  color: role === "model" ? "black" : "white",
                }}
              >
                {block}
              </Typography>
            )
          )}
      </Box>
      {role === "user" && (
        <Avatar
          sx={{
            ml: 0,
            bgcolor: "black",
            color: "white",
            display: { xs: "none", sm: "none", md: "center" },
          }}
        >
          {auth?.user?.name[0].toUpperCase()}
          {"S"}
        </Avatar>
      )}
    </Box>
  );
};

export default ChatItem;
