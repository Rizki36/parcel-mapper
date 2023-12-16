import React, { FC, useCallback, useEffect, useState } from "react";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { ENV } from "../../../../_constants";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Branch } from "@prismaorm/generated/client";
import usePatchBranchMutation from "../../_hooks/usePatchBranchMutation";

const Map: FC<{
  branch: Branch | undefined;
}> = ({ branch }) => {
  const { mutateAsync } = usePatchBranchMutation();

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

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    // TODO: save to database
    console.log(event.lngLat);
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

  const onSaveCoordinate = async () => {
    if (branch?.id && marker.longitude && marker.latitude) {
      try {
        await mutateAsync({
          id: branch.id,
          data: {
            longitude: marker.longitude,
            latitude: marker.latitude,
          },
        });
        setEditCoordinate(false);
      } catch (error) {
        alert("Gagal menyimpan koordinat");
      }
    }
  };

  useEffect(() => {
    if (branch?.latitude && branch?.longitude) {
      setMarker({
        latitude: branch.latitude,
        longitude: branch.longitude,
      });
    }
  }, [branch?.latitude, branch?.longitude]);

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
                onClick={() => onSaveCoordinate()}
              >
                Simpan
              </Button>
              <Button
                colorScheme="gray"
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditCoordinate(false);
                  setMarker({
                    latitude: branch?.latitude || null,
                    longitude: branch?.longitude || null,
                  });
                }}
              >
                Batal
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
            longitude: branch?.longitude || 112.226479,
            latitude: branch?.latitude || -7.546839,
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
              onDragEnd={onMarkerDragEnd}
            >
              <img src="/marker.png" />
            </Marker>
          )}
          <NavigationControl />
        </ReactMapGL>

        {marker.longitude && marker.latitude && (
          <Box pos="absolute" top={3} left={3} bg="white" rounded="lg">
            <Box px={4} py={2} fontSize="sm" color="gray.600">
              {marker.latitude}, {marker.longitude}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Map;
