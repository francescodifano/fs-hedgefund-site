import { asset as A } from '../lib/asset'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

// The report PDF is hosted on this site itself (public/papers), served under the
// GitHub Pages base path — no external redirect.
const REPORT_URL = `${import.meta.env.BASE_URL}papers/seagate-technology-equity-research-2025.pdf`

export default function Research() {
  usePageTitle('Research')
  return (
    <>
      {/* Hero, mirroring the homepage: serif heading left, solid-navy lead right */}
      <section className="container-page pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">Research</h1>
          <p className="text-lead text-navy">
            Working as one, our members combine rigorous analysis with disciplined execution.
          </p>
        </div>
      </section>

      {/* Full-width image with the navy band bleeding in from the viewport's left
          edge, straddling the image bottom (same treatment as the homepage hero) */}
      <div className="relative mt-12 md:mt-20">
        <div className="container-page">
          <img
            src={A('research-3.jpg')}
            alt=""
            className="h-[38vw] max-h-[520px] min-h-[200px] w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div aria-hidden className="absolute -bottom-10 left-0 hidden h-28 w-[70vw] max-w-[1054px] bg-navy md:block" />
      </div>

      {/* Latest research (unchanged; extra top padding clears the band overhang) */}
      <section className="container-page pt-24 pb-16 md:pt-32 md:pb-24">
        <h2 className="font-display text-h1 font-bold text-navy">Latest Research</h2>
        <p className="mt-6 max-w-3xl text-lead text-navy/80">
          Our members publish in-depth equity research, distilling fundamental analysis into a single, readable report.
        </p>

        <article className="mt-10 grid overflow-hidden bg-navy text-white lg:grid-cols-2">
          <img
            src={A('research-seagate-cover.jpg')}
            alt="Cover of the Seagate Technology equity research report"
            className="aspect-[4/3] w-full object-cover object-left lg:aspect-auto lg:h-full"
            loading="lazy"
          />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="font-sans text-sm font-bold tracking-wide text-white/60">Equity Research · 2025</p>
            <h3 className="mt-4 font-display text-h2 font-bold">Seagate Technology Holdings PLC</h3>
            <p className="mt-4 text-white/75">
              In-depth equity research on Seagate Technology, a leading provider of data storage solutions, covering
              the business, its financials, and the valuation case behind our view.
            </p>
            <div className="mt-8">
              <Button href={REPORT_URL} variant="light">
                Read the report
              </Button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
