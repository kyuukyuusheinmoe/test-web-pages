import { nav, SOURCE_URL, topBar, type NavItem } from "@/content/brooklyn";

function Wordmark() {
  return (
    <a href="#top" className="flex items-baseline gap-2 leading-none">
      <span className="font-display text-2xl font-medium italic">Kaya Bliss</span>
      <span className="text-[10px] font-semibold tracking-[0.3em] text-muted uppercase">Dispensary</span>
    </a>
  );
}

function DesktopItem({ item }: { item: NavItem }) {
  if ("href" in item) {
    return (
      <a href={item.href} className="rounded-full px-3 py-2 transition hover:bg-paper-2">
        {item.label}
      </a>
    );
  }
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-paper-2">
        {item.label}
        <span aria-hidden className="text-xs text-muted transition group-hover:rotate-180">
          ▾
        </span>
      </button>
      <div className="invisible absolute top-full left-0 z-30 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="min-w-56 rounded-2xl border border-line bg-paper p-2 shadow-xl">
          {item.children.map((child) => (
            <li key={child.href}>
              <a href={child.href} className="block rounded-xl px-3 py-2 transition hover:bg-paper-2">
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="bg-ink px-4 py-2 text-center text-xs text-paper/80">
        <strong className="text-saffron">Test fixture.</strong> Text mirrored from{" "}
        <a href={SOURCE_URL} className="underline underline-offset-2 hover:text-paper">
          kayablissnyc.com/location/brooklyn-ny
        </a>{" "}
        for compliance testing. Not affiliated with or operated by Kaya Bliss Dispensary.
      </div>

      <div className="bg-saffron text-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-sm sm:px-6">
          <label className="flex items-center gap-2">
            <span className="font-semibold">{topBar.currentlyShopping}</span>
            <select
              defaultValue="Bay Ridge, NY"
              className="rounded-full border border-ink/20 bg-paper/60 px-3 py-1 text-sm"
              aria-label={topBar.selectLabel}
            >
              <option disabled value="">
                {topBar.selectLabel}
              </option>
              {topBar.locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </label>
          <a href={topBar.noticeHref} className="font-medium hover:underline">
            {topBar.notice}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <Wordmark />

          <nav aria-label="Main" className="hidden items-center text-sm font-medium lg:flex">
            {nav.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </nav>

          <details className="group relative lg:hidden">
            <summary className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm font-semibold">
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 z-30 mt-2 max-h-[75vh] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-line bg-paper p-3 shadow-xl"
            >
              {nav.map((item) =>
                "href" in item ? (
                  <a key={item.label} href={item.href} className="block rounded-xl px-3 py-2 font-medium hover:bg-paper-2">
                    {item.label}
                  </a>
                ) : (
                  <details key={item.label}>
                    <summary className="cursor-pointer rounded-xl px-3 py-2 font-medium hover:bg-paper-2">
                      {item.label} <span className="text-muted">+</span>
                    </summary>
                    <ul className="mb-2 ml-3 border-l border-line pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a href={child.href} className="block rounded-lg px-3 py-1.5 text-sm hover:bg-paper-2">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ),
              )}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
