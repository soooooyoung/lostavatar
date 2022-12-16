import { List, Skeleton } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchArmoryProfile } from "../api/armories";
import { useFetchCharacters } from "../api/charater";
import { CharacterCard } from "../components/character/CharaterCard";
import "./CharacterListPage.scss";

export const CharacterProfilePage = () => {
  const { state } = useLocation();

  const { data, refetch, isLoading } = useFetchArmoryProfile(
    state?.characterName ?? ""
  );

  useEffect(() => {
    if (state?.characterName?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [state, refetch]);

  return (
    <div className="character-list">
      <div>{data?.CharacterName}</div>
      <img src={data?.CharacterImage} alt="" />
    </div>
  );
};
