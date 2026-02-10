import { useState } from "react";
import dayjs from "dayjs";
import { useFixtures } from "../hooks/useFixtures";
import Banner from "./Banner";
import DateTabs from "./DateTabs";
import LeagueSection from "./LeagueSection";
import MatchFilterBar from "./MatchFilterBar";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );

  const {
    data,
    isLoading,
    isFetching,
  } = useFixtures(selectedDate);

  return (
    // IMPORTANT: flex + full height
    <main className="flex-1 flex flex-col p-4 bg-[#121212]">
      {/* 🔒 FIXED (NON-SCROLLABLE) SECTION */}
      <Banner />

      <MatchFilterBar />

      <DateTabs
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm text-gray-400">Match Results</h2>

        {isFetching && !isLoading && (
          <span className="text-xs text-lime-400 animate-pulse">
            Updating…
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto rounded-lg bg-[#1e1e1e]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Loading matches...
          </div>
        ) : (
          <LeagueSection matches={data?.data || []} />
        )}
      </div>
    </main>
  );
}
