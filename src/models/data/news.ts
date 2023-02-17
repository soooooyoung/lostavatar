export interface NoticeList {
  Title: string;
  Date: string;
  Link: string;
  Type: "공지" | "점검" | "상점" | "이벤트";
}

export interface Event {
  Title: string;
  Thumbnail: string;
  Link: string;
  StartDate: string;
  EndDate: string;
  RewardDate: string;
}
