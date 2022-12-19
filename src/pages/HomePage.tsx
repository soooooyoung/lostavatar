import { Carousel } from "antd";
import { env } from "../config/env";

import "./HomePage.scss";
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const HomePage = () => {
  return (
    <div className="home">
      <Carousel autoplay>
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
      </Carousel>
    </div>
  );
};
