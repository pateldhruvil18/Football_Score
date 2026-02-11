import dayjs from "dayjs";
import { useState } from "react";

export default function DateTabs({ selectedDate, onDateChange }) {
  const [open, setOpen] = useState(false);

  const days = Array.from({ length: 7 }).map((_, i) => {
    const date = dayjs().add(i - 3, "day");
    return {
      label: date.format("ddd"),
      day: date.format("DD"),
      full: date.format("YYYY-MM-DD"),
      isToday: date.isSame(dayjs(), "day"),
    };
  });

  return (
    <>
      {/* DATE TABS */}
      <div
        className="
          flex
          items-center
          gap-2
          mb-4
          overflow-x-auto
          scrollbar-hide
          py-1
        "
      >
        {days.map((d) => {
          const active = d.full === selectedDate;

          return (
            <button
              key={d.full}
              onClick={() => onDateChange(d.full)}
              className={`
                px-3
                sm:px-4
                py-2
                rounded-lg
                text-xs
                text-center
                min-w-[64px]
                shrink-0
                ${
                  active
                    ? "border border-lime-500 text-lime-500 font-semibold"
                    : "bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]"
                }
              `}
            >
              <div>{d.label}</div>
              <div className="text-sm">{d.day}</div>
              {d.isToday && (
                <div className="text-[10px] text-lime-400">
                  Today
                </div>
              )}
            </button>
          );
        })}

        {/* Calendar Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            px-3
            sm:px-4
            py-2
            rounded-lg
            border
            border-lime-500
            bg-[#1e1e1e]
            text-xs
            shrink-0
            hover:bg-[#2a2a2a]
          "
        >
          📅 View Calendar
        </button>
      </div>

      {/* CALENDAR MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              relative
              bg-[#181818]
              rounded-xl
              p-5
              w-full
              max-w-xs
              border
              border-[#2a2a2a]
              shadow-xl
            "
          >
            <h3 className="text-sm font-semibold mb-4 text-center">
              Select Date
            </h3>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                onDateChange(e.target.value);
                setOpen(false);
              }}
              className="
                w-full
                bg-[#1e1e1e]
                text-white
                px-4
                py-2
                rounded-lg
                border
                border-[#2a2a2a]
                focus:outline-none
                focus:border-lime-500
              "
            />

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-xs text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
