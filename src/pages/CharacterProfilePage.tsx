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
      children: <>ff</>,
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
      <ChracterBaseProfile className="profile-content" data={data} />
      {/* <div className="character-title">
        {data?.Title}
        <h1>{data?.CharacterName}</h1>
      </div> */}
      <Tabs
        className="character-tabs"
        tabPosition="top"
        style={{ color: "inherit" }}
        items={items}
      />
    </div>
  );
};
