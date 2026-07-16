import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

// Leadership team — real members from the live FS Student Hedge Fund site,
// ordered President → Co-President → department heads → advisor.
const TEAM = [
  { name: 'Tarik Asaad', role: 'President & Founding Member', bg: 'BSc Computational Business Analytics, BSc Mathematics', img: 'team-tarik.jpg' },
  { name: 'Berke Çiçek', role: 'Co-President & Founding Member', bg: 'BSc Management, Philosophy, Economics', img: 'team-berke.jpg' },
  { name: 'Vincent Ogrodowczyk', role: 'Head of Index Construction', bg: 'BSc Business Administration', img: 'team-vincent.jpg' },
  { name: 'David Wunderlich', role: 'Head of Index Construction', bg: 'BSc Business Administration', img: 'team-david.jpg' },
  { name: 'Beliz Hyuseinova', role: 'Head of Trading & Derivatives', bg: 'BSc Computational Business Analytics', img: 'team-beliz.jpg' },
  { name: 'Francesco di Fano', role: 'Head of Hedge Fund', bg: 'MSc Finance', img: 'team-francesco.jpg' },
  { name: 'Julius Jagland', role: 'Head of Hedge Fund', bg: 'BSc Business Administration', img: 'team-julius.jpg' },
  { name: 'Tonio Hasler', role: 'Head of Quantitative Team', bg: 'BSc Computational Business Analytics, BSc Physics', img: 'team-tonio.jpg' },
  { name: 'Helena Morris', role: 'Head of External Relations & Marketing', bg: 'BSc Management, Philosophy, Economics', img: 'team-helena.jpg' },
  { name: 'Linh Pham', role: 'Head of External Relations & Marketing', bg: 'BSc Business Administration', img: 'team-linh.jpg' },
  { name: 'Conrad Chen', role: 'Advisor & Founding Member', bg: 'BSc Business Administration', img: 'team-conrad.jpg' },
]

export default function About() {
  usePageTitle('About')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">
            Serious About Finance?
            <br />
            So Are We.
          </h1>
          <div>
            <p className="text-lead text-navy/80">
              Frankfurt School's student-managed investment fund — where academic rigor meets real capital.
            </p>
            <div className="mt-8">
              <Button to="/contact">Apply</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Developing Capital Markets Expertise</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lead text-navy/85">
            <p>
              FS Student Hedge Fund is Frankfurt School's student-managed investment initiative; a selective team
              operating across three departments: Hedge Fund, Trading &amp; Derivatives, and Index Construction.
              Together, we apply institutional-grade strategies to real markets — from developing macro theses and
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
          A selective team of students operating across our departments — building real financial products, together.
        </p>

        <figure className="mt-10">
          <img
            src={A('team-hero.jpg')}
            alt="The FS Student Hedge Fund team"
            className="aspect-[16/7] w-full object-cover"
            loading="lazy"
          />
        </figure>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <li key={m.name} className="group flex h-full flex-col">
              <div className="overflow-hidden">
                <img
                  src={A(m.img)}
                  alt={m.name}
                  className="aspect-[4/5] w-full object-cover object-[50%_40%] transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              {/* flex-1 equalises caption heights so row bottoms align despite wrapping */}
              <div className="flex-1 bg-navy px-5 py-4 text-white">
                <div className="font-sans font-extrabold">{m.name}</div>
                <div className="text-sm text-white/80">{m.role}</div>
                <div className="mt-1 text-xs text-white/55">{m.bg}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
