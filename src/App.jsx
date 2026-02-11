import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        h-screen
        bg-[#121212]
        text-white
        overflow-hidden
      "
    >
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Section (Home + Mobile Header) */}
      <div className="flex flex-col flex-1">

        {/* 🔥 Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#1c1c1c]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <h1 className="text-lg font-bold">
            FOOTBALL<span className="text-lime-400 italic">SHURU</span>
          </h1>
        </div>

        {/* Home Content */}
        <Home />
      </div>

      {/* Right Sidebar (Desktop Only if you want) */}
      <RightSidebar />
    </div>
  );
}
