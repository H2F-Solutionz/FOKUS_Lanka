import React from "react";

const Main = () => {
  const services = [
    "Residential Construction",
    "Planning - Approval & Architecture Designs",
    "JMC Approval",
    "Renovation",
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
            UK Qualified Expert
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight">
            UK Qualified Civil Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            More than{" "}
            <span className="text-slate-900 font-bold underline decoration-blue-500 decoration-4">
              30 years
            </span>{" "}
            experience in the UK. Currently in{" "}
            <span className="text-blue-700 font-semibold">Jaffna</span> helping
            to build residential houses according to UK standards.
          </p>
        </div>
      </header>

      {/* Profile Section (From your Sketch) */}
      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-gray-100">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-200 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-blue-50">
            {/* Replace with actual image later */}
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xs">
              IMAGE HERE
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              [Engineer Name]
            </h3>
            <p className="text-blue-600 font-medium mb-4">
              Senior Consultant & Founder
            </p>
            <p className="text-slate-500 italic">
              "Bringing British engineering excellence to the heart of Jaffna."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-slate-900 whitespace-nowrap">
            Our Services
          </h2>
          <div className="h-1 w-full bg-gray-100 rounded-full">
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                <span className="text-lg font-semibold text-slate-800">
                  {service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
