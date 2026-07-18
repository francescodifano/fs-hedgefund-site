import { Link } from 'react-router-dom'
import Container from './Container'
import TeamCard from './TeamCard'
import { byName } from '../lib/team'
import { DEPARTMENTS } from '../lib/nav'

// Shared sections for every department page: mission band, department leads,
// cross-navigation to the other departments, and a join CTA.

export function MissionBand({ children }: { children: string }) {
  return (
    <section className="border-b border-white/10 bg-navy text-white">
      <Container className="py-14 md:py-20">
        <p className="font-sans text-sm font-bold tracking-wide text-white/60">Our mission</p>
        <p className="mt-4 max-w-4xl font-display text-h2 font-bold">{children}</p>
      </Container>
    </section>
  )
}

export function DeptLeads({ names }: { names: string[] }) {
  const leads = byName(...names)
  if (!leads.length) return null
  return (
    <section className="container-page py-16 md:py-24">
      <h2 className="font-display text-h1 font-bold text-navy">Department Leads</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {leads.map((m) => (
          <TeamCard key={m.name} m={m} />
        ))}
      </div>
      <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-sans font-extrabold text-navy transition-transform hover:translate-x-1">
        Meet the whole team <span aria-hidden>→</span>
      </Link>
    </section>
  )
}

export function OtherDepartments({ current }: { current: string }) {
  const others = DEPARTMENTS.filter((d) => d.to !== current)
  return (
    <section className="bg-mist py-16 md:py-24">
      <Container>
        <h2 className="font-display text-h1 font-bold text-navy">Explore the other departments</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {others.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group flex items-center justify-between border border-navy/10 bg-white p-6 transition-colors hover:border-navy/30"
            >
              <span className="font-display text-h3 font-bold text-navy">{d.label}</span>
              <span aria-hidden className="font-sans font-extrabold text-navy transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Same design as the homepage's closing CTA (white, serif navy heading, navy
// box button) — only the wording differs per department.
export function JoinCta({ dept }: { dept: string }) {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-h1 font-bold text-navy">Interested in {dept}?</h2>
        <Link
          to="/contact"
          className="bg-navy px-16 py-6 font-sans text-2xl font-extrabold text-white transition-opacity hover:opacity-90"
        >
          Apply
        </Link>
      </div>
    </section>
  )
}
