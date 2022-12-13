import { Input } from "antd";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const SearchInput = ({ className, style }: Props) => {
  return <Input className={className} style={style}></Input>;
};
