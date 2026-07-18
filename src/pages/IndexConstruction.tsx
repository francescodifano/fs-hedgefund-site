import type { ReactNode } from 'react'
import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import StatBlock from '../components/StatBlock'
import { usePageTitle } from '../lib/usePageTitle'
import { MissionBand, DeptLeads, OtherDepartments, JoinCta } from '../components/DeptSections'

const STEPS = [
  { n: '01', title: 'Universe Definition', desc: 'Defining the eligible security universe based on market, sector, and liquidity criteria. Clear inclusion and exclusion rules ensure a transparent and replicable starting point.' },
  { n: '02', title: 'Methodology Design', desc: 'Developing the weighting scheme, selection rules, and rebalancing frequency, designed to capture specific exposures while maintaining investability and minimizing turnover.' },
  { n: '03', title: 'Backtesting & Analysis', desc: 'Rigorous historical simulation to evaluate index behaviour across market regimes. Performance, risk characteristics, and factor exposures are analysed to validate the methodology.' },
  { n: '04', title: 'Maintenance & Rebalancing', desc: 'Ongoing index maintenance: periodic rebalancing, corporate action handling, and methodology reviews to ensure continued accuracy and relevance.' },
]

// Flow chart nodes — the structure from the Solactive pitch deck: three internal
// stages, then the two partners who calculate and issue the product.
const FLOW: { title: string; desc: string; partner?: boolean }[] = [
  { title: 'Market Screening', desc: 'Identify global markets' },
  { title: 'Asset Selection', desc: 'Deep-dive analysis and valuation' },
  { title: 'Structuring Desk', desc: 'Weighting and index construction' },
  { title: 'Solactive', desc: 'Index calculation and licensing as a tradable underlying', partner: true },
  { title: 'Issuance by UniCredit', desc: 'Structuring into a tradable certificate', partner: true },
]

const INDEX_SPECS: [string, string][] = [
  ['Topic', 'Global Energy Value Chain'],
  ['Geography', 'Global'],
  ['Weighting', 'Market Cap'],
  ['Benchmark', 'MSCI World'],
  ['Asset Selection', 'FSHF Internal'],
  ['Calculation', 'Solactive'],
  ['Issuance', 'UniCredit'],
]

function FlowArrow() {
  return (
    <div aria-hidden className="flex items-center justify-center text-2xl font-bold text-navy/50">
      <span className="lg:hidden">↓</span>
      <span className="hidden lg:block">→</span>
    </div>
  )
}

function FlowBox({ title, desc, partner }: { title: string; desc: string; partner?: boolean }) {
  return (
    <div className={`flex-1 p-5 text-center lg:text-left ${partner ? 'bg-navy text-white' : 'border border-navy/20 bg-white text-navy'}`}>
      <div className="font-sans font-extrabold">{title}</div>
      <div className={`mt-1 text-sm ${partner ? 'text-white/80' : 'text-navy/70'}`}>{desc}</div>
    </div>
  )
}

// Index Construction — the richest department page: hero, intro, stats, process,
// flow chart, index banner, then the shared department sections.
export default function IndexConstruction() {
  usePageTitle('Index Construction')
  const flow: ReactNode[] = []
  FLOW.forEach((n, i) => {
    if (i > 0) flow.push(<FlowArrow key={`a${i}`} />)
    flow.push(<FlowBox key={n.title} {...n} />)
  })

  return (
    <article>
      <section className="relative">
        <img
          src={A('indexconstruction-3.jpg')}
          alt=""
          className="h-[48vw] max-h-[520px] min-h-[240px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/10" />
        {/* Name band: left-aligned with the content grid, straddling the image's
            bottom edge (half over the photo, half over the white area) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
          <div className="container-page">
            <h1 className="inline-block bg-navy px-8 py-5 font-display text-h1 font-bold text-white sm:px-12 sm:py-6">Index Construction</h1>
          </div>
        </div>
      </section>

      <section className="container-page pt-28 pb-16 md:pt-36 md:pb-24">
        <p className="font-sans text-sm font-bold tracking-wide text-navy/60">Department 01</p>
        <div className="mt-6 max-w-4xl space-y-6 text-lead text-navy/85">
          <p>
            The Index Construction department translates market insights into investable strategies. Our members
            analyze financial markets, identify opportunities, and develop thematic baskets by selecting relevant
            underlyings across asset classes such as equities, commodities, and alternatives.
          </p>
          <p>
            These baskets are then transformed into structured indices with defined weighting methodologies in
            collaboration with our partner Solactive. Building on this, we work with UniCredit to structure tailored
            financial products, bringing our ideas from research into real-world market applications.
          </p>
          <p className="font-display text-h3 font-bold text-navy">
            In partnership with Solactive and UniCredit, we build real financial products, not simulations.
          </p>
        </div>
      </section>

      {/* Real numbers from the Solactive pitch deck */}
      <section className="container-page pb-16 md:pb-20">
        <div className="grid grid-cols-2 gap-6 border-y border-navy/10 py-10 sm:grid-cols-4 sm:gap-10">
          <StatBlock value="30" label="Members" />
          <StatBlock value="1" label="Demo Index" />
          <StatBlock value="30+" label="Companies Analysed" />
          <StatBlock value="5" label="Sectors Covered" />
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Process</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-navy/20 pt-5">
                <div className="font-display text-3xl font-bold text-navy/60">{s.n}</div>
                {/* two-line reserve keeps the body paragraphs aligned across the 4-up row */}
                <h3 className="mt-2 font-display text-h3 font-bold text-navy lg:min-h-[2lh]">{s.title}</h3>
                <p className="mt-2 text-navy/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Flow chart: from research to a tradable product */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">From Research to Tradable Product</h2>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4">{flow}</div>
        <p className="mt-8 max-w-3xl text-navy/70">
          In parallel, events and social media content accompany the whole process in collaboration with External
          Relations.
        </p>
      </section>

      {/* Index banner: FSHF Energy Value Chain + performance chart */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <p className="font-sans text-sm font-bold tracking-wide text-navy/60">Past Indices</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-navy">FSHF Energy Value Chain</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <figure>
              <img
                src={A('ic-performance.jpg')}
                alt="Performance of the FSHF Energy Value Chain index against its benchmark"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm font-semibold text-navy/70">Performance</figcaption>
            </figure>
            <dl className="divide-y divide-navy/10 border-y border-navy/10">
              {INDEX_SPECS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="font-sans font-extrabold text-navy">{k}</dt>
                  <dd className="text-right text-navy/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <MissionBand>Construction of data-driven indices, from market screening to a tradable product.</MissionBand>
      <DeptLeads names={['Vincent Ogrodowczyk', 'David Wunderlich']} />
      <OtherDepartments current="/index-construction" />
      <JoinCta dept="Index Construction" />
    </article>
  )
}
