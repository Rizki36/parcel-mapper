"use client";
import React, { FC, useCallback } from "react";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ENV } from "@/_constants";
import { MarkerLocation } from "../page";

const Map: FC<{
  location: MarkerLocation;
  setLocation: (_: MarkerLocation) => void;
}> = ({ location, setLocation }) => {
  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    setLocation({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onClick = useCallback((event: MapLayerMouseEvent) => {
    setLocation({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  return (
    <>
      <Flex
        px={8}
        py={6}
        borderBottom={1}
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
        bg="white"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="sm" fontWeight="semibold">
          Lokasi pengiriman
        </Heading>
        <div>
          <Flex alignItems="center" columnGap={2}>
            <Box fontSize="sm" color="gray.600">
              Geser marker / klik map untuk mengubah koordinat
            </Box>
            <Button
              colorScheme="gray"
              variant="outline"
              size="sm"
              onClick={() => {
                setLocation({
                  latitude: null,
                  longitude: null,
                });
              }}
            >
              Hapus
            </Button>
          </Flex>
        </div>
      </Flex>
      <Box pos="relative">
        <ReactMapGL
          reuseMaps
          onClick={onClick}
          mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: 112.226479,
            latitude: -7.546839,
            zoom: 14,
          }}
          style={{ height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {location.longitude && location.latitude && (
            <Marker
              longitude={location.longitude}
              latitude={location.latitude}
              anchor="bottom"
              draggable={true}
              onDrag={onMarkerDrag}
            >
              <img src="/marker.png" />
            </Marker>
          )}
          <NavigationControl />
        </ReactMapGL>

        {location.longitude && location.latitude && (
          <Box pos="absolute" top={3} left={3} bg="white" rounded="lg">
            <Box px={4} py={2} fontSize="sm" color="gray.600">
              {location.latitude}, {location.longitude}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Map;
