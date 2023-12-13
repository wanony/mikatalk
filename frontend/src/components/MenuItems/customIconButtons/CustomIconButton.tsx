import React, { CSSProperties, ReactNode } from "react";
import { IconButton, Typography } from "@mui/material";

type Properties = {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
};

const CustomIconButton: React.FC<Properties> = (properties) => {
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton color="inherit">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...properties.style,
          }}
        >
          {React.cloneElement(properties.icon as React.ReactElement, {
            style: { fontSize: "50px" },
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
