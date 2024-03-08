import { useToast } from "@chakra-ui/react";
import { useDeliveryStore } from "../_providers/DeliveryProviders";

const useStepWithValidation = () => {
  const toast = useToast();
  const {
    step,
    route,
    setStep: _setStep,
    distances,
  } = useDeliveryStore((state) => state);

  const setStep = (step: number) => {
    if (step > 1 && !distances.length) {
      toast({
        title: `Dapatkan jarak terlebih dahulu di step 1 !`,
        status: "warning",
        isClosable: true,
        size: "sm",
      });
      return;
    }

    if (step > 2 && !route.length) {
      toast({
        title: `Dapatkan rute terlebih dahulu di step 2 !`,
        status: "warning",
        isClosable: true,
        size: "sm",
      });
      return;
    }

    _setStep(step);
  };

  return { step, setStep };
};

export default useStepWithValidation;
