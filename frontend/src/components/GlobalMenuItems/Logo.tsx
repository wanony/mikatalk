import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navi = useNavigate();
  const handleClick = () => {
    navi("/");
  };
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: "52px",
          height: "50px",
          borderRadius: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        <img
          src="Mika_Halo.png"
          alt="Mika_Halo"
          width={"50px"}
          height={"50px"}
          className="image-pulse"
        />
      </div>
      <Typography
        sx={{
          display: { md: "block", sm: "none", sx: "none" },
          marginRight: "auto",
          fontWeight: "300",
          textShadow: "2px 2px 20px #000000",
          fontSize: "22.5px",
        }}
      >
        <span style={{ fontSize: "30px" }}>Mika</span>Talk
      </Typography>
    </div>
  );
};

export default Logo;
