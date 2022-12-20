import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

type SecondarySearchType = "character-list" | "character-profile";
type PrimarySearchType = "User" | "Item";
export const SearchInput = ({ style, color }: Props) => {
  const [value, setValue] = useState("");
  const [searchTypeVisible, setSearchTypeVisible] = useState<
    "visible" | "hidden"
  >("hidden");
  const [primarySearchType, setPrimarySearchType] =
    useState<PrimarySearchType>("User");
  const [secondarySearchType, setSecondarySearchType] =
    useState<SecondarySearchType>("character-list");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    if (!value) {
      return;
    }
    if (primarySearchType === "Item") {
    } else {
      navigate(`${secondarySearchType}/${value}`);
    }
  };

  const onToggleSearchTypeVisible = () => {
    setSearchTypeVisible(searchTypeVisible === "hidden" ? "visible" : "hidden");
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
        prefix={
          <>
            <div className="search-type" onClick={onToggleSearchTypeVisible}>
              {primarySearchType}
              {searchTypeVisible === "hidden" ? (
                <CaretDownOutlined />
              ) : (
                <CaretUpOutlined />
              )}
            </div>
            <div
              className="search-dropdown"
              style={{ visibility: searchTypeVisible }}
            >
              <span
                onClick={() => {
                  setPrimarySearchType("User");
                  onToggleSearchTypeVisible();
                }}
              >
                User
              </span>
              <span
                onClick={() => {
                  setPrimarySearchType("Item");
                  onToggleSearchTypeVisible();
                }}
              >
                Item
              </span>
            </div>
          </>
        }
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
            checked
              ? setSecondarySearchType("character-list")
              : setSecondarySearchType("character-profile");
          }}
          checked={secondarySearchType === "character-list"}
          disabled={primarySearchType === "Item"}
        />
      </div>
    </>
  );
};
