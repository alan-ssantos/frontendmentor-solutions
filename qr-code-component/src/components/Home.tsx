import Footer from "./Footer";
import QRCodeContainer from "./qrcode/QRCodeContainer";

function Home() {
  return (
    <>
      <main className="grid h-dvh min-h-full place-items-center">
        <section>
          <div className="mx-auto flex max-w-[320px] flex-col gap-6 rounded-[20px] bg-white p-4 pb-10 shadow-[0_25px_25px_rgba(0,0,0,0.047)]">
            <QRCodeContainer />
            <div className="text-center">
              <h1 className="mb-4 text-[22px] font-bold leading-[120%] text-slate-900">Improve your front-end skills by building projects</h1>
              <p className="px-2 text-[15px] leading-[140%] tracking-[0.2px] text-slate-500">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
