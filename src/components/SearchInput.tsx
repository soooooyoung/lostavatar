import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const SearchInput = ({ className, style }: Props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    navigate("character-list", {
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
    </>
  );
};
