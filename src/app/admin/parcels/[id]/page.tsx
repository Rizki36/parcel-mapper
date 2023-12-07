"use client";
import React, { useCallback, useState } from "react";
import Stepper from "./components/Stepper";
import Map, { Marker, MarkerDragEvent, NavigationControl } from "react-map-gl";
import { ENV } from "@/constants";
import { Button } from "@radix-ui/themes";

const ParcelDetail = () => {
  const [editCoordinate, setEditCoordinate] = useState(false);

  const [marker, setMarker] = useState({
    latitude: -7.546839,
    longitude: 112.226479,
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

  return (
    <div className="h-screen flex flex-col">
      <div className="py-6 flex items-center justify-center bg-white w-[calc(100%+48px)] -ml-6 -mt-8 border-b border-b-neutral-100">
        <Stepper />
      </div>
      <div className="flex -mr-6 -ml-6 flex-1">
        <div className="flex-1">
          <div className="px-8 py-6 border-b border-b-neutral-100 bg-white flex justify-between items-center">
            <div className="font-semibold text-lg">Lokasi pengiriman</div>
            <div>
              {editCoordinate ? (
                <div className="flex items-center gap-x-2">
                  <div className="text-sm text-neutral-600">
                    Geser marker untuk mengubah koordinat
                  </div>
                  <Button
                    className="bg-primary"
                    variant="soft"
                    onClick={() => setEditCoordinate(false)}
                  >
                    Simpan
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-primary"
                  variant="soft"
                  onClick={() => setEditCoordinate(true)}
                >
                  Edit koordinat
                </Button>
              )}
            </div>
          </div>
          <div className="relative">
            <Map
              reuseMaps
              mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: 112.226479,
                latitude: -7.546839,
                zoom: 14,
              }}
              style={{ height: 500 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
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
              <NavigationControl />
            </Map>
            <div className="absolute top-3 left-3 bg-white rounded-lg">
              <div className="px-4 py-2 text-sm text-neutral-600">
                {marker.latitude}, {marker.longitude}
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white w-[350px] border-l border-l-neutral-100">
          <div className="text-center mb-4 text-lg font-semibold"></div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
