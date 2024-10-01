import { Layout } from "antd";
import AppHeader from "./Header";

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ padding: 0 }}>
      <AppHeader />
      <Content style={{ backgroundColor: "white" }}>
        <div
          style={{
            maxWidth: 800,
            width: "100%",
            margin: "0px auto",
            padding: 20,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
