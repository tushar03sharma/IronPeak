function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden px-6 md:px-16 pt-24">

      {/* BACKGROUND GRAIN TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px"
        }}
      />

      {/* YELLOW VERTICAL ACCENT LINE */}
      <div className="absolute left-[52%] top-0 h-full `w-[2px]` bg-[#d4f247] opacity-20 hidden md:block" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: TEXT */}
        <div className="flex flex-col gap-6">

          {/* EYEBROW TAG */}
          <div className="flex items-center gap-3">
            <span className="block w-8 `h-[2px]` bg-[#d4f247]" />
            <p className="text-[#d4f247] uppercase tracking-[0.3em] text-xs font-medium">
              Delhi's Hardest Gym
            </p>
          </div>

          {/* MAIN HEADING */}
          <h1
            className="text-[clamp(3.5rem,10vw,8rem)] leading-none text-[#f0ece4] uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            No <span className="text-[#d4f247]">Limits.</span>
            <br />
            No
            <br />
            Excuses.
          </h1>

          {/* SUBTEXT */}
          <p className="text-[#f0ece4]/60 text-base md:text-lg max-w-md leading-relaxed">
            Real training. Real results. IronPeak is built for people who are done talking and ready to work.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-2">
            
            <a  href="#programs"
              className="bg-[#d4f247] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white transition-colors duration-200"
            >
              Start Training
            </a>
            
            <a  href="#trainers"
              className="border border-white/30 text-[#f0ece4] font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-[#d4f247] hover:text-[#d4f247] transition-colors duration-200"
            >
              Meet Trainers
            </a>
          </div>

        </div>

        {/* RIGHT: STATS BLOCK */}
        <div className="hidden md:flex flex-col justify-center gap-0 border-l border-white/10 pl-12">

          {[
            { number: "1200+", label: "Active Members" },
            { number: "14", label: "Expert Trainers" },
            { number: "6AM–11PM", label: "Open Daily" },
            { number: "8+", label: "Programs" },
          ].map((stat, index) => (
            <div
              key={index}
              className="py-8 border-b border-white/10 last:border-b-0"
            >
              <p
                className="text-[#d4f247] text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[#f0ece4]/50 uppercase tracking-widest text-xs mt-1">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM SCROLL HINT */}
      <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3 z-10">
        <div className="`w-[1px]` h-10 bg-white/20" />
        <p className="text-white/30 text-xs uppercase tracking-widest">Scroll</p>
      </div>

    </section>
  )
}

export default Hero