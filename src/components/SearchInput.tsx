import { SearchOutlined } from "@ant-design/icons";
import { Input, Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

type SecondarySearchType = "character-list" | "character-profile";
type PrimarySearchType = "character" | "item";
export const SearchInput = ({ className, style, color }: Props) => {
  const [value, setValue] = useState("");
  const [primarySearchType, setPrimarySearchType] =
    useState<PrimarySearchType>("character");
  const [secondarySearchType, setSecondarySearchType] =
    useState<SecondarySearchType>("character-list");
  const navigate = useNavigate();

  const onClickSearchButton = () => {
    if (primarySearchType === "item") {
    } else {
      navigate(`${secondarySearchType}/${value}`);
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
          borderColor: color,
        }}
        onPressEnter={onClickSearchButton}
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
          disabled={primarySearchType === "item"}
        />
        <Switch
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
        />
      </div>
    </>
  );
};
