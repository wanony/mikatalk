import React, { CSSProperties, ReactNode } from "react";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Properties = {
  label: string;
  icon: ReactNode;
  destination: string;
  style?: CSSProperties;
};

const CustomIconButton: React.FC<Properties> = (properties) => {
  const navi = useNavigate();

  const handleButtonClick = async () => {
    return navi(properties.destination);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <IconButton color="inherit" onClick={handleButtonClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...properties.style,
          }}
        >
          {React.cloneElement(properties.icon as React.ReactElement, {
            style: { fontSize: "45px" },
          })}
          <Typography variant="caption" style={{ marginTop: "4px" }}>
            {properties.label}
          </Typography>
        </div>
      </IconButton>
    </div>
  );
};

export default CustomIconButton;
