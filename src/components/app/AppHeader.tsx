import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { SearchInput } from "../SearchInput";
import rabbit from "../../assets/art/rabbit_a.jpg";
import demo from "../../assets/art/characters/demonic.png";

export const AppHeader = () => {
  const navigate = useNavigate();
  const onClickBunny = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <Header className="header">
        <img onClick={onClickBunny} className="rabbit" src={demo} alt="" />
        <SearchInput className="search" />
      </Header>
      <Header className="header-float"></Header>
    </Fragment>
  );
};
