import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset as A } from '../lib/asset'
import { FOOTER_PAGES } from '../lib/nav'
import Button from './Button'

const SOCIALS = [
  { icon: 'icon-instagram.svg', label: 'Instagram' },
  { icon: 'icon-tiktok.svg', label: 'TikTok' },
  { icon: 'icon-youtube.svg', label: 'YouTube' },
  { icon: 'icon-linkedin.svg', label: 'LinkedIn' },
]

// Report slides for the footer carousel (auto-advances every 5 seconds).
const REPORTS: { img: string; title: string; cta: string; to?: string; href?: string }[] = [
  { img: 'q1report.jpg', title: 'Q1 Report', cta: 'Get Report', to: '/newsroom' },
  {
    img: 'research-2.jpg',
    title: 'Seagate Equity Research',
    cta: 'Read the report',
    href: `${import.meta.env.BASE_URL}papers/seagate-technology-equity-research-2025.pdf`,
  },
]

function ReportCarousel() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REPORTS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div className="relative isolate min-h-[300px] overflow-hidden">
        {REPORTS.map((r, i) => (
          <div
            key={r.title}
            aria-hidden={i !== idx}
            className={`absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-700 sm:p-10 ${
              i === idx ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img src={A(r.img)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 -z-10 bg-navy/40" />
            <h2 className="font-display text-4xl font-bold sm:text-5xl">{r.title}</h2>
            <Button to={r.to} href={r.href} variant="light" className="self-start">
              {r.cta}
            </Button>
          </div>
        ))}
      </div>
      {/* Pagination dots on the navy footer background (not over the photo) */}
      <div className="mt-4 flex justify-center gap-2.5">
        {REPORTS.map((r, i) => (
          <button
            key={r.title}
            aria-label={`Show ${r.title}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}

// One responsive footer for the whole site. All footer text is white.
export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
        <ReportCarousel />

        {/* Link + contact columns */}
        <div className="grid gap-10 sm:grid-cols-2">
          <nav aria-label="Footer">
            <h3 className="font-sans text-xl font-extrabold">Pages</h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_PAGES.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-white transition-opacity hover:opacity-70">{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-sans text-xl font-extrabold">Contact</h3>
            <ul className="mt-5 space-y-3 text-white">
              <li className="flex gap-3">
                <ClockIcon />
                <span>Mon-Fri: 8:00am to 6:00pm</span>
              </li>
              <li className="flex gap-3">
                <PinIcon />
                <span>
                  Adickesallee 32-34, 60322
                  <br />
                  Frankfurt am Main, Germany
                </span>
              </li>
              <li className="flex gap-3">
                <MailIcon />
                <a href="mailto:info@fs-student-hedgefund.com" className="text-[15px] break-words transition-opacity hover:opacity-70">
                  info@fs-student-hedgefund.com
                </a>
              </li>
            </ul>

            <h3 className="mt-8 font-sans text-xl font-extrabold">Follow us</h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded bg-white/10 transition-colors hover:bg-white/20">
                  <img src={A(s.icon)} alt="" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const iconProps = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, className: 'mt-0.5 shrink-0' } as const
function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
