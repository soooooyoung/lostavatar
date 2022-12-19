import { Tabs } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchArmoryProfile } from "../api/armories";
import { ChracterBaseProfile } from "../components/character/CharacterBaseProfile";
import "./CharacterProfilePage.scss";

export const CharacterProfilePage = () => {
  const { name } = useParams();
  const { data, refetch } = useFetchArmoryProfile(name ?? "");
  const items = [
    {
      label: "기본 정보",
      key: "1",
      children: <ChracterBaseProfile className="profile-content" data={data} />,
    },
    {
      label: "",
      key: "2",
      children: <>ff</>,
    },
  ];

  useEffect(() => {
    if (name?.replace(/ /g, "") !== undefined) {
      refetch();
    }
  }, [name, refetch]);

  return (
    <div className="character-profile">
      <div className="character-title">
        {data?.Title}
        <h1>{data?.CharacterName}</h1>
      </div>
      <Tabs
        className="character-tabs"
        tabPosition="left"
        style={{ color: "inherit" }}
        items={items}
      />
    </div>
  );
};
