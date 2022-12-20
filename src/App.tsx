import { Layout, ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./components/app/AppHeader";
import { AppFooter } from "./components/app/AppFooter";
import { Router } from "./components/app/Router";
import "./App.scss";
import { useSelector } from "react-redux";
import { selectTextColor, selectTheme } from "./components/app/appSlice";

function App() {
  const currentTheme = useSelector(selectTheme);
  return (
    <ConfigProvider
      theme={{
        // TODO: SET UP PRIMARY RELATIONS
        token: {
          colorPrimary: currentTheme === "#000000" ? "#ff5289" : "#345370",
        },
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: currentTheme,
        }}
      >
        <Layout
          className="app"
          style={{
            backgroundColor: currentTheme,
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
        </Layout>{" "}
      </div>
    </ConfigProvider>
  );
}

export default App;
