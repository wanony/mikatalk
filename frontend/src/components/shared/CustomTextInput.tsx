import { TextField } from "@mui/material";

type Properties = {
  name: string;
  type: string;
  label: string;
};

const CustomTextInput = (properties: Properties) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "black" } }}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "black",
        },
      }}
      name={properties.name}
      label={properties.label}
      type={properties.type}
    ></TextField>
  );
};

export default CustomTextInput;
