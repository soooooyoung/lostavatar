import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
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

const throttle = (handler: (...args: any[]) => void, timeout = 300) => {
  let invokedTime: number;
  let timer: number;
  return function (this: any, ...args: any[]) {
    if (!invokedTime) {
      handler.apply(this, args);
      invokedTime = Date.now();
    } else {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (Date.now() - invokedTime >= timeout) {
          handler.apply(this, args);
          invokedTime = Date.now();
        }
      }, Math.max(timeout - (Date.now() - invokedTime), 0));
    }
  };
};

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(selectTheme);
  const currentText = useSelector(selectTextColor);
  const currentColor = currentTheme === "#ffffff" ? "#000000" : currentTheme;
  const [menuVisible, setMenuVisible] = useState<"visible" | "hidden">(
    "hidden"
  );
  const [scrollTop, setScrollTop] = useState<number>(0);
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

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > scrollTop && headerVisible) {
        setHeaderVisible(false);
        console.log("down", window.scrollY, scrollTop);
      } else if (window.scrollY < scrollTop && !headerVisible) {
        setHeaderVisible(true);
        console.log("up");
      }
      setScrollTop(window.scrollY);
    });

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop, setScrollTop, headerVisible, setHeaderVisible]);

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
          top: headerVisible ? 0 : -110,
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
    </Fragment>
  );
};
