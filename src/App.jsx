import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      <Sidebar />
      <Home />
      <RightSidebar/>
    </div>
  );
}
