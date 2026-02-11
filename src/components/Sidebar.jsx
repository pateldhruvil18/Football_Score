import {
  Home,
  Trophy,
  MapPin,
  MessageCircle,
  Bell,
  Shield,
  User,
  Download,
  Sun,
  Moon,
  ChevronRight,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        md:flex
        w-64
        h-screen
        bg-linear-to-b from-[#1c1c1c] to-[#121212]
        p-4
        flex-col
        text-white
        overflow-y-auto
      "
    >
      <h1 className="text-xl font-bold mb-6">
        FOOTBALL<span className="text-lime-400 italic">SHURU</span>
      </h1>

      {/* Search */}
      <div className="relative mb-5">
        <input
          placeholder="Search"
          className="w-full bg-[#2a2a2a] rounded-lg px-10 py-2 text-sm outline-none"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>

      {/* Main Menu */}
      <nav className="space-y-1 text-sm">
        <MenuItem icon={<Home size={18} />} label="Home" active />
        <MenuItem icon={<Trophy size={18} />} label="Leader Board" />
        <MenuItem icon={<MapPin size={18} />} label="Ground" />
        <MenuItem icon={<MessageCircle size={18} />} label="Chat" />
        <MenuItem icon={<Bell size={18} />} label="Notification" />
      </nav>

      {/* Divider */}
      <div className="my-4 border-t border-gray-700" />

      {/* Followed Section */}
      <nav className="space-y-1 text-sm">
        <SubMenu label="Followed Team" />
        <SubMenu label="Followed Players" />
        <SubMenu label="Followed Ground" />
      </nav>

      {/* Divider */}
      <div className="my-4 border-t border-gray-700" />

      {/* Bottom Menu */}
      <nav className="space-y-1 text-sm">
        <MenuItem icon={<Settings size={18} />} label="Settings" />
        <MenuItem icon={<Download size={18} />} label="Download The App" />
      </nav>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between bg-[#2a2a2a] rounded-lg p-2 mt-4 text-sm">
        <button className="flex items-center gap-2 px-3 py-1 rounded bg-[#3a3a3a]">
          <Sun size={14} /> Light
        </button>
        <button className="flex items-center gap-2 px-3 py-1 rounded text-gray-400">
          <Moon size={14} /> Dark
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-auto flex items-center gap-3 bg-[#2a2a2a] p-3 rounded-lg">
        <div className="w-9 h-9 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">
          D
        </div>
        <div className="text-xs">
          <p className="font-semibold">Dhruvil_Patel</p>
          <p className="text-gray-400">dhp204600@gmail.com</p>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
        ${
          active
            ? "bg-lime-500 text-black font-medium"
            : "hover:bg-[#2a2a2a]"
        }`}
    >
      {icon}
      {label}
    </div>
  );
}

function SubMenu({ label }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-[#2a2a2a]">
      <span className="flex items-center gap-3">
        <User size={16} />
        {label}
      </span>
      <ChevronRight size={16} className="text-gray-400" />
    </div>
  );
}
