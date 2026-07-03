const companies = [
  'CloudBase Systems',
  'Vantage Analytics',
  'Lumio Health',
  'Apex Ventures',
  'Stackr IO',
  'NovaTech',
  'Bridgepoint Capital',
  'Meridian SaaS',
]

export function LogoMarquee() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="flex items-center">
        <div className="flex-shrink-0 border-r border-line px-5 py-5 sm:px-8 sm:py-6">
          <p className="eyebrow whitespace-nowrap">Trusted by forward-thinking businesses</p>
        </div>

        <div
          className="relative flex-1 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, #000 88%, transparent)',
          }}
        >
          <ul className="animate-marquee flex w-max items-center gap-10 py-5 pl-10 sm:py-6">
            {[...companies, ...companies].map((name, i) => (
              <li
                key={i}
                className="flex-shrink-0 whitespace-nowrap text-base font-medium text-faint sm:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
