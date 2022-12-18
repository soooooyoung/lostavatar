import { List } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCharacters } from "../api/charater";

import { CharacterCard } from "../components/character/CharaterCard";
import "./CharacterListPage.scss";

export const CharacterListPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, refetch, isLoading } = useFetchCharacters(name ?? "");

  useEffect(() => {
    if (name?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [name, refetch]);

  const onClickCharacter = (characterName: string) => {
    if (!characterName) {
      return;
    }
    navigate(`/character-profile/${characterName}`);
  };
  return (
    <div className="character-list">
      <List
        className="rank-list"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item className="card">
            <CharacterCard
              isLoading={isLoading}
              character={item}
              onClick={() => onClickCharacter(item.CharacterName)}
            />
          </List.Item>
        )}
      />

      {/* {data?.map((item) => (
        <CharacterCard
          isLoading={isLoading}
          character={item}
          onClick={() => onClickCharacter(item.CharacterName)}
        />
      ))} */}
    </div>
  );
};
