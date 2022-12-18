import { List, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { Character } from "../../models";
import { selectTextColor } from "../app/appSlice";
import { CharacterImage } from "./CharacterImage";

interface Props {
  onClick?: () => void;
  character: Character;
  isLoading?: boolean;
}

export const CharacterCard = ({ character, isLoading, onClick }: Props) => {
  const currentTextColor = useSelector(selectTextColor);
  return (
    <div
      className="card-content"
      style={{
        color: currentTextColor,
      }}
    >
      <div className="card-img" onClick={onClick}>
        <CharacterImage characterClassName={character.CharacterClassName} />
      </div>
      <h1>{character.CharacterName}</h1>
      <span>
        ITEM LV <span className="itemLv">{character.ItemAvgLevel}</span>
      </span>
      <span>
        {character.CharacterClassName} LV {character.CharacterLevel}
      </span>
      <span> {character.ServerName}</span>
    </div>
  );
};
