import { QueryKey, UseQueryOptions } from "react-query";
import { ArmoryProfile, Character, ErrorResponse } from "../models";
import { showErrorModal } from "../utils/apiUtils";
import { QueryKeyT, useFetch } from "./reactQuery";

/**
 * Fetch
 */
export const useFetchArmoryProfile = (
  characterName?: string,
  config?: UseQueryOptions<ArmoryProfile, Error, ArmoryProfile, QueryKeyT>
) => {
  return useFetch<ArmoryProfile>(
    `armories/characters/${characterName}/profiles`,
    {},
    {
      ...config,
      enabled: false,
      onError: (e) => {
        showErrorModal(e);
      },
      onSuccess: (data) => {
        if (Object.keys(data).find((item) => item === "Message")) {
          //TODO Process ERROR
          throw new Error();
        }
        return data as ArmoryProfile;
      },
    }
  );
};
