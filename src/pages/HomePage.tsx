import { Carousel } from "antd";
import { env } from "../config/env";
import pirate from "../assets/art/characters/pirate.png";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import { selectTextColor } from "../components/app/appSlice";
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const HomePage = () => {
  const color = useSelector(selectTextColor);
  return (
    <div className="home">
      <div className="banner">
        <img src={pirate} alt="" />
        <span style={{ color }}>
          Site under construction. Please Check Back Later!
        </span>
      </div>
      {/* <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>광고</h3>
        </div>
        <div>
          <h3 style={contentStyle}>광고</h3>
        </div>
        <div>
          <h3 style={contentStyle}>광고</h3>
        </div>
        <div>
          <h3 style={contentStyle}>광고</h3>
        </div>
      </Carousel> */}
    </div>
  );
};
