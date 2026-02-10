import MatchRow from "./MatchRow";

export default function LeagueSection({ title, matches }) {
  return (
    <div className="mb-4">
      <div className="bg-[#1e1e1e] rounded-lg divide-y divide-[#2a2a2a]">
        {matches.length === 0 ? (
          <div className="py-10 text-center text-gray-400 text-sm">
            No matches available for this date
          </div>
        ) : (
          matches.map((match) => (
            <MatchRow key={match.id} match={match} />
          ))
        )}
      </div>
    </div>
  );
}
