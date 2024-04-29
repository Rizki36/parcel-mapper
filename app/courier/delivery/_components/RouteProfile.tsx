import { FaCar, FaMotorcycle } from "react-icons/fa";
import { useDeliveryStore } from "../_providers/DeliveryProviders";
import { Flex, IconButton } from "@chakra-ui/react";

const RouteProfile = () => {
  const { setDistances, setRoute, setStep, routeProfile, setRouteProfile } =
    useDeliveryStore((state) => state);

  const handleRouteProfile = (profile: "driving" | "cycling") => {
    setStep(1);
    setDistances([]);
    setRoute([]);
    setRouteProfile(profile);
  };

  return (
    <Flex
      zIndex={1000}
      position="fixed"
      direction="column"
      gap="10px"
      top="20px"
      right="20px"
    >
      <IconButton
        aria-label=""
        isRound={true}
        icon={<FaMotorcycle />}
        colorScheme={routeProfile === "cycling" ? "teal" : "gray"}
        onClick={() => handleRouteProfile("cycling")}
      />
      <IconButton
        aria-label=""
        isRound={true}
        icon={<FaCar />}
        colorScheme={routeProfile === "driving" ? "teal" : "gray"}
        onClick={() => handleRouteProfile("driving")}
      />
    </Flex>
  );
};

export default RouteProfile;
