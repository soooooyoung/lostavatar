import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchArmoryProfile } from "../api/armories";
import { CharacterImage } from "../components/character/CharacterImage";
import { Tendency } from "../models";
import "./CharacterProfilePage.scss";

export const CharacterProfilePage = () => {
  const { name } = useParams();
  const { data, refetch } = useFetchArmoryProfile(name ?? "");

  useEffect(() => {
    if (name?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [name, refetch]);

  return (
    <div className="character-profile">
      <div className="baseinfo">
        <div className="imageFrame">
          <CharacterImage characterUrl={data?.CharacterImage} />
        </div>
        <div className="content">
          <span>레벨 {data?.CharacterLevel}</span>
          <span>닉네임 {data?.CharacterName}</span>
          <span>원정대 {data?.ExpeditionLevel}</span>
          <span>길드 {data?.GuildName}</span>
          <span>지위 {data?.GuildMemberGrade}</span>
          <span>서버 {data?.ServerName}</span>
          <span>
            {data?.Stats?.map((item) => (
              <>
                {item.Type} {item.Value}
              </>
            ))}
          </span>
          <span>칭호 {data?.Title}</span>
          <span>영지 레벨 {data?.TownLevel}</span>
          <span>
            {data?.Tendencies?.map((item: Tendency) => (
              <>
                {item.Type} {item.Point}
              </>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
