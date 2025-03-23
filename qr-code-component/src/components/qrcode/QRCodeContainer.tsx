import React, { useCallback, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import QRCodeInput from "./QRCodeInput";

function QRCodeContainer() {
  const svgRef = useRef<HTMLDivElement>(null);
  const [qrCodeValue, setQrCodeValue] = useState("https://www.frontendmentor.io/");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQrCodeValue(e.target.value);
  }

  const saveImage = useCallback(() => {
    if (svgRef.current) {
      toPng(svgRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "qr-code.png";
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [svgRef]);

  return (
    <div ref={svgRef} className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[10px] bg-blue-600">
      <div className="absolute left-[-131.5px] top-[-50%] aspect-square w-[328px] rounded-full bg-blue-500"></div>
      <div className="absolute left-[131.5px] top-[204.5px] aspect-square w-[270px] rounded-full bg-blue-500"></div>
      <QRCodeSVG className="z-10" value={qrCodeValue} size={160} bgColor="#fff0" fgColor="#fff" level="M" />

      <div className="absolute bottom-0 left-0 z-10 flex w-full justify-between gap-2 p-2 pt-0">
        <QRCodeInput qrCodeValue={qrCodeValue} handleInput={handleInput} />

        <button type="button" className="qrcode-button" onClick={saveImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default QRCodeContainer;
