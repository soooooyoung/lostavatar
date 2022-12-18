import { List } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCharacters } from "../api/charater";
import { setTheme } from "../components/app/appSlice";
import { CharacterCard } from "../components/character/CharaterCard";
import { useAppDispatch } from "../utils/app/store";
import "./CharacterListPage.scss";

export const CharacterListPage = () => {
  const dispatch = useAppDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, refetch, isLoading } = useFetchCharacters(name ?? "");

  useEffect(() => {
    dispatch(setTheme("default"));
  });
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
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 4 }}
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <CharacterCard
            isLoading={isLoading}
            character={item}
            onClick={() => onClickCharacter(item.CharacterName)}
          />
        )}
      />
    </div>
  );
};
