import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

// The newsroom is intentionally sparse: one featured event this semester.
// Label/value pairs render as a semantic <dl> inside the card.
const EVENT_DETAILS = [
  { label: 'Time', value: 'Start: 13:00 (Entry at 12:30)' },
  { label: 'Location', value: 'FS Campus, Room 2A' },
  { label: 'Dress code', value: 'Business Casual' },
]

export default function Newsroom() {
  usePageTitle('Newsroom')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-14 md:pt-16 md:pb-20">
        <p className="font-display text-h3 italic text-navy/60">This Semester</p>
        <h1 className="mt-3 font-display text-display font-bold text-navy">Newsroom</h1>
        <p className="mt-6 max-w-2xl text-lead text-navy/80">
          Talks, firm visits, and everything else happening this semester at FS Student Hedge Fund.
        </p>
      </section>

      {/* Featured event */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Featured Event</h2>
          <div className="mt-5 h-px w-full bg-navy/15" />

          <div className="mt-10 grid overflow-hidden md:grid-cols-2">
            <img
              src={A('newsroom-1.jpg')}
              alt="Students at the J.P. Morgan firm visit"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full"
              loading="lazy"
            />
            <div className="flex flex-col bg-navy p-8 text-white md:p-12">
              <div className="flex items-center gap-5">
                <div className="shrink-0 text-center leading-none">
                  <div className="bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white">
                    Oct
                  </div>
                  <div className="bg-white px-4 py-2 font-display text-h3 font-bold text-navy">22</div>
                </div>
                <h3 className="font-display text-h2 font-bold">J.P. Morgan</h3>
              </div>

              <dl className="mt-8 space-y-5">
                {EVENT_DETAILS.map((d) => (
                  <div key={d.label} className="border-t border-white/15 pt-4">
                    <dt className="text-sm font-extrabold uppercase tracking-widest text-white/60">{d.label}</dt>
                    <dd className="mt-1 text-lead text-white/85">{d.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <Button to="/contact" variant="light">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
