"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import Stepper from "./components/Stepper";
import Map, {
  MapLayerMouseEvent,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import { ENV } from "@/constants";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
import useParcelQuery from "../hooks/useParcelQuery";
import { useParams } from "next/navigation";
import usePatchParcelMutation from "../hooks/usePatchParcelMutation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Parcel } from "@prismaorm/generated/client";

const formSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
});

const ParcelDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useParcelQuery({
    id,
  });
  const parcel = data?.data?.doc;

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
            {!loadingParcel && (
              <Map
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
              </Map>
            )}
            {marker.longitude && marker.latitude && (
              <div className="absolute top-3 left-3 bg-white rounded-lg">
                <div className="px-4 py-2 text-sm text-neutral-600">
                  {marker.latitude}, {marker.longitude}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-hidden bg-white w-[350px] border-l border-l-neutral-100 px-4">
          <div className="text-center mb-4 mt-5 text-lg font-semibold">
            Data Paket
          </div>
          {!loadingParcel ? <Form parcel={parcel} /> : null}
        </div>
      </div>
    </div>
  );
};

const Form: FC<{
  parcel: Parcel | undefined;
}> = ({ parcel }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      recipientName: parcel?.recipientName || "",
      recipientAddress: parcel?.recipientAddress || "",
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync } = usePatchParcelMutation();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        id: parcel?.id || "",
        data: {
          recipientName: data.recipientName,
          recipientAddress: data.recipientAddress,
        },
      });

      alert("Berhasil menyimpan data");
    } catch (error) {
      alert("Gagal menyimpan data");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3">
        <Text as="label" size="2">
          Nama Penerima
          <Controller
            name="recipientName"
            control={control}
            render={({ field }) => (
              <TextField.Input
                size="2"
                placeholder="Masukkan nama penerima"
                {...field}
              />
            )}
          />
        </Text>
        <Text as="label" size="2">
          Alamat Penerima
          <Controller
            name="recipientAddress"
            control={control}
            render={({ field }) => (
              <TextArea
                size="2"
                placeholder="Masukkan alamat penerima"
                {...field}
              />
            )}
          />
        </Text>
        <div className="flex justify-center">
          <Button type="submit" size="2">
            Simpan
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ParcelDetail;
