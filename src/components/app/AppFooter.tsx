import "../../style/footer.scss";

interface Props {
  style: React.CSSProperties;
}

export const AppFooter = ({ style }: Props) => {
  return (
    <div className="footer" style={style}>
      <h1>LOSTAVATAR.GG</h1>
      <span>
        © Copyright 2023 LOSTAVATAR.GG. LOSTAVATAR.GG isn’t endorsed by
        Smilegate and doesn’t reflect the views or opinions of Smilegate or
        anyone officially involved in producing or managing Lost Ark. Lost Ark
        and Smilegate are trademarks or registered trademarks of Smilegate
        Entertainment, Inc. Lost Ark © Smilegate Entertainment, Inc.
      </span>
    </div>
  );
};
