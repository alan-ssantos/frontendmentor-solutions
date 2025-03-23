import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";
import QRCodeInput from "./QRCodeInput";

function QRCodeContainer() {
  const [qrCodeValue, setQrCodeValue] = useState("https://www.frontendmentor.io/");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQrCodeValue(e.target.value);
  }

  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[10px] bg-blue-600">
      <div className="absolute left-[-131.5px] top-[-50%] aspect-square w-[328px] rounded-full bg-blue-500"></div>
      <div className="absolute left-[131.5px] top-[204.5px] aspect-square w-[270px] rounded-full bg-blue-500"></div>
      <QRCodeSVG className="z-10" value={qrCodeValue} size={160} bgColor="#fff0" fgColor="#fff" level="M" />

      <div className="absolute bottom-0 left-0 z-10 flex w-full justify-between gap-2 p-2 pt-0">
        <QRCodeInput qrCodeValue={qrCodeValue} handleInput={handleInput} />
      </div>
    </div>
  );
}

export default QRCodeContainer;
