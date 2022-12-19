import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { SearchInput } from "../SearchInput";
import { BgColorsOutlined, GlobalOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../utils/app/store";
import { Dropdown, MenuProps, Space, Tooltip } from "antd";
import { ColorPalettes } from "../../models";
import { selectTheme, setTheme } from "./appSlice";
import demo from "../../assets/art/characters/demonic.png";
import { useSelector } from "react-redux";

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(selectTheme);
  const currentColor = currentTheme === "#ffffff" ? "#000000" : currentTheme;
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
      <Header className="header">
        <img onClick={onClickBunny} className="rabbit" src={demo} alt="" />
        <SearchInput className="search" color={currentColor} />
        <div className="space" />
        <div className="palette">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <BgColorsOutlined style={{ color: currentColor }} />
          </Dropdown>
        </div>
        <div className="language-setting">
          <Tooltip
            title={
              "Site Currently under construction. English Translation will be available after completion."
            }
            color={currentColor}
            placement="bottomRight"
          >
            <GlobalOutlined style={{ color: currentColor }} disabled />
          </Tooltip>
        </div>
      </Header>
    </Fragment>
  );
};
