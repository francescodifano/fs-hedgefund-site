import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

// The report PDF is hosted on this site itself (public/papers), served under the
// GitHub Pages base path — no external redirect.
const REPORT_URL = `${import.meta.env.BASE_URL}papers/seagate-technology-equity-research-2025.pdf`

export default function Research() {
  usePageTitle('Research')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">Research</h1>
          <p className="text-lead text-navy/80">
            Working as one, our members combine rigorous analysis with disciplined execution.
          </p>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <figure className="max-w-4xl">
            <blockquote className="font-display text-h1 font-bold text-navy">
              &ldquo;Research is formalized curiosity. It is poking and prying with a purpose.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-lead text-navy/70">
              &mdash; <cite className="font-sans font-extrabold not-italic text-navy">Zora Neale Hurston</cite>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Latest research */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Latest Research</h2>
        <p className="mt-6 max-w-3xl text-lead text-navy/80">
          Our members publish in-depth equity research, distilling fundamental analysis into a single, readable report.
        </p>

        <article className="mt-10 grid overflow-hidden bg-navy text-white lg:grid-cols-2">
          <img
            src={A('research-2.jpg')}
            alt="Seagate Technology Holdings equity research"
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
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
