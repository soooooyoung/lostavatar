import { List, Skeleton } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchCharacters } from "../api/charater";
import { CharacterCard } from "../components/character/CharaterCard";
import "./CharacterListPage.scss";

export const CharaterListPage = () => {
  const { state } = useLocation();

  const { data, refetch, isLoading } = useFetchCharacters(
    state?.characterName ?? ""
  );

  useEffect(() => {
    if (state?.characterName?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [state, refetch]);

  return (
    <div className="character-list">
      <List
        className="rank-list"
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        size="large"
        dataSource={data}
        renderItem={(item, idx) => (
          <CharacterCard isLoading={isLoading} character={item} />
        )}
      />
    </div>
  );
};
