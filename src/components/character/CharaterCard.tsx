import { List, Skeleton } from "antd";
import { Character } from "../../models";

interface Props {
  character: Character;
  isLoading?: boolean;
}

export const CharacterCard = ({ character, isLoading }: Props) => {
  return (
    <List.Item className="card">
      <Skeleton loading={isLoading} active>
        <div className="card-content">
          <h1>
            {character.CharacterName} <span>LV {character.CharacterLevel}</span>
          </h1>
          {/* 
          <span>{character.CharacterClassName}</span>
          <span> {character.ItemAvgLevel}</span>
          <span>{character.ItemMaxLevel}</span>
          <span> {character.ServerName}</span> */}
        </div>
      </Skeleton>
    </List.Item>
  );
};
