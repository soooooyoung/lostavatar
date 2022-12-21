import { Carousel } from "antd";
import { env } from "../config/env";
import pirate from "../assets/art/characters/pirate.png";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import { selectTextColor } from "../components/app/appSlice";

export const HomePage = () => {
  const color = useSelector(selectTextColor);

  return (
    <div className="home">
      <div
        className="section-main
      "
      >
        <div className="wrap-widget">
          <div className="widget">
            <h1>Site under construction. Please Check Back Later!</h1>
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. Please
            Check Back Later! Site under construction. Please Check Back
            Later!ter!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. ter!under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later!under construction. ter!under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later!under construction.ter!under construction. Please Check Back
            Later! Site under construction. Please Check Back Later!under
            construction. ter!under construction. Please Check Back Later! Site
            under construction. Please Check Back Later!under construction.
            ter!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction. ter!under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later!under construction. ter!under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later!under construction. ter!under construction. Please Check Back
            Later! Site under construction. Please Check Back Later!under
            construction.ter!under construction. Please Check Back Later! Site
            under construction. Please Check Back Later!under construction.
            ter!under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!under construction.
          </div>
        </div>
        <div className="wrap-widget">
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
          <div className="widget">
            Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later! Site under construction.
            Please Check Back Later! Site under construction. Please Check Back
            Later! Site under construction. Please Check Back Later! Site under
            construction. Please Check Back Later!
          </div>
        </div>
      </div>

      {/* <div className="banner">
        <span style={{ color }}>
          Site under construction. Please Check Back Later!
        </span>
      </div>
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src={pirate} style={contentStyle} alt="" />
        </div>
        <div style={contentStyle}>
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
