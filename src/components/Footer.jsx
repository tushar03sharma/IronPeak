const footerLinks = [
  {
    heading: "Programs",
    links: ["Powerlifting", "HIIT & Conditioning", "Hypertrophy", "Athletic Performance", "Mobility", "Beginners"],
  },
  {
    heading: "Gym",
    links: ["About IronPeak", "Our Trainers", "Facilities", "Gallery", "Blog"],
  },
  {
    heading: "Membership",
    links: ["Iron Plan", "Peak Plan", "Elite Plan", "Corporate Plans", "Student Discount"],
  },
  {
    heading: "Contact",
    links: ["Rohini, Delhi", "+91 98765 43210", "hello@ironpeak.in", "Open 6AM – 11PM", "Instagram"],
  },
]

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">

      {/* TOP CTA BAND */}
      <div className="px-6 md:px-16 py-16 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-[#d4f247] uppercase tracking-[0.3em] text-xs">Ready to start?</p>
          <h3
            className="text-[clamp(1.8rem,4vw,3.5rem)] leading-none text-[#f0ece4] uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Your first week
            <br />
            <span className="text-[#d4f247]">is on us.</span>
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="bg-[#d4f247] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white transition-colors duration-200 text-center"
          >
            Claim Free Week
          </a>
          <a
            href="tel:+919876543210"
            className="border border-white/20 text-[#f0ece4] font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-[#d4f247] hover:text-[#d4f247] transition-colors duration-200 text-center"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {footerLinks.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <p className="text-[#f0ece4] text-xs uppercase tracking-[0.2em] font-medium">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#f0ece4]/30 text-sm hover:text-[#d4f247] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* GIANT WORDMARK */}
      <div className="px-6 md:px-16 overflow-hidden border-t border-white/5 pt-8">
        <p
          className="`text-[#f0ece4]/[0.03]` uppercase leading-none select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(5rem, 20vw, 18rem)",
            letterSpacing: "-0.02em",
          }}
        >
          IronPeak
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="px-6 md:px-16 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#f0ece4]/20 text-xs uppercase tracking-widest">
          © 2025 IronPeak. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Refund Policy"].map((item) => (
            <a
              key={item}

              href="#"
              className="text-[#f0ece4]/20 text-xs uppercase tracking-widest hover:text-[#d4f247] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer