import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./components/app/AppHeader";
import { AppFooter } from "./components/app/AppFooter";
import { Router } from "./components/app/Router";
import "./App.scss";
import { useSelector } from "react-redux";
import { selectTextColor, selectTheme } from "./components/app/appSlice";

function App() {
  return (
    <Layout
      className="app"
      style={{
        backgroundColor: useSelector(selectTheme),
      }}
    >
      <AppHeader />
      <Content className="app-content">
        <Router />
      </Content>
      <AppFooter
        style={{
          color: useSelector(selectTextColor),
        }}
      />
    </Layout>
  );
}

export default App;
