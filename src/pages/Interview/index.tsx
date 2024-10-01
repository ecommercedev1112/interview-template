import React from "react";
import { Steps } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Components
import Overview from "./components/Overview";
import Impression from "./components/Impression";
import Feedback from "./components/Feedback";

const Interview = () => {
  const { step } = useSelector((state: RootState) => state.app);

  const currentStepElement = React.useMemo(() => {
    if (step === 0) return <Overview />;
    else if (step === 1) return <Impression />;
    else if (step === 2) return <Feedback />;
  }, [step]);

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
      {currentStepElement}
    </React.Fragment>
  );
};

export default Interview;
