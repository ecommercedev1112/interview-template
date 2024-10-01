import React from "react";
import { Card, Divider, Flex, Rate, Typography, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { IImpression, IImpressionRate } from "@/types";
import { setImressions } from "@/store/slices/AppSlice";

interface ImporesionReateProps {
  index: number;
}

const ImpressionRate: React.FC<ImporesionReateProps> = ({ index }) => {
  const dispatch = useDispatch();
  const { impressions } = useSelector((state: RootState) => state.app);

  const average = React.useMemo(() => {
    if (impressions[index]) {
      return (
        (impressions[index].impressions.reduce(
          (sum: number, current: IImpressionRate) => sum + current.mark,
          0
        ) *
          1.0) /
        impressions[index].impressions.length
      );
    } else return 0;
  }, [impressions, index]);

  const handleRateChange = (value: number, ind: number) => {
    const tempImpression = { ...impressions[index] };
    tempImpression.impressions = tempImpression.impressions.map(
      (rate: IImpressionRate, i) =>
        i === ind ? { ...rate, mark: value } : rate
    );
    dispatch(
      setImressions(
        impressions.map((imp: IImpression, inde: number) =>
          inde === index ? tempImpression : imp
        )
      )
    );
  };

  const handleCommentChange = (event: any) => {
    const tempImpression = { ...impressions[index] };
    tempImpression.comment = event.target.value;
    dispatch(
      setImressions(
        impressions.map((imp: IImpression, inde: number) =>
          inde === index ? tempImpression : imp
        )
      )
    );
  };

  return impressions[index] ? (
    <Card
      title={
        <Typography.Title level={5} style={{ margin: 0 }}>
          {impressions[index].category} (
          <span style={{ fontWeight: "bold", color: "red" }}>
            {average.toFixed(1)}
          </span>
          )
        </Typography.Title>
      }
      style={{ width: "100%" }}
    >
      {impressions[index].impressions.map(
        (impression: IImpressionRate, ind: number) => (
          <div key={ind}>
            <Flex align="center" justify="space-between">
              <Typography.Title
                level={5}
                style={{ margin: 0, width: "calc(100% - 75px)" }}
              >
                {impression.title}
              </Typography.Title>
              <Rate
                allowHalf
                onChange={(value: number) => handleRateChange(value, ind)}
                value={impression.mark}
                style={{ fontSize: 15, width: 75 }}
              />
            </Flex>
            <Divider style={{ margin: 0 }} />
          </div>
        )
      )}
      <Input.TextArea onChange={handleCommentChange} style={{ marginTop: 10 }} placeholder="Please input comment...">
        {impressions[index].comment}
      </Input.TextArea>
    </Card>
  ) : null;
};

export default ImpressionRate;
