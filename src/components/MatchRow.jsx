import dayjs from "dayjs";

export default function MatchRow({ match }) {
  const [home, away] = match.name.split(" vs ");
  const isFinished = match.state_id === 5;

  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-2
        px-3
        sm:px-4
        py-3
        text-sm
      "
    >
      {/* Time */}
      <div className="text-xs text-gray-400 sm:w-16 shrink-0">
        {dayjs(match.starting_at).format("HH:mm")}
      </div>

      {/* Teams */}
      <div className="flex-1 flex justify-center gap-2 sm:gap-4 text-center">
        <span className="truncate">{home}</span>
        <span className="text-gray-400">vs</span>
        <span className="truncate">{away}</span>
      </div>

      {/* Result / Status */}
      <div className="text-xs sm:text-right sm:min-w-[140px] text-center sm:text-right">
        {isFinished ? (
          <span className="text-lime-400">
            {match.result_info}
          </span>
        ) : (
          <span className="text-yellow-400">Upcoming</span>
        )}
      </div>
    </div>
  );
}
