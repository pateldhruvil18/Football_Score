import { Search, ChevronDown } from "lucide-react";

export default function MatchFilterBar() {
  return (
    <div
      className="
        bg-[#1e1e1e]
        rounded-xl
        px-3
        sm:px-4
        py-3
        mb-3
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-3
      "
    >
      {/* Live Badge */}
      <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full text-sm shrink-0">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <span className="text-lime-400 font-medium">Live</span>
        <span className="text-white">(1)</span>
      </div>

      {/* Search Input */}
      <div className="flex-1 relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search For Matches"
          className="
            w-full
            bg-[#2a2a2a]
            rounded-full
            pl-9
            pr-4
            py-2
            text-sm
            outline-none
            placeholder:text-gray-400
          "
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center justify-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-full text-sm shrink-0">
        All Matches
        <ChevronDown size={16} />
      </button>
    </div>
  );
}
