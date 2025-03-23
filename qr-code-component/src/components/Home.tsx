import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";

function Home() {
	const [qrCodeValue, setQrCodeValue] = useState("https://www.frontendmentor.io/");

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.value);
		setQrCodeValue(e.target.value);
	}

	return (
		<>
			<main className="grid place-items-center h-dvh min-h-full">
				<section>
					<div className="flex flex-col gap-6 mx-auto max-w-[320px] p-4 pb-10 rounded-[20px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.047)]">
						<div className="relative grid place-items-center w-full aspect-square bg-blue-600 rounded-[10px] overflow-hidden">
							<div className="absolute top-[-50%] left-[-131.5px] w-[328px] aspect-square rounded-full bg-blue-500"></div>
							<div className="absolute top-[204.5px] left-[131.5px] w-[270px] aspect-square rounded-full bg-blue-500"></div>
							<QRCodeSVG className="z-10" value={qrCodeValue} size={160} bgColor="#fff0" fgColor="#fff" level="M" />
							<details className="flex justify-start gap-2 p-2 pt-0 absolute bottom-0 left-0 w-full z-10 group">
								<summary className="h-9 w-9 flex items-center justify-center shrink-0 p-1 text-white/50 border border-white/25 rounded cursor-pointer list-none duration-200 ease-in-out hover:text-white/75 hover:border-white/50 group-open:text-white group-open:border-white">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
										<path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
									</svg>
								</summary>
								<input
									type="text"
									id="input-text"
									className="w-full rounded border border-white/25 py-1 px-2 bg-white min-h-9"
									onChange={handleInput}
									value={qrCodeValue}
									placeholder="https://example.com"
								/>
							</details>
						</div>
						<div className="text-center">
							<h1 className="text-slate-900 text-[22px] font-bold leading-[120%] mb-4">Improve your front-end skills by building projects</h1>
							<p className="text-slate-500 text-[15px] leading-[140%] tracking-[0.2px] px-2">
								Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
							</p>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-950 py-4">
				<div className="container mx-auto text-white text-center">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						className="text-lime-500 ease-linear duration-300 hover:text-lime-300 hover:tracking-wide"
					>
						Frontend Mentor
					</a>
					. Coded by
					<a
						href="https://www.alansantos.dev.br"
						target="_blank"
						className="text-lime-500 ease-linear duration-300 hover:text-lime-300 hover:tracking-wide"
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

