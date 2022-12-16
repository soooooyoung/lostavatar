import { SearchOutlined } from "@ant-design/icons";
import { Input, Switch } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

type SearchType = "character-list" | "character-profile";

export const SearchInput = ({ className, style }: Props) => {
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("character-list");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    navigate(searchType, {
      state: {
        characterName: value,
      },
    });
  };

  return (
    <>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className={className}
        style={style}
        suffix={
          <SearchOutlined
            style={{ color: "#aad6e6", fontSize: 24 }}
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
      />
    </>
  );
};
