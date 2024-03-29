import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { List } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCharacters } from "../api/charater";
import { selectTextColor } from "../components/app/appSlice";
import { CharacterCard } from "../components/character/CharaterCard";
import {
  getCharacterFromDataList,
  getDataListFromServer,
  getServerListFromData,
} from "../utils/dataUtils";
import "../style/CharacterListPage.scss";

export const CharacterListPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const currentTextColor = useSelector(selectTextColor);
  const { data, refetch, isLoading } = useFetchCharacters(name ?? "");
  const [server, SetServer] = useState<string>("all");
  const [listMode, setListMode] = useState<boolean>(false);

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

  const onClickMenuItem = (item: string) => {
    SetServer(item);
  };
  const character = getCharacterFromDataList(data, name);

  return (
    <div className="character-list">
      <div className="character-service">
        <div className="view-service">
          {listMode ? (
            <AppstoreOutlined onClick={() => setListMode(false)} />
          ) : (
            <UnorderedListOutlined onClick={() => setListMode(true)} />
          )}
        </div>
      </div>
      {character ? (
        <div className="single card">
          <CharacterCard
            character={character}
            onClick={() => onClickCharacter(character.CharacterName)}
          />
        </div>
      ) : (
        ""
      )}
      {/* TODO: nav bar to custom components and unite theme */}
      <div className="nav-bar" style={{ color: currentTextColor, height: 80 }}>
        <span
          className="nav-item"
          style={{ fontWeight: server === "all" ? "bold" : "normal" }}
          onClick={() => onClickMenuItem("all")}
        >
          전체
        </span>
        {getServerListFromData(data)?.map((item, idx) => (
          <span
            key={idx}
            className="nav-item"
            style={{ fontWeight: server === item ? "bold" : "normal" }}
            onClick={() => onClickMenuItem(item)}
          >
            {item}
          </span>
        ))}
        <div className="space"></div>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={getDataListFromServer(data ?? [], server)}
        itemLayout="horizontal"
        loading={isLoading}
        renderItem={(item) => (
          <List.Item
            className={listMode ? "list" : "card"}
            onClick={() => onClickCharacter(item.CharacterName)}
          >
            <CharacterCard listMode={listMode} character={item} />
          </List.Item>
        )}
      />
    </div>
  );
};
