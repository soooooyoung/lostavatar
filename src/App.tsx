import { Layout, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./components/app/AppHeader";
import { AppFooter } from "./components/app/AppFooter";
import { Router } from "./components/app/Router";
import { selectTextColor, selectTheme } from "./components/app/appSlice";

function App() {
  const currentTheme = useSelector(selectTheme);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: currentTheme === "#000000" ? "#ff5289" : "#345370",
        },
      }}
    >
      <Layout
        className="wrapper"
        style={{
          backgroundColor: currentTheme,
        }}
      >
        <AppHeader />
        <Content className="app">
          <Router />
        </Content>
        <AppFooter
          style={{
            color: useSelector(selectTextColor),
          }}
        />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
