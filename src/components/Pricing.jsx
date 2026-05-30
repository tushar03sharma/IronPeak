import { useState } from "react"

const plans = [
  {
    id: "basic",
    name: "Iron",
    price: "1,499",
    period: "per month",
    tag: null,
    description: "Everything you need to get started and stay consistent.",
    features: [
      "Full gym access",
      "Locker room & showers",
      "Group classes (4/month)",
      "Fitness assessment",
      "App access",
    ],
    notIncluded: [
      "Personal training sessions",
      "Nutrition consultation",
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Peak",
    price: "2,999",
    period: "per month",
    tag: "Most Popular",
    description: "For serious athletes who want results, not just access.",
    features: [
      "Full gym access",
      "Locker room & showers",
      "Unlimited group classes",
      "4 PT sessions/month",
      "Nutrition consultation",
      "App access + analytics",
      "Priority booking",
    ],
    notIncluded: [],
    cta: "Join Peak",
  },
  {
    id: "elite",
    name: "Elite",
    price: "5,499",
    period: "per month",
    tag: "All Inclusive",
    description: "Complete coaching. For those who treat fitness like a profession.",
    features: [
      "Full gym access",
      "Locker room & showers",
      "Unlimited group classes",
      "Unlimited PT sessions",
      "Monthly body composition scan",
      "Custom meal planning",
      "Recovery & mobility sessions",
      "24/7 coach WhatsApp access",
    ],
    notIncluded: [],
    cta: "Go Elite",
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7L5.5 10.5L12 3.5" stroke="#d4f247" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 3L11 11M11 3L3 11" stroke="#ffffff30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PricingCard({ plan, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative flex flex-col p-8 cursor-pointer transition-all duration-300 border
        ${isActive
          ? "bg-[#d4f247] border-[#d4f247] text-black"
          : "bg-transparent border-white/10 text-[#f0ece4] hover:border-white/30"
        }
      `}
    >

      {/* TAG */}
      {plan.tag && (
        <span className={`
          absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 border
          ${isActive ? "border-black/20 text-black" : "border-[#d4f247]/40 text-[#d4f247]"}
        `}>
          {plan.tag}
        </span>
      )}

      {/* PLAN NAME */}
      <p className={`text-xs uppercase tracking-[0.3em] mb-2 ${isActive ? "text-black/60" : "text-[#d4f247]"}`}>
        {plan.name}
      </p>

      {/* PRICE */}
      <div className="flex items-end gap-1 mb-2">
        <span className="text-xs mt-1 mb-1">₹</span>
        <span
          className="text-6xl leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {plan.price}
        </span>
      </div>
      <p className={`text-xs uppercase tracking-widest mb-6 ${isActive ? "text-black/50" : "text-[#f0ece4]/30"}`}>
        {plan.period}
      </p>

      {/* DIVIDER */}
      <div className={`w-full h-px mb-6 ${isActive ? "bg-black/20" : "bg-white/10"}`} />

      {/* DESCRIPTION */}
      <p className={`text-sm leading-relaxed mb-6 ${isActive ? "text-black/70" : "text-[#f0ece4]/50"}`}>
        {plan.description}
      </p>

      {/* FEATURES */}
      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <CheckIcon />
            <span className={isActive ? "text-black" : "text-[#f0ece4]/80"}>{feature}</span>
          </li>
        ))}
        {plan.notIncluded.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <CrossIcon />
            <span className={isActive ? "text-black/40" : "text-[#f0ece4]/20"}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`
          mt-8 w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200
          ${isActive
            ? "bg-black text-[#d4f247] hover:bg-[#111]"
            : "bg-transparent border border-white/20 text-[#f0ece4] hover:border-[#d4f247] hover:text-[#d4f247]"
          }
        `}
      >
        {plan.cta}
      </button>

    </div>
  )
}

function Pricing() {
  const [activePlan, setActivePlan] = useState("pro")

  return (
    <section id="pricing" className="bg-[#0a0a0a] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="block w-8 `h-[2px]` bg-[#d4f247]" />
            <p className="text-[#d4f247] uppercase tracking-[0.3em] text-xs">Membership</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#f0ece4] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Simple
              <br />
              <span className="text-[#d4f247]">Pricing.</span>
            </h2>
            <p className="text-[#f0ece4]/40 text-sm max-w-xs leading-relaxed md:text-right">
              No hidden fees. No annual lock-ins. Cancel anytime — but you won't want to.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isActive={activePlan === plan.id}
              onClick={() => setActivePlan(plan.id)}
            />
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <p className="text-center text-[#f0ece4]/20 text-xs uppercase tracking-widest mt-10">
          All plans include GST · Prices in INR · First week free for new members
        </p>

      </div>
    </section>
  )
}

export default Pricing