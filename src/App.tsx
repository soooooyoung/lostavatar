import React from "react";

import "./App.scss";
import { HomePage } from "./pages";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <Layout className="app">
      <AppHeader />
      <Content className="content">
        <HomePage />
      </Content>
    </Layout>
  );
}

export default App;
