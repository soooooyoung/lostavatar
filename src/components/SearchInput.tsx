import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Select, Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

type SecondarySearchType = "character-list" | "character-profile";
type PrimarySearchType = "User" | "Item";
export const SearchInput = ({ className, style, color }: Props) => {
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
          borderColor: color,
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
              color: color,
              fontSize: 24,
            }}
            onClick={onClickSearchButton}
          />
        }
      />
      <div className="switches">
        <Switch
          style={{
            backgroundColor: color,
          }}
          checkedChildren="원정대"
          unCheckedChildren="캐릭터"
          onChange={(checked) => {
            checked
              ? setSecondarySearchType("character-list")
              : setSecondarySearchType("character-profile");
          }}
          checked={secondarySearchType === "character-list"}
          disabled={primarySearchType === "Item"}
        />
        {/* <Switch
          style={{
            backgroundColor: color,
          }}
          checkedChildren="사용자"
          unCheckedChildren="아바타"
          onChange={(checked) => {
            if (checked) {
              setPrimarySearchType("character");
            } else {
              setPrimarySearchType("item");
              setSecondarySearchType("character-profile");
            }
          }}
          checked={primarySearchType === "character"}
          disabled
        /> */}
      </div>
    </>
  );
};
