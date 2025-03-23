import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";

function Home() {
  const [qrCodeValue, setQrCodeValue] = useState(
    "https://www.frontendmentor.io/",
  );

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setQrCodeValue(e.target.value);
  }

  return (
    <>
      <main className="grid h-dvh min-h-full place-items-center">
        <section>
          <div className="mx-auto flex max-w-[320px] flex-col gap-6 rounded-[20px] bg-white p-4 pb-10 shadow-[0_25px_25px_rgba(0,0,0,0.047)]">
            <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[10px] bg-blue-600">
              <div className="absolute left-[-131.5px] top-[-50%] aspect-square w-[328px] rounded-full bg-blue-500"></div>
              <div className="absolute left-[131.5px] top-[204.5px] aspect-square w-[270px] rounded-full bg-blue-500"></div>
              <QRCodeSVG
                className="z-10"
                value={qrCodeValue}
                size={160}
                bgColor="#fff0"
                fgColor="#fff"
                level="M"
              />
              <details className="group absolute bottom-0 left-0 z-10 flex w-full justify-start gap-2 p-2 pt-0">
                <summary className="flex h-9 w-9 shrink-0 cursor-pointer list-none items-center justify-center rounded border border-white/25 p-1 text-white/50 duration-200 ease-in-out hover:border-white/50 hover:text-white/75 group-open:border-white group-open:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
                  </svg>
                </summary>
                <input
                  type="text"
                  id="input-text"
                  className="min-h-9 w-full rounded border border-white/25 bg-white px-2 py-1"
                  onChange={handleInput}
                  value={qrCodeValue}
                  placeholder="https://example.com"
                />
              </details>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-[22px] font-bold leading-[120%] text-slate-900">
                Improve your front-end skills by building projects
              </h1>
              <p className="px-2 text-[15px] leading-[140%] tracking-[0.2px] text-slate-500">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 py-4">
        <div className="container mx-auto text-center text-white">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-lime-500 duration-300 ease-linear hover:tracking-wide hover:text-lime-300"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.alansantos.dev.br"
            target="_blank"
            className="text-lime-500 duration-300 ease-linear hover:tracking-wide hover:text-lime-300"
          >
            Alan Santos
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default Home;
