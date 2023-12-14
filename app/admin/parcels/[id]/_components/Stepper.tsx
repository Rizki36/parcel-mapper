import React, { useMemo } from "react";
import useParcelQuery from "../../_hooks/useParcelQuery";
import { useParams } from "next/navigation";
import { ParcelStatus } from "@prismaorm/generated/client";

import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper as ChakraStepper,
  Stack,
} from "@chakra-ui/react";

const statuses: {
  title: string;
  status: ParcelStatus;
}[] = [
  {
    title: "Menunggu",
    status: "PENDING",
  },
  {
    title: "Dikirim",
    status: "ON_THE_WAY",
  },
  {
    title: "Terkirim",
    status: "DELIVERED",
  },
];

const steps = [
  { title: "Menunggu", description: "Contact Info" },
  { title: "Dikirim", description: "Date & Time" },
  { title: "Terkirim", description: "Select Rooms" },
];

const Stepper = () => {
  const params = useParams<{
    id: string;
  }>();
  const { data } = useParcelQuery({
    id: params.id,
  });
  const parcel = data?.data?.doc;

  const activeIndex = useMemo(() => {
    return statuses.findIndex((status) => status.status === parcel?.status);
  }, [parcel?.status]);

  return (
    <ChakraStepper colorScheme="teal" w="500px" size="sm" index={activeIndex}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Stack
            // rowGap={0}
            // textAlign="center"
            // position="absolute"
            // w={100}
            // top="25px"
            // left={-37.5}
            // right={0}
            flexShrink="0"
          >
            <StepTitle>{step.title}</StepTitle>
          </Stack>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
};

export default Stepper;
