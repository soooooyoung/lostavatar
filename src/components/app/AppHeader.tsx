import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { SearchInput } from "../SearchInput";
import {
  BgColorsOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "../../utils/app/store";
import { Dropdown, MenuProps, Tooltip } from "antd";
import { ColorPalettes } from "../../models";
import { selectTextColor, selectTheme, setTheme } from "./appSlice";
import { useSelector } from "react-redux";

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(selectTheme);
  const currentText = useSelector(selectTextColor);
  const currentColor = currentTheme === "#ffffff" ? "#000000" : currentTheme;
  const [menuVisible, setMenuVisible] = useState<"visible" | "hidden">(
    "hidden"
  );
  const menuItems = [
    <div>
      <span>거래소</span>
    </div>,
    <div>
      <span>거래소</span>
    </div>,
    <div>
      <span>거래소</span>
    </div>,
  ];
  const items: MenuProps["items"] = Object.entries(ColorPalettes).map(
    ([key, value], idx) => ({
      key: idx,
      label: (
        <div style={{ width: 15, height: 15, backgroundColor: value }}></div>
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
    <Fragment>
      <Header
        className="header"
        style={{
          backgroundColor: currentTheme,
          color: currentText,
        }}
      >
        <div className="header-title" onClick={onClickBunny}>
          <span style={{ color: currentText }}>LOSTAVATAR.GG</span>
        </div>
        <SearchInput className="search" color={currentTheme} />
        <div className="menu">{menuItems}</div>
        <div className="space" />
        <div className="hamburger">
          <MenuOutlined />
          <div
            className="hamburger-dropdown"
            style={{ visibility: menuVisible }}
          >
            {menuItems}
          </div>
        </div>
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
      </Header>
      <Header className="topper" hidden></Header>
    </Fragment>
  );
};
