import { TypeAnimation } from "react-type-animation";

const HomeTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Mika is Love",
        1000,
        "Mika is Life",
        1000,
        "In Mika we Trust",
        2000,
        "Amen",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "black",
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
};

export default HomeTypeAnimation;
