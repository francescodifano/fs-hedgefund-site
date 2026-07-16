export default function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-bold text-navy sm:text-5xl">{value}</div>
      <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-navy/70">{label}</div>
    </div>
  )
}
