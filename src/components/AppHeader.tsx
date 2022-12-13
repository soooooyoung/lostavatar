import { Header } from "antd/es/layout/layout";
import { Fragment } from "react";
import rabbit from "../assets/art/rabbit_a.jpg";
import { SearchInput } from "./SearchInput";

export const AppHeader = () => {
  return (
    <Fragment>
      <Header className="header">
        <img className="rabbit" src={rabbit} alt="" />
        <SearchInput className="search" />
      </Header>
      <Header className="header-float"></Header>
    </Fragment>
  );
};
