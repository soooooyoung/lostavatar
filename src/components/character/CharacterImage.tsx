import artist from "../../assets/art/characters/artist_02.png";
import sorceress from "../../assets/art/characters/sorceress_01.png";
import summoner from "../../assets/art/characters/summoner_01.png";
import bard from "../../assets/art/characters/bard_01.png";
import magician from "../../assets/art/characters/magician.png";
import arcana from "../../assets/art/characters/arcana_01.png";
import fighter from "../../assets/art/characters/fighter.png";
import glavier from "../../assets/art/characters/glavier.png";
import demonic from "../../assets/art/characters/demonic_02.png";
import blade from "../../assets/art/characters/blade.png";
import reaper from "../../assets/art/characters/reaper_03.png";
import gunslinger from "../../assets/art/characters/gunslinger_02.png";
import striker from "../../assets/art/characters/striker.png";
import devilhunter from "../../assets/art/characters/devilhunter.png";
import hawkeye from "../../assets/art/characters/hawkeye.png";
import scouter from "../../assets/art/characters/scouter.png";
import hunter from "../../assets/art/characters/hunter.png";
import blaster from "../../assets/art/characters/blaster.png";
import holyknight from "../../assets/art/characters/holyknight.png";
import warrior from "../../assets/art/characters/warrior.png";
import filler from "../../assets/art/characters/filler.png";
import demo from "../../assets/art/characters/demonic.png";
interface Props {
  characterClassName?: string;
  characterUrl?: string;
}

export const CharacterImage = ({ characterUrl, characterClassName }: Props) => {
  const characterImage: { [key: string]: string } = {
    스페셜리스트: artist,
    기상술사: artist,
    도화가: artist,
    마법사: magician,
    소서리스: sorceress,
    서머너: summoner,
    바드: bard,
    아르카나: arcana,
    "무도가(여)": fighter,
    "무도가(남)": striker,
    창술사: glavier,
    기공사: fighter,
    인파이터: fighter,
    배틀마스터: fighter,
    암살자: demo,
    리퍼: reaper,
    블레이드: blade,
    데모닉: demonic,
    건슬링어: gunslinger,
    스트라이커: striker,
    데빌헌터: devilhunter,
    "헌터(여)": gunslinger,
    "헌터(남)": hunter,
    호크아이: hawkeye,
    스카우터: scouter,
    블래스터: blaster,
    홀리나이트: holyknight,
    전사: warrior,
    버서커: warrior,
    디스트로이어: warrior,
    워로드: warrior,
    default: filler,
  };
  return (
    <img
      src={characterUrl ?? characterImage[characterClassName ?? "default"]}
      alt="character_img"
    />
  );
};
