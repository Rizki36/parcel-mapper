import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";

const StepperItem = ({
  active,
  onClick,
  step,
}: {
  active: boolean;
  onClick: () => void;
  step: number;
}) => {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme={active ? "teal" : "gray"}
      aria-label="Done"
      fontSize="20px"
      size="sm"
      icon={<>{step}</>}
      onClick={onClick}
    />
  );
};

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Flex justify="space-between">
      <StepperItem
        step={1}
        active={activeStep >= 1}
        onClick={() => setActiveStep(1)}
      />
      <StepperItem
        step={2}
        active={activeStep >= 2}
        onClick={() => setActiveStep(2)}
      />
      <StepperItem
        step={3}
        active={activeStep >= 3}
        onClick={() => setActiveStep(3)}
      />
    </Flex>
  );
};

export default Stepper;
