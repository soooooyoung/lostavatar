import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppHeader } from "./components/app/AppHeader";
import { AppFooter } from "./components/app/AppFooter";
import { Router } from "./components/app/Router";
import "./App.scss";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "./components/app/appSlice";

function App() {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <Layout className="app">
      <AppHeader />
      <Content
        className="content"
        style={{
          backgroundColor: currentTheme,
        }}
      >
        <Router />
      </Content>
      <AppFooter
        style={{
          backgroundColor: currentTheme,
          color: currentTheme === "#ffffff" ? "black" : "white",
        }}
      />
    </Layout>
  );
}

export default App;
