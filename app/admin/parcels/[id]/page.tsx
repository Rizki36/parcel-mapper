"use client";
import React from "react";
import Stepper from "./_components/Stepper";
import useParcelQuery from "../_hooks/useParcelQuery";
import { useParams } from "next/navigation";
import Form from "./_components/Form";
import Map from "./_components/Map";

const ParcelDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useParcelQuery({
    id,
  });
  const parcel = data?.data?.doc;

  return (
    <div className="h-screen flex flex-col">
      <div className="py-6 flex items-center justify-center bg-white w-[calc(100%+48px)] -ml-6 -mt-8 border-b border-b-neutral-100">
        <Stepper />
      </div>
      <div className="flex -mr-6 -ml-6 flex-1">
        <div className="flex-1">
          {!loadingParcel ? <Map parcel={parcel} /> : null}
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

export default ParcelDetail;
