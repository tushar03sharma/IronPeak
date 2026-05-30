const trainers = [
  {
    id: 1,
    name: "Eddie Hall",
    role: "Strength & Powerlifting",
    experience: "8 years",
    clients: "200+",
    specialty: "Competes nationally in IPF. Coached 3 state champions. His programming is brutal and it works.",
    instagram: "@eddie_lifts",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "HIIT & Conditioning",
    experience: "6 years",
    clients: "150+",
    specialty: "Former national sprinter. Designs conditioning programs that actually translate to real performance.",
    instagram: "@priya_runs",
  },
  {
    id: 3,
    name: "Chris Bumstead",
    role: "Bodybuilding & Hypertrophy",
    experience: "10 years",
    clients: "300+",
    specialty: "IFBB competitor. Knows muscle building science inside out. No bro-science, just evidence.",
    instagram: "@cbum_builds",
  },
  {
    id: 4,
    name: "Rohit Khatri",
    role: "Mobility & Rehabilitation",
    experience: "5 years",
    clients: "120+",
    specialty: "Sports physio background. Fixes the injuries other trainers create. Your joints will thank her.",
    instagram: "@rohit_mobility",
  },
]

// initials avatar — since we have no real images
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")

  return (
    <div className="w-full aspect-square bg-[#111] flex items-center justify-center">
      <span
        className="text-[#d4f247]/20 text-[8rem] leading-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {initials}
      </span>
    </div>
  )
}

function TrainerCard({ name, role, experience, clients, specialty, instagram }) {
  return (
    <div className="group relative overflow-hidden border border-white/10 hover:border-[#d4f247]/40 transition-colors duration-300">

      {/* LAYER 1 — BASE */}
      <Avatar name={name} />

      <div className="p-6 flex flex-col gap-1">
        <h3
          className="text-[#f0ece4] text-2xl uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-[#d4f247] text-xs uppercase tracking-widest">{role}</p>

        <div className="flex gap-6 mt-4">
          <div>
            <p className="text-[#f0ece4] text-lg font-bold">{experience}</p>
            <p className="text-[#f0ece4]/30 text-[10px] uppercase tracking-widest">Experience</p>
          </div>
          <div>
            <p className="text-[#f0ece4] text-lg font-bold">{clients}</p>
            <p className="text-[#f0ece4]/30 text-[10px] uppercase tracking-widest">Clients</p>
          </div>
        </div>
      </div>

      {/* LAYER 2 — HOVER OVERLAY */}
      <div className="absolute inset-0 bg-[#0a0a0a]/95 border border-[#d4f247]/30 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">

        <p className="text-[#d4f247] text-xs uppercase tracking-widest mb-3">{role}</p>

        <h3
          className="text-[#f0ece4] text-2xl uppercase mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {name}
        </h3>

        <p className="text-[#f0ece4]/60 text-sm leading-relaxed mb-6">
          {specialty}
        </p>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-[#f0ece4]/30 text-xs uppercase tracking-widest">{instagram}</span>
          <span className="text-[#d4f247] text-xs uppercase tracking-widest">Follow →</span>
        </div>

      </div>

    </div>
  )
}

function Trainers() {
  return (
    <section id="trainers" className="bg-[#0a0a0a] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="block w-8 `h-[2px]` bg-[#d4f247]" />
            <p className="text-[#d4f247] uppercase tracking-[0.3em] text-xs">The Team</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#f0ece4] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Trained By
              <br />
              <span className="text-[#d4f247]">The Best.</span>
            </h2>
            <p className="text-[#f0ece4]/40 text-sm max-w-xs leading-relaxed md:text-right">
              No influencers. No certificate collectors. Just coaches who've put in the work themselves.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trainers