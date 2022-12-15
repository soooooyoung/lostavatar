import { Character } from "../";

export interface Stat {
  Type: string;
  Value: string;
  Tooltip: Array<string>;
}

export interface Tendency {
  Type: string;
  Point: number;
  MaxPoint: number;
}

export interface ArmoryProfile extends Character {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title?: string;
  GuildMemberGrade?: string;
  GuildName?: string;
  Stats: Stat[];
  Tendencies: Tendency[];
}

export interface Equipment {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tootip: string;
}

export interface Avatar {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  IsSet: boolean;
  IsInner: boolean;
  Tooltip: string;
}
