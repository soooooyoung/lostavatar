import { useNavigate } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { BgColorsOutlined, GlobalOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../utils/app/store";
import { Dropdown, MenuProps, Tooltip } from "antd";
import { ColorPalettes } from "../../models";
import { selectTextColor, selectTheme, setTheme } from "./appSlice";
import { useSelector } from "react-redux";
import "../../style/header.scss";

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(selectTheme);
  const currentText = useSelector(selectTextColor);
  const currentColor = currentTheme === "#ffffff" ? "#000000" : currentTheme;

  const items: MenuProps["items"] = Object.entries(ColorPalettes).map(
    ([key, value], idx) => ({
      key: idx,
      label: (
        <div
          key={idx}
          style={{ width: 15, height: 15, backgroundColor: value }}
        ></div>
      ),
      onClick: () => {
        dispatch(setTheme(key as keyof typeof ColorPalettes));
      },
    })
  );

  const onClickBunny = () => {
    navigate("/");
  };

  return (
    <div
      className="header"
      style={{
        backgroundColor: currentTheme,
        color: currentText,
      }}
    >
      <div onClick={onClickBunny}>
        <span style={{ color: currentText }}>LOSTAVATAR.GG</span>
      </div>
      <SearchInput className="search" color={currentTheme} />
      <div className="space" />
      <div className="palette">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <BgColorsOutlined />
        </Dropdown>
      </div>
      <div className="language-setting">
        <Tooltip
          title={
            "Translation currently disabled. It will be available after official site launch."
          }
          color={currentColor}
          placement="bottomRight"
        >
          <GlobalOutlined disabled />
        </Tooltip>
      </div>
    </div>
  );
};
