import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/SearchInput.scss";
interface Props {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  onSearch?: () => void;
}

export const SearchInput = ({ style, color, onSearch }: Props) => {
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState<"list" | "profile">("list");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    if (!value) {
      return;
    }
    if (onSearch) {
      setValue("");
      onSearch();
    }
    if (searchType === "list") {
      navigate(`character-list/${value}`);
    } else {
      navigate(`character-profile/${value}`);
    }
  };

  return (
    <>
      <Input
        autoFocus
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className="search-input"
        style={{
          ...style,
          borderColor: color === "#ffffff" ? "#000000" : color,
          boxShadow: "none",
        }}
        onPressEnter={onClickSearchButton}
        suffix={
          <SearchOutlined
            style={{
              color: color === "#ffffff" ? "#000000" : color,
              fontSize: 24,
            }}
            onClick={onClickSearchButton}
          />
        }
      />
      <div className="switches">
        <Switch
          style={{
            backgroundColor: color === "#ffffff" ? "#000000" : "#ffffff",
          }}
          checkedChildren={<span style={{ color }}>원정대</span>}
          unCheckedChildren={<span style={{ color }}>캐릭터</span>}
          onChange={(checked) => {
            checked ? setSearchType("list") : setSearchType("profile");
          }}
          checked={searchType === "list"}
        />
      </div>
    </>
  );
};
