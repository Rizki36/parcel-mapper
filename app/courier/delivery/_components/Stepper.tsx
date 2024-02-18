import { Flex, IconButton } from "@chakra-ui/react";
import { useDeliveryStore } from "../_providers/DeliveryProviders";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();
  const { step, setStep, distances } = useDeliveryStore((state) => state);

  const setStepWithValidation = (step: number) => {
    if (step > 1 && !distances.length) {
      toast({
        title: `Dapatkan jarak terlebih dahulu !`,
        status: "warning",
        isClosable: true,
      });
      return;
    }

    setStep(step);
  };

  return (
    <Flex justify="space-between">
      <StepperItem
        step={1}
        active={step >= 1}
        onClick={() => setStepWithValidation(1)}
      />
      <StepperItem
        step={2}
        active={step >= 2}
        onClick={() => setStepWithValidation(2)}
      />
      <StepperItem
        step={3}
        active={step >= 3}
        onClick={() => setStepWithValidation(3)}
      />
    </Flex>
  );
};

export default Stepper;
