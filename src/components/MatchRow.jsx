import dayjs from "dayjs";

export default function MatchRow({ match }) {
  const [home, away] = match.name.split(" vs ");

  const isFinished = match.state_id === 5;

  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm">
      {/* Time */}
      <div className="w-16 text-xs text-gray-400">
        {dayjs(match.starting_at).format("HH:mm")}
      </div>

      {/* Teams */}
      <div className="flex-1 flex justify-center gap-4">
        <span>{home}</span>
        <span className="text-gray-400">vs</span>
        <span>{away}</span>
      </div>

      {/* Result / Status */}
      <div className="text-xs text-right min-w-35">
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
