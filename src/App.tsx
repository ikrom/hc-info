import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import logo from "/raiders-horizontal.png";

const App: Component = () => {
  const [show, setShow] = createSignal(false);

  return (
    <div
      className="bg-gray-100 pb-12 overflow-y-hidden"
      style={{ minHeight: 700 }}
    >
      {/* Code block starts */}

      <nav className="w-full border-b">
        <div className="py-2 md:py-0 container mx-auto px-6 flex items-center justify-between">
          <div aria-label="Home. logo" role="img">
            <img className="w-32 md:w-48" src={logo} alt="logo" />
          </div>
        </div>
      </nav>
      <div className="bg-gray-100 min-h-fit">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Jadwal Compass Test BP 3<br />
              <span className="text-indigo-700">TREG 5</span>
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-900 font-normal text-center text-sm sm:text-lg">
              Materi Talent Cluster 2022:{" "}
              <a
                className="underline text-indigo-700"
                href="../public/files/Telent 2022 - BP3 - Talent Class 2022 update Compass.pdf"
              >
                Download
              </a>
            </p>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-900 font-normal text-center text-sm sm:text-lg">
              List Peserta & Jadwal:{" "}
              <a
                className="underline text-indigo-700"
                href="../public/files/Talent 2022 - BP3 - Peserta Compass Test.xlsx"
              >
                Download
              </a>
            </p>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-900 font-normal text-center text-sm sm:text-lg">
              FAQ:{" "}
              <a
                className="underline text-indigo-700"
                href="../public/files/Telent 2022 - BP3 - FAQ Talent Class Compass BP 3.pdf"
              >
                Download
              </a>
            </p>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-900 font-normal text-center text-sm sm:text-lg">
              Form Usulan Reschedule Compass Test BP III:{" "}
              <a
                className="underline text-indigo-700"
                href="http://bit.ly/Reschedule-CompassTest-2022"
              >
                Link
              </a>
            </p>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-900 font-normal text-center text-sm sm:text-lg">
              Form Laporan Kendala Server Compass Test BP III:{" "}
              <a
                className="underline text-indigo-700"
                href="http://bit.ly/ServerCompassTest2022"
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Code block ends */}
    </div>
  );
};

export default App;
