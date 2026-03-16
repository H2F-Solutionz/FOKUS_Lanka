import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-black text-blue-900 tracking-tighter">
        fokuslanka.lk
      </h1>
      <button className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
        Hire
      </button>
    </nav>
  );
};

export default Navbar;
