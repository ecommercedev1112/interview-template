import { Card, Layout, Typography } from "antd";

const AppHeader = () => {
  return (
    <Layout.Header
      style={{ backgroundColor: "white", padding: 0, marginBottom: 10 }}
    >
      <Card style={{ margin: 0 }}>
        <Typography.Title level={3} style={{ margin: 0, textAlign: "center" }}>
          Interview Record Application
        </Typography.Title>
      </Card>
    </Layout.Header>
  );
};

export default AppHeader;
