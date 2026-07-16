import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import StatBlock from '../components/StatBlock'
import TeamCard from '../components/TeamCard'
import { byName } from '../lib/team'
import { usePageTitle } from '../lib/usePageTitle'

// Social-media formats — each tile is a portrait "post" whose title is baked
// into the image; the caption below restates it for screen readers and search.
const FORMATS = [
  {
    img: 'soc-6.jpg',
    title: 'Index Insider',
    desc: 'We take our audience behind the scenes of the index construction process. From the first screening call to the final weighting decision, Index Insider documents how a real financial product gets built, step by step, by students.',
  },
  {
    img: 'soc-5.jpg',
    title: 'Student meets Professional',
    desc: 'Short-form interviews with finance professionals, fund managers, and industry insiders. Real questions, real answers, no fluff. A window into careers and perspectives beyond the lecture hall.',
  },
  {
    img: 'soc-4.jpg',
    title: 'Market in 60',
    desc: 'One market development. Sixty seconds. Every week we break down what moved markets, why it matters, and what to watch next. Fast enough to watch between lectures, sharp enough to actually learn something.',
  },
  {
    img: 'soc-3.jpg',
    title: 'Finance 101',
    desc: 'Not everyone starts with a Bloomberg terminal. Finance 101 breaks down core concepts, from duration to derivatives, in plain language. Built for students and everyone who is just getting started.',
  },
]

const EVENTS = [
  { img: 'soc-8.jpg', alt: 'FS Student Hedge Fund members networking at an event' },
  { img: 'soc-10.jpg', alt: 'Members socialising at an evening fund event' },
]

export default function Social() {
  usePageTitle('Media & Community')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 md:pt-16">
        <h1 className="font-display text-display text-navy">Media &amp; Community</h1>
        <p className="mt-6 max-w-3xl text-lead text-navy/80">
          Reach isn't a coincidence, we build it. Our social media platforms document the work of the initiative
          throughout the year — from investment research and educational content to member life and events — turning
          what happens inside the Hedge Fund, Trading &amp; Derivatives, and Index Construction departments into content
          people actually want to follow. From explaining how an index gets built to 60-second market updates, we make
          finance accessible to a student audience and beyond.
        </p>
      </section>
      <div className="container-page mt-8 md:mt-12">
        <img
          src={A('soc-1.jpg')}
          alt=""
          className="h-[34vw] max-h-[480px] min-h-[200px] w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Stats */}
      <section className="container-page py-14 md:py-20">
        <div className="grid grid-cols-2 gap-6 border-y border-navy/10 py-10 sm:grid-cols-4 sm:gap-10">
          <StatBlock value="~1,000" label="Followers" />
          <StatBlock value="12,000+" label="Views / Month" />
          <StatBlock value="1,600+" label="Reach / Month" />
          <StatBlock value="850+" label="Avg. Post Reach" />
        </div>
      </section>

      {/* Our Formats */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Formats</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FORMATS.map((f) => (
              <article
                key={f.title}
                className="flex flex-col overflow-hidden border border-navy/10 bg-white"
              >
                <img
                  src={A(f.img)}
                  alt={`${f.title} — FS Student Hedge Fund social format`}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-h3 font-bold text-navy">{f.title}</h3>
                  <p className="mt-3 text-navy/70">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Events */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Our Events</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {EVENTS.map((e) => (
            <img
              key={e.img}
              src={A(e.img)}
              alt={e.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* The Team Behind */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">The Team Behind</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr_1fr]">
            <img
              src={A('soc-9.jpg')}
              alt="The FS Student Hedge Fund team at a Frankfurt School event"
              className="aspect-[4/3] w-full object-cover lg:h-full lg:aspect-auto"
              loading="lazy"
            />
            {byName('Helena Morris', 'Linh Pham').map((m) => (
              <TeamCard key={m.name} m={m} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — hairline divider separates it from the footer's identical navy band */}
      <section className="border-b border-white/10 bg-navy text-white">
        <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <h2 className="font-display text-h1 font-bold">More Into Content Than Spreadsheets?</h2>
          <Button to="/contact" variant="light">
            Apply
          </Button>
        </Container>
      </section>
    </>
  )
}
