import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset as A } from '../lib/asset'
import { FOOTER_PAGES } from '../lib/nav'
import Button from './Button'

// Only platforms with a verified URL are listed (dead links don't ship).
// TikTok/LinkedIn/YouTube can be added here as soon as their URLs exist.
const SOCIALS = [
  { icon: 'icon-instagram.svg', label: 'Instagram', url: 'https://instagram.com/fs_studenthedgefund' },
]

// Report slides for the footer carousel (auto-advances every 5 seconds).
// 'backdrop' slides use the image full-bleed behind the title; 'document'
// slides show the report cover as a thumbnail beside the text instead
// (covers carry their own typography, so text must not overlap them).
const REPORTS: { img: string; title: string; cta: string; to?: string; href?: string; style: 'backdrop' | 'document' }[] = [
  { img: 'q1report.jpg', title: 'Q1 Report', cta: 'Get Report', to: '/newsroom', style: 'backdrop' },
  {
    img: 'research-seagate-cover.jpg',
    title: 'Seagate Equity Research',
    cta: 'Read the report',
    href: `${import.meta.env.BASE_URL}papers/seagate-technology-equity-research-2025.pdf`,
    style: 'document',
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
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {r.style === 'backdrop' ? (
              <div className="flex h-full flex-col justify-between p-8 sm:p-10">
                <img src={A(r.img)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 -z-10 bg-navy/40" />
                <h2 className="font-display text-4xl font-bold sm:text-5xl">{r.title}</h2>
                <Button to={r.to} href={r.href} variant="light" className="self-start">
                  {r.cta}
                </Button>
              </div>
            ) : (
              <div className="flex h-full items-stretch gap-6 bg-white/5 p-8 ring-1 ring-white/15 sm:p-10">
                <div className="flex flex-1 flex-col justify-between">
                  <h2 className="font-display text-3xl font-bold sm:text-4xl">{r.title}</h2>
                  <Button to={r.to} href={r.href} variant="light" className="self-start">
                    {r.cta}
                  </Button>
                </div>
                <img
                  src={A(r.img)}
                  alt=""
                  className="hidden max-w-[45%] self-center object-contain sm:block"
                  loading="lazy"
                />
              </div>
            )}
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
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded bg-white/10 transition-colors hover:bg-white/20">
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
