import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-slate-400 uppercase tracking-widest text-[10px] mb-6 font-bold">
          Notable UK Experience
        </p>
        <div className="flex flex-center justify-center gap-6">
          <span className="text-xl font-serif opacity-80 border-r border-slate-700 pr-6">
            CANARY WHARF
          </span>
          <span className="text-xl font-serif opacity-80">BISHOPS GATE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
