import React, { FC, useCallback, useState } from "react";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { ENV } from "../../../../_constants";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import DrawControl from "./DrawControl";
import { AreaLocation } from "../page";

type MapProps = {
  areas: AreaLocation[];
  setAreas: (_: AreaLocation[]) => void;
};

const BranchMap: FC<MapProps> = ({ areas, setAreas }) => {
  const [randomId, setRandomId] = useState<string>(crypto.randomUUID());
  const [editCoordinate, setEditCoordinate] = useState(false);

  const [marker, setMarker] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });

  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      if (editCoordinate) {
        setMarker({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
        });
      }
    },
    [editCoordinate]
  );

  const onChangeArea = useCallback(
    (e: { type: string; features: Feature<Geometry, GeoJsonProperties>[] }) => {
      const geometry = e.features[0].geometry;
      if (geometry.type !== "Polygon") return;

      const getArea = () => {
        if (e.type === "draw.delete") return [];

        return geometry.coordinates[0].map((coordinate) => {
          return {
            longitude: coordinate[0],
            latitude: coordinate[1],
          };
        });
      };

      const area = getArea();

      setAreas(area);
      setRandomId(crypto.randomUUID());
    },
    []
  );

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
          Lokasi cabang
        </Heading>
        <div>
          {editCoordinate ? (
            <Flex alignItems="center" columnGap={2}>
              <Box fontSize="sm" color="gray.600">
                Geser marker / klik map untuk mengubah koordinat
              </Box>
              <Button
                colorScheme="gray"
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditCoordinate(false);
                }}
              >
                Kunci koordinat
              </Button>
            </Flex>
          ) : (
            <Button
              colorScheme="gray"
              variant="ghost"
              size="sm"
              onClick={() => setEditCoordinate(true)}
            >
              Edit koordinat
            </Button>
          )}
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
          {marker.longitude && marker.latitude && (
            <Marker
              longitude={marker.longitude}
              latitude={marker.latitude}
              anchor="bottom"
              draggable={editCoordinate}
              onDrag={onMarkerDrag}
            >
              <img src="/marker.png" />
            </Marker>
          )}
          <NavigationControl />
          <DrawControl
            key={randomId}
            position="top-left"
            displayControlsDefault={false}
            controls={{
              polygon: true,
              trash: true,
            }}
            defaultMode="simple_select"
            onCreate={onChangeArea}
            onUpdate={onChangeArea}
            onDelete={onChangeArea}
            areas={areas}
          />
        </ReactMapGL>

        {marker.longitude && marker.latitude && (
          <Box pos="absolute" bottom={6} right={4} bg="white" rounded="lg">
            <Box px={4} py={2} fontSize="sm" color="gray.600">
              {marker.latitude}, {marker.longitude}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default BranchMap;
