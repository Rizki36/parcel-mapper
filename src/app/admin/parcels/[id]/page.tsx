import React from "react";
import Stepper from "./components/Stepper";

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.220099531293!2d112.2208823750025!3d-7.550962092462698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784010c363183b%3A0xee0ca2d0a2f294fa!2sJNE%20JOMBANG!5e0!3m2!1sid!2sid!4v1701271671730!5m2!1sid!2sid"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="overflow-hidden bg-white w-[350px] border-l border-l-neutral-100">
          <div className="text-center mb-4 text-lg font-semibold">Lokasi</div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
