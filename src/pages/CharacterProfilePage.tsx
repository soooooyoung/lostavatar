import { Tabs } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchArmoryProfile } from "../api/armories";
import logo from "../assets/art/logo.png";
import "../style/CharacterProfilePage.scss";

export const CharacterProfilePage = () => {
  const { name } = useParams();
  const { data, refetch } = useFetchArmoryProfile(name ?? "");
  const items = [
    {
      label: "기본 정보",
      key: "1",
      children: (
        <div className="list-vertical character-info">
          <div>
            <span>캐릭터 이름: </span>
            <span>{data?.CharacterClassName}</span>
          </div>
          <div>
            <span>캐릭터 레벨: </span>
            <span>{data?.CharacterLevel}</span>
          </div>
          <div>
            <span>아이템 레벨: </span>
            <span>{data?.ItemAvgLevel}</span>
          </div>
          <div>
            <span>서버: </span>
            <span>{data?.ServerName}</span>
          </div>
        </div>
      ),
    },
    {
      label: "원정대 정보",
      key: "2",
      children: (
        <div className="list-vertical character-info">
          <div>
            <span>원정대 레벨: </span>
            <span>{data?.ExpeditionLevel}</span>
          </div>
          <div>
            <span>영지 이름: </span>
            <span>{data?.TownName}</span>
          </div>
          <div>
            <span>영지 레벨: </span>
            <span>{data?.TownLevel}</span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (name?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [name, refetch]);

  return (
    <div className="character-profile list-horizontal">
      <div className="character-image">
        <img src={data?.CharacterImage || logo} alt="" />
      </div>

      <Tabs
        className="character-tabs"
        tabPosition="top"
        style={{ color: "inherit" }}
        items={items}
      />
    </div>
  );
};
