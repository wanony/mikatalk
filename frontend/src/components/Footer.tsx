import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        minHeight: "20vh",
        maxHeight: "30vh",
        backgroundColor: "rgb(240, 240, 240)", // Set the background color as needed
        textAlign: "center",
      }}
    >
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "30px", color: "black" }}>
          <img
            src="Mika_Halo.png"
            alt="mika's halo"
            style={{
              marginRight: "30px",
              width: "80px",
              verticalAlign: "middle",
            }}
          />
          Made by
          <span>
            <Link
              style={{ color: "black" }}
              className="nav-link"
              to={"https://github.com/wanony"}
            >
              Wanony
            </Link>
          </span>
          &amp;
          <span>
            <Link
              style={{ color: "black" }}
              className="nav-link"
              to={"https://github.com/wanony"} // Update this link to the PJ Bros Discord
            >
              The PJ Bros
            </Link>
          </span>
          <img
            src="Mika_Halo.png"
            alt="mika's halo"
            style={{
              width: "80px",
              verticalAlign: "middle",
            }}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
