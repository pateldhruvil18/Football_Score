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

  const { data, isLoading, isFetching } =
    useFixtures(selectedDate);

  return (
    <main
      className="
        flex-1
        flex
        flex-col
        bg-[#121212]
        h-full
        min-w-0
        px-3
        sm:px-4
        md:px-6
        py-3
      "
    >
      <Banner />

      <MatchFilterBar />

      <DateTabs
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs sm:text-sm text-gray-400">
          Match Results
        </h2>

        {isFetching && !isLoading && (
          <span className="text-xs text-lime-400 animate-pulse">
            Updating…
          </span>
        )}
      </div>

      <div
        className="
          flex-1
          overflow-y-auto
          rounded-lg
          bg-[#1e1e1e]
          p-2
          sm:p-3
        "
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Loading matches...
          </div>
        ) : (
          <LeagueSection matches={data?.data || []} />
        )}
      </div>
    </main>
  );
}
