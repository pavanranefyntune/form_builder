import { Bell } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] bg-white p-4 flex justify-between items-center shadow-xl">
      <h1 className="text-lg font-semibold">Form Builder</h1>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
