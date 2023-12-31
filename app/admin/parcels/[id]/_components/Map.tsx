import React, { FC, useCallback, useEffect, useState } from "react";
import usePatchParcelMutation from "../../_hooks/usePatchParcelMutation";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { Parcel } from "@prismaorm/generated/client";
import { ENV } from "../../../../_constants";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const Map: FC<{
  parcel: Parcel | undefined;
}> = ({ parcel }) => {
  const { mutateAsync } = usePatchParcelMutation();

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

  const onSaveCoordinate = async () => {
    if (parcel?.id && marker.longitude && marker.latitude) {
      try {
        await mutateAsync({
          id: parcel.id,
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
    if (parcel?.latitude && parcel?.longitude) {
      setMarker({
        latitude: parcel.latitude,
        longitude: parcel.longitude,
      });
    }
  }, [parcel?.latitude, parcel?.longitude]);

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
                    latitude: parcel?.latitude || null,
                    longitude: parcel?.longitude || null,
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
            longitude: parcel?.longitude || 112.226479,
            latitude: parcel?.latitude || -7.546839,
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
