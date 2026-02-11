export default function Banner() {
  return (
    <div
      className="
        w-full
        rounded-xl
        overflow-hidden
        mb-4
        bg-[#1e1e1e]
        h-40
        sm:h-48
        md:h-56
        lg:h-64
      "
    >
      <img
        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80"
        alt="Football Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
