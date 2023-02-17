import { UseQueryOptions } from "react-query";
import { NoticeList, Event } from "../models";
import { showErrorModal } from "../utils/apiUtils";
import { QueryKeyT, useFetch } from "./reactQuery";

/**
 * Fetch
 */
export const useFetchNotices = (
  type: NoticeList["Type"],
  config?: UseQueryOptions<NoticeList[], Error, NoticeList[], QueryKeyT>
) => {
  return useFetch<NoticeList[]>(
    "news/notices",
    { type, searchText: undefined },
    {
      ...config,

      onError: (e) => {
        showErrorModal(e);
      },
      onSuccess: (data) => {
        return data as NoticeList[];
      },
    }
  );
};

export const useFetchEvents = (
  config?: UseQueryOptions<Event[], Error, Event[], QueryKeyT>
) => {
  return useFetch<Event[]>(
    "news/events",
    {},
    {
      ...config,
      onError: (e) => {
        showErrorModal(e);
      },
      onSuccess: (data) => {
        return data as Event[];
      },
    }
  );
};
