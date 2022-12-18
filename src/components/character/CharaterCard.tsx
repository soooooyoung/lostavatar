import { List, Skeleton } from "antd";
import { Character } from "../../models";
import { CharacterImage } from "./CharacterImage";

interface Props {
  onClick?: () => void;
  character: Character;
  isLoading?: boolean;
}

export const CharacterCard = ({ character, isLoading, onClick }: Props) => {
  return (
    <List.Item className="card" onClick={onClick}>
      <Skeleton loading={isLoading} active>
        <div className="card-content">
          <CharacterImage characterClassName={character.CharacterClassName} />
          <h1>{character.CharacterName}</h1>
          <span>
            ITEM LV <span className="itemLv">{character.ItemAvgLevel}</span>
          </span>
          <span>
            {character.CharacterClassName} LV {character.CharacterLevel} /{" "}
            {character.ServerName}
          </span>

          {/* 
          TODO: DB 캐시
          <span>좋아요 수 : {}</span> */}
        </div>
      </Skeleton>
    </List.Item>
  );
};
