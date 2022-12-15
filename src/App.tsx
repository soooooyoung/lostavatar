import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./components/app/AppHeader";
import { AppFooter } from "./components/app/AppFooter";
import { Router } from "./components/app/Router";
import "./App.scss";

function App() {
  return (
    <Layout className="app">
      <AppHeader />
      <Content className="content">
        <Router />
        {/* <RouterProvider router={router} /> */}
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
