import React from "react";
import { Character } from "../models";

export const getServerListFromData = (data?: Character[]): string[] => {
  if (!data || data.length < 1) {
    return [];
  }

  return data.reduce((prev, char) => {
    if (prev.find((item) => item === char.ServerName)) {
      return prev;
    }
    prev.push(char.ServerName);
    return prev;
  }, [] as string[]);
};

export const getDataListFromServer = (data: Character[], server?: string) => {
  if (!server || server === "all") return data;
  return data.filter((item) => item.ServerName === server);
};

export const getCharacterFromDataList = (
  data?: Character[],
  searchName?: string
) =>
  data?.find((item) => item.CharacterName.toLocaleLowerCase() === searchName);
