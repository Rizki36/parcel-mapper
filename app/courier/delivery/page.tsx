"use client";
import { ENV } from "@/_constants";
import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef } from "react";
import ReactMapGL, { Layer, MapRef, Marker, Source } from "react-map-gl";
import Drawer from "./_components/Drawer";
import {
  DeliveryStoreProvider,
  useDeliveryStore,
} from "./_providers/DeliveryProviders";
import GeoJSON from "geojson";
import { generateGroupedRoute, indexToAlphabet } from "@/_utils";
import RouteProfile from "./_components/RouteProfile";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import useNodesQuery from "./_hooks/useNodesQuery";

const DeliveryPage = () => {
  return (
    <DeliveryStoreProvider>
      <Content />
    </DeliveryStoreProvider>
  );
};

const Content = () => {
  const mapRef = useRef<MapRef>(null);
  const { step, directions, route, nodes, setNodes } = useDeliveryStore(
    (state) => state
  );
  const { data: nodesData } = useNodesQuery();

  useEffect(() => {
    if (nodes.length) return;
    nodesData && setNodes(nodesData);
  }, [nodesData, nodes]);

  const nodesMarker = useMemo(() => {
    return nodes?.map((item, index) => {
      const routeIndex = route.findIndex(
        (routeItem) => routeItem.id === item.id
      );
      const currentRoute = route[routeIndex];

      const getText = () => {
        if (step === 1) return indexToAlphabet(index);

        return routeIndex > -1 ? routeIndex : indexToAlphabet(index);
      };

      return (
        <Marker
          key={item.id}
          longitude={item.lng as number}
          latitude={item.lat as number}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
          }}
        >
          {index === 0 ? (
            <Flex
              alignItems="center"
              justifyContent="center"
              color="white"
              w="20px"
              h="20px"
              bg="red"
            ></Flex>
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              color="white"
              w="20px"
              h="20px"
              rounded="100%"
              bg={currentRoute?.visited ? "green" : "red"}
            >
              {getText()}
            </Flex>
          )}
        </Marker>
      );
    });
  }, [nodes, route, step]);

  const directionLine = useMemo(() => {
    if (!route.length) return;

    const ids = route.map((item) => item.id);
    const indexes = ids.map((id) => nodes.findIndex((node) => node.id === id));

    const groupedRoute = generateGroupedRoute(indexes);
    const directionsKeys = groupedRoute.map((item) => {
      const key =
        item[0] < item[1] ? `${item[0]}-${item[1]}` : `${item[1]}-${item[0]}`;
      return key;
    });
    const dirs = directionsKeys.map((key) => directions[key]);

    const sources = dirs.map((item, index) => {
      const geojson: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: item.routes[0].geometry.coordinates,
            },
            properties: {},
          },
        ],
      };

      return (
        <Source key={index} type="geojson" data={geojson}>
          <Layer
            type="line"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "#c4e6ff",
              "line-width": 3,
              "line-opacity": 1,
            }}
          />
        </Source>
      );
    });

    return sources;
  }, [directions, route, nodes]);

  return (
    <Box position="relative">
      <Button zIndex={1000} position="absolute" top="20px" left="20px">
        <Link href="/courier">
          <FaAngleLeft />
        </Link>
      </Button>
      <RouteProfile />
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
        {directionLine}
        {nodesMarker}
      </ReactMapGL>
      <Drawer />
    </Box>
  );
};

export default DeliveryPage;
