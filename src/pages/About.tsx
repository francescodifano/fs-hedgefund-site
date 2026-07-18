import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import TeamCard from '../components/TeamCard'
import { TEAM } from '../lib/team'
import { usePageTitle } from '../lib/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <>
      {/* Hero, mirroring the homepage: serif heading left, solid-navy lead + Apply right */}
      <section className="container-page pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">
            Serious About Finance?
            <br />
            So Are We.
          </h1>
          <div>
            <p className="text-lead text-navy">
              Frankfurt School's student-managed investment fund, where academic rigor meets real capital.
            </p>
            <div className="mt-8">
              <Button to="/contact">Apply</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team photo with the navy band bleeding in from the viewport's left edge,
          straddling the image bottom (same treatment as the homepage hero) */}
      <div className="relative z-10 mt-12 md:mt-20">
        {/* image layered above the band (band peeks out left and below, unchanged position) */}
        <div className="container-page relative z-10">
          <img
            src={A('team-hero.jpg')}
            alt="The FS Student Hedge Fund team"
            className="h-[42vw] max-h-[600px] min-h-[220px] w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div aria-hidden className="absolute -bottom-10 left-0 z-0 hidden h-28 w-[70vw] max-w-[1054px] bg-navy md:block" />
      </div>

      {/* Mission (extra top padding clears the band overhang) */}
      <section className="bg-mist pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Developing Capital Markets Expertise</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lead text-navy/85">
            <p>
              FS Student Hedge Fund is Frankfurt School's student-managed investment initiative; a selective team
              operating across three departments: Hedge Fund, Trading &amp; Derivatives, and Index Construction.
              Together, we apply institutional-grade strategies to real markets, from developing macro theses and
              managing derivative portfolios to constructing structured indices in collaboration with industry
              partners like Solactive and UniCredit.
            </p>
            <p>
              Our members don't just study markets, they research them, model them, and take positions in them. We
              exist to bridge the gap between academic rigor and real-world capital markets practice, developing the
              next generation of investment talent from the ground up.
            </p>
          </div>
        </Container>
      </section>

      {/* Meet the team */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Meet the Team</h2>
        <p className="mt-4 max-w-2xl text-lead text-navy/70">
          A selective team of students operating across our departments, building real financial products together.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <li key={m.name}>
              <TeamCard m={m} eager />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
