import React from "react";
import Step1 from "./Step1";
import { useDeliveryStore } from "../../_providers/DeliveryProviders";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Steps = () => {
  const { step } = useDeliveryStore((state) => state);

  return (
    <>
      {step === 1 ? <Step1 /> : null}
      {step === 2 ? <Step2 /> : null}
      {step === 3 ? <Step3 /> : null}
    </>
  );
};

export default Steps;
