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
import { useObserver } from "../hooks/UseObserver";

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(selectTheme);
  const currentText = useSelector(selectTextColor);
  const currentColor = currentTheme === "#ffffff" ? "#000000" : currentTheme;
  const [menuVisible, setMenuVisible] = useState<"visible" | "hidden">(
    "hidden"
  );
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);

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

  const ref = useObserver((entries) => {
    if (entries[0].isIntersecting) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  });

  const onClickBunny = () => {
    navigate("/");
  };

  const onToggleMenuVisible = () => {
    setMenuVisible(menuVisible === "hidden" ? "visible" : "hidden");
  };

  return (
    <Fragment>
      <div
        className="header"
        style={{
          backgroundColor: currentTheme,
          color: currentText,
          top: headerVisible ? 0 : -140,
        }}
      >
        <div className="header-title" onClick={onClickBunny}>
          <span style={{ color: currentText }}>LOSTAVATAR.GG</span>
        </div>
        <SearchInput className="search" color={currentTheme} />
        <div className="menu">{menuItems}</div>
        <div className="space" />
        <div className="hamburger" onClick={onToggleMenuVisible}>
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
      </div>
      <div
        className="stickyheader"
        style={{
          visibility: headerVisible ? "hidden" : "visible",
          top: headerVisible ? 110 : 0,
          backgroundColor: `${currentText}99`,
        }}
      >
        {
          <SearchInput
            className="search"
            onSearch={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            color={currentTheme}
            style={{ display: headerVisible ? "none" : "flex" }}
          />
        }
      </div>
      <div ref={ref} />
    </Fragment>
  );
};
