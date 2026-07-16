import { asset as A } from '../lib/asset'
import type { Member } from '../lib/team'

// One member card — used by the About grid and department "Leads" sections.
export default function TeamCard({ m, eager = false }: { m: Member; eager?: boolean }) {
  return (
    <div className="group flex h-full flex-col">
      <div className="overflow-hidden">
        <img
          src={A(m.img)}
          alt={m.name}
          className="aspect-[4/5] w-full object-cover object-[50%_40%] transition-transform duration-300 group-hover:scale-[1.03]"
          loading={eager ? undefined : 'lazy'}
        />
      </div>
      <div className="flex-1 bg-navy px-5 py-4 text-white">
        <div className="font-sans font-extrabold">{m.name}</div>
        <div className="text-sm text-white/80">{m.role}</div>
        <div className="mt-1 text-xs text-white/55">{m.bg}</div>
      </div>
    </div>
  )
}
