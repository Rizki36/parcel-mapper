"use client";
import { ENV } from "@/_constants";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef } from "react";
import ReactMapGL, { MapRef, Marker } from "react-map-gl";
import Drawer from "./_components/Drawer";
import {
  DeliveryStoreProvider,
  useDeliveryStore,
} from "./_providers/DeliveryProviders";
import { IoLocation } from "react-icons/io5";

const DeliveryPage = () => {
  return (
    <DeliveryStoreProvider>
      <Content />
    </DeliveryStoreProvider>
  );
};

const Content = () => {
  const mapRef = useRef<MapRef>(null);
  const { nodes, setNodes } = useDeliveryStore((state) => state);

  const availableNodes = useMemo(() => {
    return nodes?.filter((item) => item.lat && item.lng) || [];
  }, [nodes]);

  useEffect(() => {
    setNodes([
      {
        id: 1,
        lat: -7.551051361760125,
        lng: 112.22348813042969,
        type: "branch",
      },
      {
        id: 2,
        lat: -7.552858058777354,
        lng: 112.22731316511666,
        type: "customer",
      },
      {
        id: 3,
        lat: -7.555538060549121,
        lng: 112.22803409207916,
        type: "customer",
      },
      {
        id: 4,
        lat: -7.557300309104902,
        lng: 112.23171116901788,
        type: "customer",
      },
      {
        id: 5,
        lat: -7.5484007257025825,
        lng: 112.2284502042292,
        type: "customer",
      },
      {
        id: 6,
        lat: -7.550437801811475,
        lng: 112.23595850239968,
        type: "customer",
      },
    ]);
  }, []);

  const nodesMarker = useMemo(() => {
    return availableNodes?.map((item) => (
      <Marker
        key={item.id}
        longitude={item.lng as number}
        latitude={item.lat as number}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
        }}
      >
        <Box color="red">
          <IoLocation
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </Box>
      </Marker>
    ));
    // map
  }, [availableNodes]);

  // useEffect(() => {
  //   if (!mapRef.current || !availableNodes.length) return;

  //   const feature = featureCollection(
  //     availableNodes.map((item) =>
  //       point([item.lng, item.lat], {
  //         id: item.id,
  //       })
  //     )
  //   );

  //   const [minLng, minLat, maxLng, maxLat] = bbox(feature);

  //   mapRef.current?.fitBounds(
  //     [
  //       [minLng, minLat],
  //       [maxLng, maxLat],
  //     ],
  //     { duration: 1000, zoom: 14 }
  //   );
  // }, [availableNodes, mapRef]);

  return (
    <Box position="relative">
      <ReactMapGL
        ref={mapRef}
        reuseMaps
        mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 112.226479,
          latitude: -7.546839,
          zoom: 14,
        }}
        style={{ height: "100dvh", maxHeight: "100dvh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {nodesMarker}
      </ReactMapGL>
      <Drawer />
    </Box>
  );
};

export default DeliveryPage;
