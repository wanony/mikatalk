import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    str.includes("//")
  ) {
    return true;
  }
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

  return role === "model" ? (
    <Box
      sx={{ display: "flex", padding: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}
    >
      <Avatar sx={{ ml: 0 }}>
        <img src="Mika_Icon.png" alt="mika" width={"30px"} />
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "20px" }}> {content}</Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                style={dark}
                language={getProgrammingLanguage(block)}
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}> {content}</Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{ display: "flex", padding: 2, bgcolor: "#004d56", gap: 2, my: 2 }}
    >
      <Avatar sx={{ ml: 0, bgcolor: "black", color: "white" }}>
        {/* TODO change this to something more appealing later rather than name + sensei */}
        {auth?.user?.name[0].toUpperCase()}
        {"S"}
      </Avatar>
      <Box>
        <Typography color={"white"} fontSize={"20px"}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
