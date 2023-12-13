import { Link } from "react-router-dom";

type Properties = {
  to: string;
  bg: string;
  text: string;
  textColour: string;
  onClick?: () => Promise<void>;
};

const NavLink = (properties: Properties) => {
  return (
    <Link
      onClick={properties.onClick}
      className="nav-link"
      to={properties.to}
      style={{ background: properties.bg, color: properties.textColour }}
    >
      {properties.text}
    </Link>
  );
};

export default NavLink;
