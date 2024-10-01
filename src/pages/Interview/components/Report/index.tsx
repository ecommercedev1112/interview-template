import React from "react";
import { Typography, Divider, Flex, Rate, Card, Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IImpression, IImpressionRate } from "@/types";

const Report = () => {
  const { interviewOverview, feedbacks, impressions } = useSelector(
    (state: RootState) => state.app
  );

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Rate",
      dataIndex: "mark",
      render: (value: number) => (
        <Rate value={value} allowHalf style={{ fontSize: 15 }} disabled />
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
  ];

  const impressionColumns = [
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Rate",
      dataIndex: "impressions",
      render: (value: Array<IImpressionRate>) => (
        <Rate
          style={{ fontSize: 18 }}
          allowHalf
          disabled
          value={averageScore(value)}
        />
      ),
    },
    {
      title: "Average Score",
      dataIndex: "impressions",
      render: (value: Array<IImpressionRate>) => averageScore(value).toFixed(2),
    },
  ];

  const overalImpression = React.useMemo(() => {
    const average =
      (impressions.reduce(
        (sum: number, impression: IImpression) =>
          sum +
          (impression.impressions.reduce(
            (s: number, rate: IImpressionRate) => s + rate.mark,
            0
          ) *
            1.0) /
            impression.impressions.length,
        0
      ) *
        1.0) /
      impressions.length;
    if (average >= 0 && average < 3) return `Negative`;
    else if (average >= 3 && average < 4) return `Neutral`;
    else return `Positive`;
  }, [impressions]);

  const averageScore = (impressions: Array<IImpressionRate>) => {
    if (impressions.length === 0) return 0;
    else
      return (
        (impressions.reduce(
          (sum: number, current: IImpressionRate) => sum + current.mark,
          0
        ) *
          1.0) /
        impressions.length
      );
  };

  return (
    <React.Fragment>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Interview Report
      </Typography.Title>

      <Divider />

      <Card style={{ padding: 0, marginBottom: 10 }}>
        <Flex justify="space-between" wrap="wrap">
          <Typography.Title level={5} style={{ margin: 0 }}>
            Candidate name: {interviewOverview?.candidate}
          </Typography.Title>
          <Typography.Title level={5} style={{ margin: 0 }}>
            Role: {interviewOverview?.role}
          </Typography.Title>
          <Typography.Title level={5} style={{ margin: 0 }}>
            Interviewer: {interviewOverview?.interviewer}
          </Typography.Title>
          <Typography.Title level={5} style={{ margin: 0 }}>
            Date: {interviewOverview?.date}
          </Typography.Title>
        </Flex>
      </Card>

      <Card
        style={{ marginBottom: 10 }}
        title={
          <Typography.Title level={4} style={{ margin: 0 }}>
            Overal Impression: {overalImpression}
          </Typography.Title>
        }
      >
        <Table
          size="small"
          rowKey={"category"}
          pagination={false}
          dataSource={impressions}
          columns={impressionColumns}
        />
      </Card>

      <Card>
        <Table
          bordered
          size="small"
          rowKey={"category"}
          pagination={false}
          dataSource={feedbacks}
          columns={columns}
        />
      </Card>
    </React.Fragment>
  );
};

export default Report;
