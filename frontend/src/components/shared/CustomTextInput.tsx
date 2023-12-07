import { TextField } from "@mui/material";
import React from "react";

type Properties = {
  name: string;
  type: string;
  label: string;
};

const CustomTextInput = (properties: Properties) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
      name={properties.name}
      label={properties.label}
      type={properties.type}
    ></TextField>
  );
};

export default CustomTextInput;
