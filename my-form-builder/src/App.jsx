import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { FormBuilder } from "./pages/FormBuilder";

const App = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <FormBuilder />
      </div>
    </div>
  );
};

export default App;
