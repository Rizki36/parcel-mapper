import React, { FC, useCallback, useEffect, useState } from "react";
import usePatchParcelMutation from "../../_hooks/usePatchParcelMutation";
import ReactMapGL, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { Parcel } from "@prismaorm/generated/client";
import { Button } from "@radix-ui/themes";
import { ENV } from "@/app/_constants";

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
      <div className="px-8 py-6 border-b border-b-neutral-100 bg-white flex justify-between items-center">
        <div className="font-semibold text-lg">Lokasi pengiriman</div>
        <div>
          {editCoordinate ? (
            <div className="flex items-center gap-x-2">
              <div className="text-sm text-neutral-600">
                Geser marker / klik map untuk mengubah koordinat
              </div>
              <Button
                color="gray"
                variant="surface"
                size="2"
                onClick={() => onSaveCoordinate()}
              >
                Simpan
              </Button>
              <Button
                color="gray"
                variant="surface"
                size="2"
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
            </div>
          ) : (
            <Button
              color="gray"
              variant="surface"
              size="2"
              onClick={() => setEditCoordinate(true)}
            >
              Edit koordinat
            </Button>
          )}
        </div>
      </div>
      <div className="relative">
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
              onDragEnd={onMarkerDragEnd}
            >
              <img src="/marker.png" />
            </Marker>
          )}
          <NavigationControl />
        </ReactMapGL>

        {marker.longitude && marker.latitude && (
          <div className="absolute top-3 left-3 bg-white rounded-lg">
            <div className="px-4 py-2 text-sm text-neutral-600">
              {marker.latitude}, {marker.longitude}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Map;
