import { Home, File, Users, Settings, Calendar, Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[5%] h-screen bg-white shadow-xl flex flex-col items-center py-6 space-y-6">
      <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
      <Home className="w-6 h-6 text-gray-600 cursor-pointer" />
      <Users className="w-6 h-6 text-gray-600 cursor-pointer" />
      <File className="w-6 h-6 text-gray-600 cursor-pointer" />
      <Calendar className="w-6 h-6 text-gray-600 cursor-pointer" />
      <Settings className="w-6 h-6 text-gray-600 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
