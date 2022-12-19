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
      <div className="imageFrame">
        <CharacterImage characterUrl={data?.CharacterImage} />
      </div>
    </div>
  );
};
