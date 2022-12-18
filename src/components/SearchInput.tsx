import { SearchOutlined } from "@ant-design/icons";
import { Input, Switch } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { selectCurrentTheme } from "./app/appSlice";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

type SearchType = "character-list" | "character-profile";

export const SearchInput = ({ className, style }: Props) => {
  const currentTheme = useSelector(selectCurrentTheme);
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("character-list");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    navigate(`${searchType}/${value}`);
  };

  return (
    <>
      <Input
        autoFocus
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className={className}
        style={{
          ...style,
          borderColor: currentTheme === "#ffffff" ? "#000000" : currentTheme,
        }}
        onPressEnter={onClickSearchButton}
        suffix={
          <SearchOutlined
            style={{
              color: currentTheme === "#ffffff" ? "#000000" : currentTheme,
              fontSize: 24,
            }}
            onClick={onClickSearchButton}
          />
        }
      />
      <Switch
        checkedChildren="원정대"
        unCheckedChildren="캐릭터"
        onChange={(checked) => {
          checked
            ? setSearchType("character-list")
            : setSearchType("character-profile");
        }}
        checked={searchType === "character-list"}
      />
    </>
  );
};
