import { useState } from "react";
import { ChevronRight, Bookmark } from "lucide-react";

export default function RightSidebar() {
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-80
        bg-[#181818]
        p-4
        h-full
        overflow-y-auto
        shrink-0
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base xl:text-lg font-semibold">
          Trending News
        </h2>
        <ChevronRight className="text-lime-400" />
      </div>

      {/* Featured News */}
      <div className="rounded-xl overflow-hidden mb-6 bg-[#1e1e1e]">
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80"
          alt="Featured news"
          className="w-full h-32 xl:h-40 object-cover"
        />

        <div className="p-3">
          <p className="text-sm font-semibold leading-snug">
            Results And Scores From The Premier League…!!!
          </p>

          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-400">
              5 Hours Ago
            </span>

            <Bookmark
              size={16}
              onClick={() => toggleBookmark("featured")}
              className={`cursor-pointer transition
                ${
                  bookmarked["featured"]
                    ? "text-lime-400 fill-lime-400"
                    : "text-gray-400"
                }`}
            />
          </div>
        </div>
      </div>

      {/* News List */}
      <div className="space-y-4">
        <NewsItem
          id={1}
          title="Here Are The Top 100 Players And Managers"
          time="10 Oct 2023, 06:00 AM"
          image="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=80"
          bookmarked={bookmarked[1]}
          onToggle={toggleBookmark}
        />
        <NewsItem
          id={2}
          title="Results And Scores From The Premier League…!!!"
          time="10 Oct 2023, 09:00 PM"
          image="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
          bookmarked={bookmarked[2]}
          onToggle={toggleBookmark}
        />
        <NewsItem
          id={3}
          title="Join Or Start A Competition Now!"
          time="10 Oct 2023, 02:04 PM"
          image="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=800&q=80"
          bookmarked={bookmarked[3]}
          onToggle={toggleBookmark}
        />
        <NewsItem
          id={4}
          title="Results And Scores From The Premier League…!!!"
          time="09 Oct 2023, 02:00 PM"
          image="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
          bookmarked={bookmarked[4]}
          onToggle={toggleBookmark}
        />
      </div>
    </aside>
  );
}

function NewsItem({ id, title, time, image, bookmarked, onToggle }) {
  return (
    <div className="flex gap-3 items-start">
      <img
        src={image}
        alt={title}
        className="w-14 h-14 xl:w-16 xl:h-16 rounded-lg object-cover shrink-0"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-snug truncate">
          {title}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {time}
        </p>
      </div>

      <Bookmark
        size={16}
        onClick={() => onToggle(id)}
        className={`cursor-pointer mt-1 transition
          ${
            bookmarked
              ? "text-lime-400 fill-lime-400"
              : "text-gray-400"
          }`}
      />
    </div>
  );
}
