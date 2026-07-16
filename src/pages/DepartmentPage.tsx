import { asset as A } from '../lib/asset'
import { DEPARTMENTS_DATA } from '../lib/departments'
import { usePageTitle } from '../lib/usePageTitle'
import { MissionBand, DeptLeads, OtherDepartments, JoinCta } from '../components/DeptSections'

// Shared, responsive template for the department pages: image hero with a navy
// name band → About → mission statement → department leads → cross-nav → CTA.
export default function DepartmentPage({ slug }: { slug: string }) {
  const d = DEPARTMENTS_DATA[slug]
  usePageTitle(d.name)

  return (
    <article>
      <section className="relative">
        <img
          src={A(d.hero)}
          alt=""
          className="h-[48vw] max-h-[520px] min-h-[240px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="absolute inset-x-0 bottom-8 flex justify-center px-4 md:bottom-12">
          <h1 className="bg-navy px-6 py-4 text-center font-display text-h1 font-bold text-white sm:px-10">{d.name}</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        {/* Heading, rule and copy share one measure so the rule doesn't run into an empty right column */}
        <div className="max-w-4xl">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-navy/60">Department {d.num}</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-navy">About</h2>
          <div className="mt-5 h-px w-full bg-navy/15" />
          <div className="mt-8 space-y-5 text-lead text-navy/85">
            {d.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <MissionBand>{d.mission}</MissionBand>
      <DeptLeads names={d.leads} />
      <OtherDepartments current={`/${slug}`} />
      <JoinCta dept={d.name} />
    </article>
  )
}
