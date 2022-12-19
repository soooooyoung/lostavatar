import { useSelector } from "react-redux";
import { ArmoryProfile, Tendency } from "../../models";
import { selectTextColor, selectTheme } from "../app/appSlice";
import { CharacterImage } from "./CharacterImage";

interface Props {
  className?: string;
  data?: ArmoryProfile;
}

export const ChracterBaseProfile = ({ className, data }: Props) => {
  const color = useSelector(selectTheme);
  const textColor = useSelector(selectTextColor);
  const titleStyle = {
    background: `linear-gradient(
      270deg,
     ${color === "#ffffff" ? "#000000" : color}00 0%,
     ${color === "#ffffff" ? "#000000" : color}0C 12%,
     ${color === "#ffffff" ? "#000000" : color}24 26%,
     ${color === "#ffffff" ? "#000000" : color}CC 57%,
     ${color === "#ffffff" ? "#000000" : color}FF 100%
    )`,
    color: color === "#ffffff" ? "#ffffff" : textColor,
  };
  return (
    <div className={className}>
      <div className="basic-info">
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            캐릭터
          </span>
          {data?.CharacterName}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            서버
          </span>
          <span>{data?.ServerName}</span>
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            클래스
          </span>
          {data?.CharacterClassName}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            전투 LV
          </span>
          {data?.CharacterLevel}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            아이템 LV
          </span>
          {data?.ItemAvgLevel}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            원정대 LV
          </span>
          {data?.ExpeditionLevel}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            PVP 등급
          </span>
          {data?.PvpGradeName}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            영지
          </span>
          Lv.{data?.TownLevel} {data?.TownName}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            길드{" "}
          </span>
          {data?.GuildName}
        </div>
        <div className="basic-row">
          <span className="title" style={titleStyle}>
            길드 직위
          </span>
          {data?.GuildMemberGrade}
        </div>
      </div>
      <div className="imageFrame">
        <CharacterImage characterUrl={data?.CharacterImage} />
      </div>
    </div>
  );
};
