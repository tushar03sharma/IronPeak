import { useState } from "react"

const navLinks = ["Programs", "Trainers", "Pricing", "About"]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]">
      
      {/* LOGO */}
      <a href="#" className="text-[#d4f247] font-black text-2xl tracking-widest uppercase"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
        Iron<span className="text-white">Peak</span>
      </a>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[#f0ece4] text-sm uppercase tracking-widest hover:text-[#d4f247] transition-colors duration-200"
            >
             {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <a
        href="#pricing"
        className="hidden md:block bg-[#d4f247] text-black text-sm font-bold uppercase tracking-widest px-5 py-2 hover:bg-white transition-colors duration-200"
      >
        Join Now
      </a>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 flex flex-col px-6 py-6 gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#f0ece4] text-lg uppercase tracking-widest hover:text-[#d4f247] transition-colors"
            >
              {link}
            </a>
          ))}
          <a href="#pricing" className="bg-[#d4f247] text-black text-sm font-bold uppercase tracking-widest px-5 py-3 text-center">
            Join Now
          </a>
        </div>
      )}

    </nav>
  )
}

export default Navbar