import React, { useCallback, useMemo, useState } from "react";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import { Box, Flex, Link } from "@chakra-ui/react";
import { ENV } from "@/_constants";
import { Branch, Parcel } from "@prismaorm/generated/client";
import { HiOutlineLink } from "react-icons/hi2";
import useParcelsData from "../_hooks/useParcelsData";
import useBranchData from "../_hooks/useBranchData";

const Map = () => {
  const [parcelInfo, setParcelInfo] = useState<Parcel | null>(null);
  const [branchInfo, setBranchInfo] = useState<Branch | null>(null);

  const { parcels: parcelsData } = useParcelsData();
  const { branch: branchData } = useBranchData();

  const onClick = useCallback((event: MapLayerMouseEvent) => {
    console.log(event.lngLat);
  }, []);

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const { features } = event;
    const hoveredFeature = features && features[0];

    console.log(hoveredFeature);
  }, []);

  const parcels = useMemo(() => {
    // filter
    const _parcels =
      parcelsData?.filter((item) => {
        return item.latitude && item.longitude;
      }) || [];

    return _parcels?.map((item, index) => (
      <Marker
        key={item.id}
        longitude={item.longitude as number}
        latitude={item.latitude as number}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setParcelInfo(item);
        }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          w="18px"
          h="18px"
          rounded="100%"
          bgColor="red"
          color="white"
        >
          {index + 1}
        </Flex>
      </Marker>
    ));
  }, [parcelsData]);

  return (
    <>
      <Box pos="relative">
        <ReactMapGL
          reuseMaps
          onClick={onClick}
          mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: 112.226479,
            latitude: -7.546839,
            zoom: 13,
          }}
          style={{ height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onMouseMove={onHover}
          interactiveLayerIds={["data"]}
        >
          {parcels}
          {!!branchData?.longitude && !!branchData.latitude ? (
            <Marker
              longitude={branchData.longitude!}
              latitude={branchData.latitude!}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setBranchInfo(branchData);
              }}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                w="18px"
                h="18px"
                bgColor="red"
                color="white"
              >
                0
              </Flex>
            </Marker>
          ) : null}

          {parcelInfo && (
            <Popup
              anchor="top"
              longitude={Number(parcelInfo.longitude)}
              latitude={Number(parcelInfo.latitude)}
              onClose={() => setParcelInfo(null)}
            >
              <Flex w="150px" direction="column" columnGap="12px">
                <Box>
                  <Box fontWeight="bold">Nama Penerima</Box>
                  <Box>{parcelInfo?.recipientName}</Box>
                </Box>
                <Box>
                  <Box fontWeight="bold">Alamat Penerima</Box>
                  <Box>{parcelInfo?.recipientAddress}</Box>
                </Box>
                <Box>
                  <Box fontWeight="bold">Kurir</Box>
                  <Link
                    href={`/admin/parcels/${parcelInfo.id}`}
                    target="_blank"
                  >
                    <Flex columnGap="4px" alignItems="center">
                      Belum Diatur
                      <HiOutlineLink />
                    </Flex>
                  </Link>
                </Box>
              </Flex>
            </Popup>
          )}

          {branchInfo && (
            <Popup
              anchor="top"
              longitude={Number(branchInfo.longitude)}
              latitude={Number(branchInfo.latitude)}
              onClose={() => setBranchInfo(null)}
            >
              <Flex w="150px" direction="column" columnGap="12px">
                <Box>
                  <Box fontWeight="bold">Nama Branch</Box>
                  <Box>{branchInfo?.name}</Box>
                </Box>
                <Box>
                  <Box fontWeight="bold">Kode Branch</Box>
                  <Box>{branchInfo?.branchCode}</Box>
                </Box>
                <Flex alignItems="center" columnGap={1}>
                  <Box fontWeight="bold">Detail</Box>
                  <Link
                    href={`/admin/branches/${branchInfo.id}`}
                    target="_blank"
                  >
                    <HiOutlineLink />
                  </Link>
                </Flex>
              </Flex>
            </Popup>
          )}
          <NavigationControl />
        </ReactMapGL>
      </Box>
    </>
  );
};

export default Map;
