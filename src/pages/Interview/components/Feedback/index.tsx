import React from "react";
import {
  Typography,
  Divider,
  Card,
  Table,
  Rate,
  Input,
  Flex,
  Button,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setFeedbacks, setStep } from "@/store/slices/AppSlice";
import { IFeedback } from "@/types";

const Feedback = () => {
  const dispatch = useDispatch();
  const { interviewOverview, feedbacks } = useSelector(
    (state: RootState) => state.app
  );

  const handleRateChange = (value: number, index: number) => {
    dispatch(
      setFeedbacks(
        feedbacks.map((feedback: IFeedback, ind: number) => {
          if (ind === index) {
            return {
              ...feedback,
              mark: value,
            };
          } else return feedback;
        })
      )
    );
  };

  const handleCommentChange = (value: string, index: number) => {
    dispatch(
      setFeedbacks(
        feedbacks.map((feedback: IFeedback, ind: number) => {
          if (ind === index) {
            return {
              ...feedback,
              comment: value,
            };
          } else return feedback;
        })
      )
    );
  };

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Rate",
      dataIndex: "rate",
      render: (value: number, _: any, index: number) => (
        <Rate
          value={value}
          allowHalf
          style={{ fontSize: 15 }}
          onChange={(val: number) => handleRateChange(val, index)}
        />
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      render: (value: string, _: any, index: number) => (
        <Input.TextArea
          onChange={(event: any) =>
            handleCommentChange(event.target.value, index)
          }
        >
          {value}
        </Input.TextArea>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Feedback for {interviewOverview?.role}
      </Typography.Title>

      <Divider />

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

      <Flex justify="center" style={{ marginTop: 10 }}>
        <Button
          type="primary"
          onClick={() => {
            dispatch(setStep(3));
          }}
        >
          Submit
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default Feedback;
