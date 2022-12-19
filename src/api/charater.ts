import { QueryKey, UseQueryOptions } from "react-query";
import { Character, ErrorResponse } from "../models";
import { showErrorModal } from "../utils/apiUtils";
import { QueryKeyT, useFetch } from "./reactQuery";

/**
 * Fetch
 */
export const useFetchCharacters = (
  characterName?: string,
  config?: UseQueryOptions<Character[], Error, Character[], QueryKeyT>
) => {
  return useFetch<Character[]>(
    `characters/${characterName}/siblings`,
    {},
    {
      ...config,
      enabled: false,
      retry: false,
      onError: (e) => {
        showErrorModal(e);
      },
      onSuccess: (data) => {
        return data as Character[];
      },
    }
  );
};
