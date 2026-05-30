const programs = [
  {
    id: "01",
    title: "Powerlifting",
    description: "Build raw strength through squat, bench, and deadlift. Structured progressive overload for serious lifters.",
    tag: "Strength",
    days: "4 days/week",
  },
  {
    id: "02",
    title: "HIIT & Conditioning",
    description: "High intensity intervals designed to torch fat and build endurance. No fluff, just work.",
    tag: "Cardio",
    days: "3 days/week",
  },
  {
    id: "03",
    title: "Muscle Hypertrophy",
    description: "Volume-based training focused on muscle growth. Proven splits for maximum size gains.",
    tag: "Bodybuilding",
    days: "5 days/week",
  },
  {
    id: "04",
    title: "Athletic Performance",
    description: "Speed, agility, explosiveness. Built for athletes who want an edge in their sport.",
    tag: "Performance",
    days: "4 days/week",
  },
  {
    id: "05",
    title: "Mobility & Recovery",
    description: "Flexibility, joint health, and active recovery. The training most people skip — and shouldn't.",
    tag: "Recovery",
    days: "2 days/week",
  },
  {
    id: "06",
    title: "Beginner Foundation",
    description: "Learn movement patterns, build base fitness, and develop consistency. The right place to start.",
    tag: "Beginner",
    days: "3 days/week",
  },
]

// CHILD COMPONENT — takes props in, renders a card
function ProgramCard({ id, title, description, tag, days }) {
  return (
    <div className="group relative border border-white/10 p-8 flex flex-col gap-4 hover:border-[#d4f247]/60 transition-all duration-300 cursor-pointer">

      {/* TOP ROW: number + tag */}
      <div className="flex items-center justify-between">
        <span
          className="text-[#d4f247]/30 text-5xl leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {id}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#d4f247] border border-[#d4f247]/40 px-2 py-1">
          {tag}
        </span>
      </div>

      {/* TITLE */}
      <h3
        className="text-[#f0ece4] text-3xl uppercase group-hover:text-[#d4f247] transition-colors duration-300"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#f0ece4]/50 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* FOOTER ROW */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-[#f0ece4]/30 text-xs uppercase tracking-widest">{days}</span>
        <span className="text-[#d4f247] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Program →
        </span>
      </div>

    </div>
  )
}

// PARENT COMPONENT — owns the data, renders the grid
function Programs() {
  return (
    <section id="programs" className="bg-[#0a0a0a] px-6 md:px-16 py-24 md:py-32">

      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="block w-8 `h-[2px]` bg-[#d4f247]" />
              <p className="text-[#d4f247] uppercase tracking-[0.3em] text-xs">What We Offer</p>
            </div>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#f0ece4] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Pick Your
              <br />
              <span className="text-[#d4f247]">Program.</span>
            </h2>
          </div>

          <p className="text-[#f0ece4]/40 text-sm max-w-xs leading-relaxed md:text-right">
            Every program is coached, structured, and built around real results — not Instagram aesthetics.
          </p>

        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description}
              tag={program.tag}
              days={program.days}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programs