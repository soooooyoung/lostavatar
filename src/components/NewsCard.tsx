import { Event } from "../models";

interface Props {
  news: Event;
}

export const NewsCard = ({ news }: Props) => {
  return (
    <div className="card">
      <a href={news.Link} target="_blank" rel="noreferrer">
        <img src={news.Thumbnail} alt={news.Title} />{" "}
      </a>
    </div>
  );
};
