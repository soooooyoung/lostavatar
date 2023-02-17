import { Spin } from "antd";
import { useFetchEvents } from "../api/news";
import { NewsCard } from "../components/NewsCard";

export const HomePage = () => {
  const { data: events, isLoading: isLoadingEvents } = useFetchEvents();

  return (
    <Spin spinning={isLoadingEvents}>
      <div className="list-horizontal">
        {events?.map((item) => (
          <NewsCard news={item} />
        ))}
      </div>
    </Spin>
  );
};
