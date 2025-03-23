import React, { useCallback, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import QRCodeInput from "./QRCodeInput";
import QRCodeSave from "./QRCodeSave";

function QRCodeContainer() {
  const svgRef = useRef<HTMLDivElement>(null);
  const svgButtonsRef = useRef<HTMLDivElement>(null);
  const [qrCodeValue, setQrCodeValue] = useState("https://www.frontendmentor.io/");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQrCodeValue(e.target.value);
  }

  const saveImage = useCallback(() => {
    if (svgButtonsRef.current) {
      svgButtonsRef.current.classList.toggle("opacity-0!");

      setTimeout(() => {
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
            })
            .finally(() => {
              svgButtonsRef.current?.classList.toggle("opacity-0!");
            });
        }
      }, 100);
    }
  }, [svgRef]);

  return (
    <div ref={svgRef} className="group/svg relative grid aspect-square w-full place-items-center overflow-hidden rounded-[10px] bg-blue-600">
      <div className="absolute left-[-131.5px] top-[-50%] aspect-square w-[328px] rounded-full bg-blue-500"></div>
      <div className="absolute left-[131.5px] top-[204.5px] aspect-square w-[270px] rounded-full bg-blue-500"></div>
      <QRCodeSVG className="z-10" value={qrCodeValue} size={160} bgColor="#fff0" fgColor="#fff" level="M" />

      <div
        ref={svgButtonsRef}
        className="absolute bottom-0 left-0 z-10 flex w-full justify-between gap-2 p-2 pt-0 group-hover/svg:opacity-100 md:opacity-0"
      >
        <QRCodeInput qrCodeValue={qrCodeValue} handleInput={handleInput} />
        <QRCodeSave saveImage={saveImage} />
      </div>
    </div>
  );
}

export default QRCodeContainer;
