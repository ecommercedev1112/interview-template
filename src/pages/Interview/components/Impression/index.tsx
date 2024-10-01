import React from "react";
import { Typography, Divider, Row, Col, Button, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { IMPRESSIONS } from "@/constants";
import { IImpression, IImpressionRate } from "@/types";
import { setStep } from "@/store/slices/AppSlice";

// Components
import ImpressionRate from "@/components/Interview/ImpressionRate";

const Impression = () => {
  const dispatch = useDispatch();
  const { impressions } = useSelector((state: RootState) => state.app);

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
    if (average >= 0 && average < 3) return `Negative (${average.toFixed(2)})`;
    else if (average >= 3 && average < 4)
      return `Neutral (${average.toFixed(2)})`;
    else return `Positive (${average.toFixed(2)})`;
  }, [impressions]);

  return (
    <React.Fragment>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Interview Impressions
      </Typography.Title>

      <Divider />

      <Typography.Title level={5} style={{ textAlign: "center" }}>
        Overral Impression:{" "}
        <span style={{ fontWeight: "bold", color: "red" }}>
          {overalImpression}
        </span>
      </Typography.Title>
      <Row
        style={{
          margin: "0px auto",
          maxWidth: 500,
          width: "100%",
        }}
      >
        {IMPRESSIONS.map((_: string, index: number) => (
          <Col key={index} span={24} style={{ padding: 10 }}>
            <ImpressionRate index={index} />
          </Col>
        ))}
      </Row>

      <Flex justify="center">
        <Button
          type="primary"
          onClick={() => {
            dispatch(setStep(2));
          }}
        >
          Next
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default Impression;
