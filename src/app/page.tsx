import { AgeGate } from "@/components/age-gate";
import { NotifyForm } from "@/components/notify-form";
import { RichText } from "@/components/rich-text";
import { SiteHeader } from "@/components/site-header";
import {
  categories,
  collections,
  community,
  footer,
  hero,
  locations,
  notify,
  reviews,
  SOURCE_URL,
  story,
  storeStrip,
} from "@/content/brooklyn";

const TILE_TONES = [
  "bg-plum text-paper",
  "bg-saffron text-ink",
  "bg-sage text-ink",
  "bg-paper-2 text-ink",
  "bg-sage text-ink",
  "bg-paper-2 text-ink",
  "bg-plum text-paper",
  "bg-saffron text-ink",
];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold tracking-[0.25em] uppercase ${className}`}>{children}</p>;
}

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition group-hover:translate-x-1">
      →
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-8 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:pt-16">
      <div className="flex flex-col justify-center">
        <h1 className="max-w-xl text-xs font-semibold tracking-[0.2em] text-muted uppercase">{hero.h1}</h1>
        <p className="mt-6 font-display text-6xl leading-[0.95] font-medium tracking-tight sm:text-7xl lg:text-8xl">
          {hero.store}
        </p>
        <ul className="mt-8 grid gap-2 text-lg">
          <li>
            <a href={hero.addressHref} className="prose-link">
              {hero.address}
            </a>
          </li>
          <li>
            <a href={hero.phoneHref} className="prose-link">
              {hero.phone}
            </a>
          </li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          {hero.ctas.map((cta, i) => (
            <a
              key={cta.label}
              href={cta.href}
              className={
                i === 0
                  ? "group rounded-full bg-plum px-7 py-3.5 font-semibold text-paper transition hover:bg-plum-2"
                  : "group rounded-full border-2 border-ink px-7 py-3 font-semibold transition hover:bg-ink hover:text-paper"
              }
            >
              {cta.label} <Arrow />
            </a>
          ))}
        </div>
      </div>

      <div className="relative min-h-80 overflow-hidden rounded-[2.5rem] bg-plum p-8 text-paper sm:p-10">
        <svg aria-hidden viewBox="0 0 400 400" className="absolute -right-24 -bottom-24 h-[95%] opacity-90 sm:h-[105%]">
          <circle cx="250" cy="250" r="150" fill="var(--plum-2)" />
          <circle cx="250" cy="250" r="95" fill="var(--saffron)" />
          <path d="M250 120 C 300 190, 300 310, 250 380 C 200 310, 200 190, 250 120 Z" fill="var(--sage)" opacity="0.9" />
          <path d="M250 165 L 250 380" stroke="var(--plum)" strokeWidth="3" />
        </svg>
        <div className="relative flex h-full max-w-[58%] flex-col justify-between gap-10">
          <span aria-hidden className="block h-3 w-3 rounded-full bg-saffron" />
          <p className="font-display text-2xl leading-tight italic sm:text-4xl">{hero.valet}</p>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow className="text-plum-2">{categories.heading}</Eyebrow>
          <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{categories.subheading}</h2>
        </div>
        <a href={categories.shopAll.href} className="group font-semibold">
          {categories.shopAll.label} <Arrow />
        </a>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {categories.items.map((item, i) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`group flex aspect-[4/3] flex-col justify-between rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6 ${TILE_TONES[i]}`}
            >
              <span className="text-xs font-semibold opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-xl font-medium sm:text-3xl">{item.label}</span>
                <span className="mt-1 block text-sm font-semibold opacity-80">
                  {categories.cta} <Arrow />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Collections() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2">
      {collections.map((c, i) => (
        <article
          key={c.heading}
          className={`flex flex-col justify-between gap-8 rounded-[2rem] border border-line p-8 sm:p-10 ${i % 3 === 0 ? "bg-paper-2" : "bg-paper"}`}
        >
          <div>
            <h3 className="font-display text-3xl font-medium">{c.heading}</h3>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">{c.body}</p>
          </div>
          <a href={c.href} className="group w-fit rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper">
            {c.cta} <Arrow />
          </a>
        </article>
      ))}
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-plum py-20 text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow className="text-saffron">{reviews.eyebrow}</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{reviews.heading}</h2>
          </div>
          <a
            href={reviews.reviewLocations[0].leaveHref}
            className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            {reviews.leaveReview}
          </a>
        </div>

        <div className="mt-12 gap-4 sm:columns-2 lg:columns-3">
          {reviews.items.map((review) => (
            <figure key={review.author} className="mb-4 break-inside-avoid rounded-3xl bg-plum-2/70 p-6">
              <span aria-hidden className="block h-7 font-display text-5xl leading-none text-saffron">
                “
              </span>
              {review.title && <p className="font-display text-xl font-semibold">{review.title}</p>}
              <blockquote className="mt-2 leading-relaxed text-paper/90">{review.body}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-saffron">{review.author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 border-t border-paper/15 pt-8">
          <Eyebrow className="text-paper/60">{reviews.chooseLocation}</Eyebrow>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {reviews.reviewLocations.map((loc) => (
              <li key={loc.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-paper/15 p-4">
                <span className="font-semibold">{loc.name}</span>
                <span className="flex gap-4 text-sm">
                  <a href={loc.leaveHref} className="underline underline-offset-4 hover:text-saffron">
                    {reviews.leaveReview}
                  </a>
                  <a href={loc.moreHref} className="underline underline-offset-4 hover:text-saffron">
                    More Reviews
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Eyebrow className="text-plum-2">{locations.eyebrow}</Eyebrow>
      <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{locations.heading}</h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {locations.items.map((loc) => (
          <li key={loc.name} className="flex flex-col rounded-3xl border border-line bg-paper p-6">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-2xl font-medium">{loc.name}</h3>
              {loc.comingSoon && (
                <span className="shrink-0 rounded-full bg-saffron/30 px-2.5 py-1 text-xs font-semibold">{loc.comingSoon}</span>
              )}
            </div>
            <address className="mt-3 text-sm leading-relaxed text-muted not-italic">
              {loc.street}
              <br />
              {loc.city}
              {loc.phone && (
                <>
                  <br />
                  <a href={loc.phoneHref} className="font-medium text-ink hover:underline">
                    {loc.phone}
                  </a>
                </>
              )}
            </address>
            <dl className="mt-5 grid gap-3 border-t border-line pt-5 text-sm">
              <div>
                <dt className="font-semibold">Store Hours</dt>
                {loc.storeHours.map((h) => (
                  <dd key={h} className="text-muted">
                    {h}
                  </dd>
                ))}
              </div>
              <div>
                <dt className="font-semibold">Delivery Hours</dt>
                {loc.deliveryHours.map((h) => (
                  <dd key={h} className="text-muted">
                    {h}
                  </dd>
                ))}
              </div>
            </dl>
            <a href={loc.cta.href} className="group mt-auto w-fit pt-6 text-sm font-semibold text-plum-2">
              {loc.cta.label} <Arrow />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function Story() {
  return (
    <section className="border-y border-line bg-paper-2/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[18rem_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-plum-2">Contents</Eyebrow>
          <ol className="mt-4 grid gap-2 text-sm">
            {story.map((s, i) => (
              <li key={s.heading}>
                <a href={`#${slug(s.heading)}`} className="flex gap-3 text-muted hover:text-ink">
                  <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.heading}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="max-w-3xl">
          {story.map((s) => {
            const Heading = s.level;
            return (
              <section key={s.heading} id={slug(s.heading)} className="scroll-mt-28 border-b border-line py-8 first:pt-0 last:border-0">
                <Heading
                  className={`font-display font-medium ${s.level === "h2" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}
                >
                  {s.heading}
                </Heading>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-ink/85">
                    <RichText text={p} />
                  </p>
                ))}
              </section>
            );
          })}
        </article>
      </div>
    </section>
  );
}

function StoreStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <ul className="grid divide-y divide-line overflow-hidden rounded-3xl border border-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {storeStrip.map((s) => (
          <li key={s.street} className="flex items-center justify-between gap-3 p-5">
            <span>
              <span className="block font-semibold">{s.street}</span>
              <span className="text-sm text-muted">{s.city}</span>
            </span>
            <a href={s.href} className="group shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper">
              Shop Now <Arrow />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Community() {
  return (
    <section className="bg-saffron text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70">{community.seoH2}</h2>
          <h3 className="mt-2 text-xs font-semibold tracking-[0.2em] uppercase opacity-70">{community.seoH3}</h3>
          <p className="mt-8 font-display text-5xl leading-none font-medium sm:text-6xl">{community.follow}</p>
          <p className="mt-4 font-display text-2xl italic">{community.tagline}</p>
          <a
            href={community.instagram.href}
            className="mt-8 inline-flex rounded-full border-2 border-ink px-6 py-3 font-semibold transition hover:bg-ink hover:text-saffron"
          >
            {community.instagram.label}
          </a>
        </div>
        <div className="rounded-[2rem] bg-paper p-8 sm:p-10">
          <h3 className="font-display text-3xl font-medium">{community.heading}</h3>
          {community.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink/85">
              {p}
            </p>
          ))}
          <a href={community.cta.href} className="group mt-8 inline-block rounded-full bg-plum px-6 py-3 font-semibold text-paper">
            {community.cta.label} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Notify() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-8 rounded-[2rem] border border-line p-8 sm:p-10 lg:grid-cols-[1fr_2fr] lg:items-end">
        <div>
          <h2 className="font-display text-4xl font-medium">{notify.heading}</h2>
          <p className="mt-3 text-muted">{notify.body}</p>
        </div>
        <NotifyForm />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid gap-8 border-b border-paper/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {footer.stores.map((s) => (
            <li key={s.name} className="text-sm leading-relaxed">
              <p className="text-xs tracking-[0.2em] text-saffron uppercase">{s.region}</p>
              <p className="mt-1 font-display text-xl text-paper">{s.name}</p>
              <p className="mt-2">{s.address}</p>
              <p>{s.today}</p>
              {s.delivery.map((d) => (
                <p key={d}>{d}</p>
              ))}
              {s.license && <p className="mt-2 font-mono text-xs text-paper/60">{s.license}</p>}
              {s.phone && (
                <a href={s.phoneHref} className="mt-2 block hover:text-paper">
                  {s.phone}
                </a>
              )}
              <a href={s.orderHref} className="mt-3 inline-block font-semibold text-saffron hover:underline">
                {footer.orderOnline}
              </a>
            </li>
          ))}
        </ul>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
          {[footer.products, footer.info].map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="font-semibold text-paper">{group.heading}</p>
              <ul className="mt-3 grid gap-1.5 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-paper">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="text-sm leading-relaxed">
            <p className="font-mono text-xs text-paper/60">{footer.licenses}</p>
            <p className="mt-4 rounded-2xl border border-saffron/40 p-5 text-paper/85">
              <RichText text={footer.disclaimer} />
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/60">
          <p>
            {footer.copyright} |{" "}
            <a href={footer.privacy.href} className="hover:text-paper">
              {footer.privacy.label}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {footer.seo.map((t) => (
              <h4 key={t}>{t}</h4>
            ))}
            <span>{footer.servicesAreas}</span>
          </div>
        </div>
        <p className="mt-6 text-xs text-paper/40">
          Test fixture for compliance scanning. Copy mirrored from <a href={SOURCE_URL} className="underline">{SOURCE_URL}</a>;
          layout and visuals are independent and not affiliated with Kaya Bliss Dispensary.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Categories />
        <Collections />
        <Reviews />
        <Locations />
        <Story />
        <StoreStrip />
        <Community />
        <Notify />
      </main>
      <SiteFooter />
      <AgeGate />
    </>
  );
}
