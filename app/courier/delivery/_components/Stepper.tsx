import { Flex, IconButton } from "@chakra-ui/react";
import { useDeliveryStore } from "../_providers/DeliveryProviders";

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
  const { step, setStep } = useDeliveryStore((state) => state);

  return (
    <Flex justify="space-between">
      <StepperItem step={1} active={step >= 1} onClick={() => setStep(1)} />
      <StepperItem step={2} active={step >= 2} onClick={() => setStep(2)} />
      <StepperItem step={3} active={step >= 3} onClick={() => setStep(3)} />
    </Flex>
  );
};

export default Stepper;
