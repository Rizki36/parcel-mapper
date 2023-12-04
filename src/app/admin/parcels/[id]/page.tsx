"use client";
import React from "react";
import Stepper from "./components/Stepper";
import Map, { Marker } from "react-map-gl";
import { ENV } from "@/constants";

const ParcelDetail = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-6 flex items-center justify-center bg-white w-[calc(100%+48px)] -ml-6 -mt-8 border-b border-b-neutral-100">
        <Stepper />
      </div>
      <div className="flex -mr-6 -ml-6 flex-1">
        <div className="flex-1">
          <div className="px-8 py-6 border-b border-b-neutral-100 bg-white">
            <div className="font-semibold text-lg">Lokasi pengiriman</div>
          </div>
          <div>
            <Map
              reuseMaps
              mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: 112.226479,
                latitude: -7.546839,
                zoom: 12,
              }}
              style={{ height: 500 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <Marker
                longitude={112.226479}
                latitude={-7.546839}
                anchor="bottom"
              >
                <img src="/marker.png" />
              </Marker>
            </Map>
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
