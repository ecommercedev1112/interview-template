import React from "react";
import { Steps } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Components
import Overview from "./components/Overview";
import Impression from "./components/Impression";
import Feedback from "./components/Feedback";

const Interview = () => {
  const contents = [Overview, Impression, Feedback];
  const { step } = useSelector((state: RootState) => state.app);

  return (
    <React.Fragment>
      <Steps
        current={step}
        items={[
          {
            title: "Overview",
          },
          {
            title: "Impressions",
          },
          {
            title: "Feedback",
          },
        ]}
      />
      {contents[step]()}
    </React.Fragment>
  );
};

export default Interview;
