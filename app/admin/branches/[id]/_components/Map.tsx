import React, { FC, useCallback, useEffect, useState } from "react";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { ENV } from "../../../../_constants";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import usePatchBranchMutation from "../../../../_hooks/mutations/usePatchBranchMutation";
import DrawControl from "@/admin/branches/[id]/_components/DrawControl";
import usePostBranchAreaMutation from "../../../../_hooks/mutations/usePostBranchAreaMutation";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import useBranchData from "../../_hooks/useBranchData";

type MapProps = {};

const BranchMap: FC<MapProps> = () => {
  const [randomId, setRandomId] = useState<string>(crypto.randomUUID());
  const [editCoordinate, setEditCoordinate] = useState(false);

  const { branch, refetchBranch } = useBranchData();

  const toast = useToast();
  const { mutateAsync: updateCoordinate } = usePatchBranchMutation();
  const { mutateAsync: updateBranchAreas } = usePostBranchAreaMutation();

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
    if (branch?.id && marker.longitude && marker.latitude) {
      try {
        await updateCoordinate({
          id: branch.id,
          longitude: marker.longitude,
          latitude: marker.latitude,
        });

        toast({
          colorScheme: "teal",
          title: "Berhasil update koordinat",
          status: "success",
          isClosable: true,
          position: "top",
        });

        setEditCoordinate(false);
      } catch (error) {
        toast({
          title: "Gagal update koordinat",
          status: "error",
          isClosable: true,
          position: "top",
        });
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

  const onChangeArea = useCallback(
    async (e: {
      type: string;
      features: Feature<Geometry, GeoJsonProperties>[];
    }) => {
      try {
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

        await updateBranchAreas({
          id: branch?.id || "",
          area,
        });

        toast({
          colorScheme: "teal",
          title: "Berhasil update area",
          status: "success",
          isClosable: true,
          position: "top",
        });

        await refetchBranch();
      } catch (error) {
        toast({
          title: "Gagal update area",
          status: "error",
          isClosable: true,
          position: "top",
        });
      } finally {
        setRandomId(crypto.randomUUID());
      }
    },
    [branch]
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
            >
              <img src="/marker.png" />
            </Marker>
          )}
          <NavigationControl />
          {!editCoordinate && (
            <DrawControl
              key={`${randomId}-${branch?.id}`}
              position="top-left"
              displayControlsDefault={false}
              controls={{
                polygon: !editCoordinate,
                trash: !editCoordinate,
              }}
              defaultMode="simple_select"
              onCreate={onChangeArea}
              onUpdate={onChangeArea}
              onDelete={onChangeArea}
              branch={branch}
            />
          )}
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
