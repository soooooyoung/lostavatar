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
      retry: false,
      onError: (e) => {
        showErrorModal(e);
      },
      onSuccess: (data) => {
        //TODO Process ERROR

        return data as ArmoryProfile;
      },
    }
  );
};
