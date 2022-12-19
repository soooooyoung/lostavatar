import { ArmoryProfile, Tendency } from "../../models";
import { CharacterImage } from "./CharacterImage";

interface Props {
  className?: string;
  data?: ArmoryProfile;
}

export const ChracterBaseProfile = ({ className, data }: Props) => {
  return (
    <div className={className}>
      <div className="basic-info">
        <div className="basic-row">
          <span className="title">캐릭터</span>
          {data?.CharacterName}
        </div>
        <div className="basic-row">
          <span className="title">서버</span>
          <span>{data?.ServerName}</span>
        </div>
        <div className="basic-row">
          <span className="title">클래스</span>
          {data?.CharacterClassName}
        </div>
        <div className="basic-row">
          <span className="title">전투 LV</span>
          {data?.CharacterLevel}
        </div>
        <div className="basic-row">
          <span className="title">아이템 LV</span>
          {data?.ItemAvgLevel}
        </div>
        <div className="basic-row">
          <span className="title">원정대 LV</span>
          {data?.ExpeditionLevel}
        </div>
        <div className="basic-row">
          <span className="title">PVP 등급</span>
          {data?.PvpGradeName}
        </div>
        <div className="basic-row">
          <span className="title">영지</span>
          Lv.{data?.TownLevel} {data?.TownName}
        </div>
        <div className="basic-row">
          <span className="title">길드 </span>
          {data?.GuildName}
        </div>
        <div className="basic-row">
          <span className="title">길드 직위</span>
          {data?.GuildMemberGrade}
        </div>
        {/* <span>레벨 {data?.CharacterLevel}</span>
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
        </span> */}
      </div>
      <div className="imageFrame">
        <CharacterImage characterUrl={data?.CharacterImage} />
      </div>
    </div>
  );
};
