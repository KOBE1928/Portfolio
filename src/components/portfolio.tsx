import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Dumbbell,
  FlaskConical,
  Goal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  LIFTS,
  PRINCIPLES,
  RECORD,
  SKILLS,
  STATS,
  SUBJECTS,
  WEEK,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const TAGS = ["All", "Basketball", "Training", "Academics", "Athletics"] as const;

function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="text-xs font-medium text-muted uppercase">
      <span className="tabular-nums tracking-normal text-accent">{index}</span>
      <span className="mx-3 text-subtle" aria-hidden="true">
        /
      </span>
      <span className="tracking-[0.2em]">{label}</span>
    </p>
  );
}

function Figure({
  src,
  alt,
  className,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-surface", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        crossOrigin="anonymous"
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-xs tracking-wide text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Portfolio() {
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]["id"]>("physics");
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");
  const [sent, setSent] = useState(false);

  const activeSubject = SUBJECTS.find((s) => s.id === subject) ?? SUBJECTS[0];
  const filtered = useMemo(
    () => (tag === "All" ? RECORD : RECORD.filter((item) => item.tag === tag)),
    [tag],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Fill every field before sending.");
      return;
    }
    const notes = JSON.parse(localStorage.getItem("rp-notes") || "[]") as unknown[];
    notes.push({ name, email, message, at: new Date().toISOString() });
    localStorage.setItem("rp-notes", JSON.stringify(notes));
    event.currentTarget.reset();
    setSent(true);
    toast.success("Note saved. I’ll read it on this device.");
  }

  return (
    <div id="top">
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src="/images/hero-court.jpg"
          alt="Empty indoor basketball court at night"
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-bg/20" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <div className="stagger-in max-w-3xl">
            <p className="text-xs font-medium tracking-[0.28em] text-accent uppercase">
              Student portfolio · 2026
            </p>
            <h1 className="mt-5 font-display text-[4.2rem] leading-[0.88] font-medium tracking-[-0.04em] text-fg italic sm:text-[6.5rem] md:text-[7.5rem]">
              Rudra
              <span className="block not-italic">Priye</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-fg/85 sm:text-lg">
              Class XI, section M1. Physics, Chemistry, Mathematics. A week split
              between a notebook, a hardwood floor, and a barbell.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#about">
                  Read the record
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#court">On the court</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-line">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "px-4 py-6 sm:px-6",
                i % 2 === 1 ? "border-l border-line" : "",
                i >= 2 ? "border-t border-line sm:border-t-0" : "",
                i >= 1 ? "sm:border-l sm:border-line" : "",
              )}
            >
              <dt className="text-xs tracking-[0.18em] text-muted uppercase">{stat.label}</dt>
              <dd className="mt-2 font-display text-2xl text-fg sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section id="about" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
          <div>
            <SectionKicker index="01" label="About" />
            <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">
              Ordinary days, done on purpose.
            </h2>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted">
              <p>
                I’m Rudra Priye, sixteen, in Class 11 section M1, studying PCM.
                This page is the version of an “about me” I actually recognise —
                not a list of adjectives, a record of how the week is spent.
              </p>
              <p>
                School takes the morning. Physics numericals take the evening.
                Basketball takes whatever is left in the legs. Strength training
                is the unglamorous middle: chalk, a notebook of loads, and the
                decision not to skip just because a test is coming. I am not
                trying to be two different people. The same habits have to work
                in a classroom and in a gym.
              </p>
              <p>
                I like problems with a clean answer. A free throw. A derivation.
                A lift done with a quiet back. The rest of life is noisier. Those
                three things keep the week honest.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-xs tracking-[0.18em] text-muted uppercase">Now</p>
                <p className="mt-2 text-sm leading-relaxed text-fg">
                  First year of senior secondary. Building a PCM foundation and
                  earning minutes as a wing on the school side.
                </p>
              </li>
              <li className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-xs tracking-[0.18em] text-muted uppercase">North star</p>
                <p className="mt-2 text-sm leading-relaxed text-fg">
                  Leave Class 12 with a body that holds up, a file of solved
                  problems I can defend, and a game that still looks like mine.
                </p>
              </li>
            </ul>
          </div>
          <Figure
            src="/images/study-desk.jpg"
            alt="Night study desk with physics notes and a lamp"
            caption="The desk after practice. Notes first, then sleep."
            className="min-h-80 lg:min-h-full"
          />
        </div>
      </section>

      <section id="academics" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Figure
              src="/images/chalkboard.jpg"
              alt="Chalkboard with mechanics diagrams"
              caption="Mechanics is the chapter I keep returning to."
              className="min-h-72"
            />
            <div>
              <SectionKicker index="02" label="Academics · PCM" />
              <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">
                Three subjects. One standard.
              </h2>
              <p className="mt-5 max-w-xl text-muted">
                I am not a prodigy. I am a student who treats the syllabus like
                a season: you do not skip training because the match is next
                month. You show up for the unglamorous units too.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div
              role="tablist"
              aria-label="PCM subjects"
              className="flex flex-wrap gap-2"
            >
              {SUBJECTS.map((item) => {
                const Icon =
                  item.id === "physics" ? Goal : item.id === "chemistry" ? FlaskConical : BookOpen;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={subject === item.id}
                    data-subject={item.id}
                    onClick={() => setSubject(item.id)}
                    className={cn(
                      "inline-flex min-h-11 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors duration-150",
                      subject === item.id
                        ? "bg-accent text-accent-fg"
                        : "bg-surface text-muted hover:text-fg",
                    )}
                  >
                    <Icon className="size-4" />
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
              <p className="text-xs tracking-[0.18em] text-accent uppercase">
                {activeSubject.kicker}
              </p>
              <h3 className="mt-3 font-display text-3xl text-fg">{activeSubject.name}</h3>
              <p className="mt-3 text-lg text-fg/90">{activeSubject.lead}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">{activeSubject.body}</p>
              {"focus" in activeSubject && activeSubject.focus ? (
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {activeSubject.focus.map((line) => (
                    <li
                      key={line}
                      className="border-l border-accent/40 pl-3 text-sm leading-relaxed text-fg/85"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="court" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          <div>
            <SectionKicker index="03" label="Basketball" />
            <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">
              Wing. Shooting guard. Last four minutes.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                I play on the wing — shooting guard by label, cutter and closer
                by habit. I am not the tallest body in a zone. I am the one who
                wants the ball when the scoreboard is ugly. Catch-and-shoot from
                the corners, a growing weak-hand finish, and a free-throw routine
                I do not change even when the gym is loud.
              </p>
              <p>
                Practice is not a highlight tape. Two hundred makes. Closeout
                footwork. Screens I used to bump instead of read. Film, when we
                have it, is more useful than praise. I keep a small book: shots
                taken, turnovers, how my legs felt in the third quarter. The
                point is not to look busy. It is to know what actually broke.
              </p>
              <p>
                Competitions this year are house matches, a zonal invitational,
                and whatever inter-school friendlies the calendar gives us. I
                care less about the medal photograph than about whether I still
                make the simple play when I am tired.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["Position", "SG / wing"],
                ["Range", "Corners first"],
                ["Tell", "Free throws"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-surface px-3 py-4 text-center shadow-[var(--shadow-border)]">
                  <dt className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">{k}</dt>
                  <dd className="mt-1 text-sm font-medium text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4">
            <Figure
              src="/images/basketball.jpg"
              alt="Worn basketball on a hardwood court"
              className="min-h-64"
            />
            <Figure
              src="/images/outdoor-court.jpg"
              alt="Outdoor school court at dusk"
              caption="The outdoor court after last period. Quiet is useful."
              className="min-h-52"
            />
          </div>
        </div>
      </section>

      <section id="training" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <SectionKicker index="04" label="Strength training" />
              <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">
                Iron as a skill, not a costume.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                I started lifting because basketball made the gaps obvious:
                first step, landing, holding a box-out in the fourth quarter.
                The programme is four lifting days in a normal week, built
                around squats, hinges, presses, pull-ups, and carries. I add
                load slowly. I film the main lifts. If the bar path is ugly,
                the weight comes off. Size is not the goal. A body that still
                works in February is.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Warm-ups are not optional. Hips, ankles, T-spine, then empty-bar
                work. After the main set I do what the sport needs that week —
                split squats, calf raises, anti-rotation. I eat like a student
                who trains, which means I actually eat: protein at every meal,
                water that is not only during practice, sleep that I defend the
                night before a test as fiercely as the night before a match.
              </p>
            </div>
            <Figure
              src="/images/gym-barbell.jpg"
              alt="Barbell on a platform in a dark gym"
              caption="The bar does not care about a long school day."
              className="min-h-72"
            />
          </div>

          <div className="mt-12 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Main lifts</caption>
              <thead className="border-b border-line text-xs tracking-[0.16em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-6">Lift</th>
                  <th className="px-4 py-3 font-medium sm:px-6">Role</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell sm:px-6">Note</th>
                </tr>
              </thead>
              <tbody>
                {LIFTS.map((row) => (
                  <tr key={row.lift} className="border-b border-line/70 last:border-b-0">
                    <td className="px-4 py-3.5 text-fg sm:px-6">{row.lift}</td>
                    <td className="px-4 py-3.5 text-muted sm:px-6">{row.role}</td>
                    <td className="hidden px-4 py-3.5 text-muted sm:table-cell sm:px-6">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-6"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-surface text-accent">
                  <Dumbbell className="size-4" />
                </div>
                <h3 className="font-display text-xl text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="record" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionKicker index="05" label="Competitions" />
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl text-fg sm:text-5xl">The record, not the résumé.</h2>
            <p className="max-w-sm text-sm text-muted">
              School-level. Honest. Includes the papers I did not finish the way
              I wanted.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter competitions">
            {TAGS.map((item) => (
              <button
                key={item}
                type="button"
                data-filter={item}
                onClick={() => setTag(item)}
                className={cn(
                  "min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                  tag === item
                    ? "bg-accent text-accent-fg"
                    : "bg-surface text-muted hover:text-fg",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <ol className="mt-10 divide-y divide-line border-y border-line">
            {filtered.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 py-6 sm:grid-cols-[5.5rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <p className="font-display text-xl text-accent">{item.year}</p>
                <div>
                  <h3 className="text-base font-medium text-fg">{item.title}</h3>
                  <p className="mt-1 text-sm text-subtle">{item.place}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
                <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs tracking-wide text-muted">
                  {item.tag}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="week" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionKicker index="06" label="A working week" />
          <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">How the hours actually go.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            This is a map, not a prison. Tests move practice. Matches move
            maths. The rule is that something still happens — a shorter session,
            not a vanished one.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b border-line text-xs tracking-[0.16em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-6">Day</th>
                  <th className="px-4 py-3 font-medium sm:px-6">Desk</th>
                  <th className="px-4 py-3 font-medium sm:px-6">Body</th>
                </tr>
              </thead>
              <tbody>
                {WEEK.map((row) => (
                  <tr key={row.day} className="border-b border-line/70 last:border-b-0">
                    <td className="px-4 py-3.5 font-medium text-fg sm:px-6">{row.day}</td>
                    <td className="px-4 py-3.5 text-muted sm:px-6">{row.am}</td>
                    <td className="px-4 py-3.5 text-muted sm:px-6">{row.pm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group) => (
              <article key={group.group} className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]">
                <h3 className="text-xs tracking-[0.18em] text-accent uppercase">{group.group}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-fg/90">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="note" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <SectionKicker index="07" label="A note" />
            <h2 className="mt-5 font-display text-4xl text-fg sm:text-5xl">
              Teachers, teammates, family — write here.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              This is a school portfolio, not a public inbox. Messages stay on
              this device so I can show them in class or pass them along. If you
              know me from the court or from M1, say which.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-fg">
              Class XI · M1 · PCM
              <ArrowUpRight className="size-4 text-muted" />
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col justify-center rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl italic text-fg">Received.</p>
              <p className="mt-3 text-muted">
                The note is saved on this device. If you need a reply the same
                day, find me after last period or after practice.
              </p>
              <Button type="button" variant="outline" className="mt-6 w-fit" onClick={() => setSent(false)}>
                Write another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@school.edu"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="A note for Rudra…"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send note
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
