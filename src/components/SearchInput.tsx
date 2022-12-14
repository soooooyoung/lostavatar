import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const SearchInput = ({ className, style }: Props) => {
  const onClickSearchButton = () => {
    console.log("cliked");
  };
  return (
    <Input
      className={className}
      style={style}
      suffix={
        <SearchOutlined
          style={{ color: "#aad6e6", fontSize: 24 }}
          onClick={onClickSearchButton}
        />
      }
    ></Input>
  );
};
