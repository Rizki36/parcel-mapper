"use client";
import { ENV } from "@/_constants";
import { Box } from "@chakra-ui/react";
import React from "react";
import ReactMapGL from "react-map-gl";
import Drawer from "./_components/Drawer";
import { DeliveryStoreProvider } from "./_providers/DeliveryProviders";

const DeliveryPage = () => {
  return (
    <DeliveryStoreProvider>
      <Box position="relative">
        <ReactMapGL
          reuseMaps
          mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: 112.226479,
            latitude: -7.546839,
            zoom: 14,
          }}
          style={{ height: "100dvh", maxHeight: "100dvh" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        ></ReactMapGL>
        <Drawer />
      </Box>
    </DeliveryStoreProvider>
  );
};

export default DeliveryPage;
