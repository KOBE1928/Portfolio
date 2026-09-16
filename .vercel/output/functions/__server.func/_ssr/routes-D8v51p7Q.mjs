import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FlaskConical, c as ArrowUpRight, i as Goal, l as ArrowDown, o as Dumbbell, r as Menu, s as BookOpen, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D8v51p7Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans text-sm font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-fg",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-surface",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-surface"
		},
		size: {
			default: "h-11 min-h-11 px-5",
			sm: "h-11 min-h-11 px-4 text-sm",
			lg: "h-12 min-h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-4 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted", className),
	...props
}));
Label.displayName = "Label";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg bg-surface px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var NAV = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#academics",
		label: "PCM"
	},
	{
		href: "#court",
		label: "Court"
	},
	{
		href: "#training",
		label: "Training"
	},
	{
		href: "#record",
		label: "Record"
	},
	{
		href: "#week",
		label: "Week"
	},
	{
		href: "#note",
		label: "Note"
	}
];
var STATS = [
	{
		value: "XI · M1",
		label: "Class & section"
	},
	{
		value: "PCM",
		label: "Stream"
	},
	{
		value: "SG / Wing",
		label: "Basketball"
	},
	{
		value: "4-day",
		label: "Strength block"
	}
];
var SUBJECTS = [
	{
		id: "physics",
		name: "Physics",
		kicker: "Mechanics first",
		lead: "The subject that finally made basketball feel like a laboratory.",
		body: "Class 11 physics is where I live most evenings. Kinematics, Newton’s laws, work-energy, and circular motion are not abstract to me — they are the language of a jump shot, a cut, a landing. I work NCERT line by line, then step into HC Verma for the problems that actually hurt. I keep a separate notebook for derivations so I can rebuild them from memory the next morning, the same way I rebuild a shooting form in an empty gym.",
		focus: [
			"Vectors, motion in a plane, projectile range as a court problem",
			"Laws of motion and free-body diagrams under fatigue",
			"Work, energy, power — why a stronger squat changes a first step",
			"System of particles, centre of mass, rotational motion (current)"
		]
	},
	{
		id: "chemistry",
		name: "Chemistry",
		kicker: "Structure before tricks",
		lead: "I used to treat chemistry as a memory subject. That was a mistake I am still undoing.",
		body: "Physical chemistry is where I am most comfortable — mole concept, stoichiometry, states of matter, thermodynamics. Inorganic I drill with tables I rewrite myself; organic I am learning to see as patterns, not a pile of reactions. Lab work is the part I do not skip: if I cannot explain what the apparatus is doing, I do not count the experiment as done. The aim is not speed. It is to stop guessing."
	},
	{
		id: "maths",
		name: "Mathematics",
		kicker: "Clean lines",
		lead: "Maths is the quietest hour of my day, and the most unforgiving.",
		body: "Sets, relations, trigonometric identities, straight lines, conic sections, and the first stretch of limits and derivatives. I like problems that look short and are not. I time my practice sets the way I time shooting drills — a fixed number, a fixed window, no phone. Coordinate geometry is my favourite unit so far; calculus is the one I am trying to make as natural as a free throw routine."
	}
];
var PRINCIPLES = [
	{
		title: "Show up tired",
		body: "School does not wait for a perfect night of sleep. Training does not wait either. The standard is to do the work on ordinary days, not only on motivated ones."
	},
	{
		title: "Form over load",
		body: "A sloppy squat is not training, it is a future injury. I film the main lifts when I can. If the bar path is ugly, the weight comes down."
	},
	{
		title: "Study like a drill",
		body: "One topic, one problem set, one review. I do not stack five chapters and call it a session. Depth beats a highlight reel of unfinished notes."
	},
	{
		title: "Recover on purpose",
		body: "Sunday is not a void. Mobility, a long walk, cooking at home, rewriting the week. Rest is part of the programme, not a leak in it."
	}
];
var LIFTS = [
	{
		lift: "Back squat",
		role: "Primary lower",
		note: "Depth and brace before adding plates"
	},
	{
		lift: "Romanian deadlift",
		role: "Posterior chain",
		note: "Hamstrings for sprinting and landing"
	},
	{
		lift: "Bench / floor press",
		role: "Upper push",
		note: "Controlled eccentrics, no bounce"
	},
	{
		lift: "Weighted pull-up",
		role: "Upper pull",
		note: "Strict reps; bands when needed"
	},
	{
		lift: "Split squat",
		role: "Single-leg",
		note: "Knee tracking, court-specific"
	},
	{
		lift: "Farmer carry",
		role: "Trunk / grip",
		note: "Long walks, quiet core"
	}
];
var WEEK = [
	{
		day: "Mon",
		am: "Physics — numericals + derivation rewrite",
		pm: "Upper strength · mobility"
	},
	{
		day: "Tue",
		am: "Mathematics — timed problem set",
		pm: "Team practice · shooting 200 makes"
	},
	{
		day: "Wed",
		am: "Chemistry — theory + exercises",
		pm: "Lower strength · posterior chain"
	},
	{
		day: "Thu",
		am: "Physics — mixed chapter review",
		pm: "Skill work: footwork, closeouts, free throws"
	},
	{
		day: "Fri",
		am: "PCM — weekly error log",
		pm: "Team scrimmage or conditioning"
	},
	{
		day: "Sat",
		am: "Maths / chemistry backlog",
		pm: "Full-body strength or match day"
	},
	{
		day: "Sun",
		am: "Notes, sleep, family",
		pm: "Walk, stretch, plan the next seven days"
	}
];
var RECORD = [
	{
		year: "2026",
		title: "Inter-house basketball — senior category",
		place: "School courts",
		detail: "Playing as a wing in section fixtures. Focus this year is decision-making in the last four minutes, not just scoring in the first.",
		tag: "Basketball"
	},
	{
		year: "2026",
		title: "Zonal school invitational",
		place: "District venue",
		detail: "Short, physical games against teams we do not see every week. I keep a private sheet: turnovers, closeouts, and how my legs felt in the third quarter.",
		tag: "Basketball"
	},
	{
		year: "2025–26",
		title: "Annual sports meet",
		place: "School ground",
		detail: "Basketball exhibition plus a relay. Sports day is noisy; I treat it as a test of whether training holds when the crowd is louder than the whistle.",
		tag: "Athletics"
	},
	{
		year: "2025",
		title: "Intra-school science exhibition",
		place: "Senior wing",
		detail: "A working model of projectile motion using a basketball release angle. Judges asked why the optimum is not 45° on a court. That conversation was the point.",
		tag: "Academics"
	},
	{
		year: "2025",
		title: "Mathematics olympiad — school round",
		place: "Class 10 into 11",
		detail: "Did not finish the paper the way I wanted. The useful part was the error log: geometry under time pressure is still a hole I am filling in Class 11.",
		tag: "Academics"
	},
	{
		year: "2025",
		title: "Inter-class strength & conditioning challenge",
		place: "School gym",
		detail: "Pull-ups, a 2 km loop, and a farmer carry. I did not win the room. I did finish without changing the plan mid-event, which is the habit I actually wanted.",
		tag: "Training"
	},
	{
		year: "2024–25",
		title: "Inter-house basketball — junior to senior bridge",
		place: "School courts",
		detail: "Runners-up with the house side. First year I was trusted to run a set in the fourth quarter. That trust is the thing I am trying to deserve again.",
		tag: "Basketball"
	}
];
var SKILLS = [
	{
		group: "On the court",
		items: [
			"Catch-and-shoot",
			"Weak-hand finishes",
			"Closeouts",
			"Screen navigation",
			"Free-throw routine"
		]
	},
	{
		group: "In the gym",
		items: [
			"Barbell squatting",
			"Hinge patterning",
			"Pull-up strength",
			"Conditioning intervals",
			"Mobility work"
		]
	},
	{
		group: "At the desk",
		items: [
			"Numericals under a clock",
			"Derivation from memory",
			"Lab records",
			"Error logs",
			"Graphing by hand"
		]
	},
	{
		group: "How I work",
		items: [
			"Time blocking",
			"Showing up sore",
			"Film / form checks",
			"Asking one better question",
			"Keeping a week plan"
		]
	}
];
var TAGS = [
	"All",
	"Basketball",
	"Training",
	"Academics",
	"Athletics"
];
function SectionKicker({ index, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs font-medium text-muted uppercase",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums tracking-normal text-accent",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-3 text-subtle",
				"aria-hidden": "true",
				children: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tracking-[0.2em]",
				children: label
			})
		]
	});
}
function Figure({ src, alt, className, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl bg-surface", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full object-cover",
			crossOrigin: "anonymous"
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-3 text-xs tracking-wide text-muted",
			children: caption
		}) : null]
	});
}
function Portfolio() {
	const [subject, setSubject] = (0, import_react.useState)("physics");
	const [tag, setTag] = (0, import_react.useState)("All");
	const [sent, setSent] = (0, import_react.useState)(false);
	const activeSubject = SUBJECTS.find((s) => s.id === subject) ?? SUBJECTS[0];
	const filtered = (0, import_react.useMemo)(() => tag === "All" ? RECORD : RECORD.filter((item) => item.tag === tag), [tag]);
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !email || !message) {
			toast.error("Fill every field before sending.");
			return;
		}
		const notes = JSON.parse(localStorage.getItem("rp-notes") || "[]");
		notes.push({
			name,
			email,
			message,
			at: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem("rp-notes", JSON.stringify(notes));
		event.currentTarget.reset();
		setSent(true);
		toast.success("Note saved. I’ll read it on this device.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[100dvh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-court.jpg",
						alt: "Empty indoor basketball court at night",
						className: "absolute inset-0 h-full w-full object-cover",
						crossOrigin: "anonymous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-bg/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stagger-in max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.28em] text-accent uppercase",
									children: "Student portfolio · 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 font-display text-[4.2rem] leading-[0.88] font-medium tracking-[-0.04em] text-fg italic sm:text-[6.5rem] md:text-[7.5rem]",
									children: ["Rudra", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block not-italic",
										children: "Priye"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-md text-base text-fg/85 sm:text-lg",
									children: "Class XI, section M1. Physics, Chemistry, Mathematics. A week split between a notebook, a hardwood floor, and a barbell."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#about",
											children: ["Read the record", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#court",
											children: "On the court"
										})
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-y border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4",
					children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("px-4 py-6 sm:px-6", i % 2 === 1 ? "border-l border-line" : "", i >= 2 ? "border-t border-line sm:border-t-0" : "", i >= 1 ? "sm:border-l sm:border-line" : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-[0.18em] text-muted uppercase",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-2xl text-fg sm:text-3xl",
							children: stat.value
						})]
					}, stat.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "01",
							label: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
							children: "Ordinary days, done on purpose."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I’m Rudra Priye, sixteen, in Class 11 section M1, studying PCM. This page is the version of an “about me” I actually recognise — not a list of adjectives, a record of how the week is spent." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "School takes the morning. Physics numericals take the evening. Basketball takes whatever is left in the legs. Strength training is the unglamorous middle: chalk, a notebook of loads, and the decision not to skip just because a test is coming. I am not trying to be two different people. The same habits have to work in a classroom and in a gym." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I like problems with a clean answer. A free throw. A derivation. A lift done with a quiet back. The rest of life is noisier. Those three things keep the week honest." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.18em] text-muted uppercase",
									children: "Now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-fg",
									children: "First year of senior secondary. Building a PCM foundation and earning minutes as a wing on the school side."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.18em] text-muted uppercase",
									children: "North star"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-fg",
									children: "Leave Class 12 with a body that holds up, a file of solved problems I can defend, and a game that still looks like mine."
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/images/study-desk.jpg",
						alt: "Night study desk with physics notes and a lamp",
						caption: "The desk after practice. Notes first, then sleep.",
						className: "min-h-80 lg:min-h-full"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "academics",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
							src: "/images/chalkboard.jpg",
							alt: "Chalkboard with mechanics diagrams",
							caption: "Mechanics is the chapter I keep returning to.",
							className: "min-h-72"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: "02",
								label: "Academics · PCM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
								children: "Three subjects. One standard."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-muted",
								children: "I am not a prodigy. I am a student who treats the syllabus like a season: you do not skip training because the match is next month. You show up for the unglamorous units too."
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "tablist",
							"aria-label": "PCM subjects",
							className: "flex flex-wrap gap-2",
							children: SUBJECTS.map((item) => {
								const Icon = item.id === "physics" ? Goal : item.id === "chemistry" ? FlaskConical : BookOpen;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									role: "tab",
									"aria-selected": subject === item.id,
									"data-subject": item.id,
									onClick: () => setSubject(item.id),
									className: cn("inline-flex min-h-11 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors duration-150", subject === item.id ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.name]
								}, item.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.18em] text-accent uppercase",
									children: activeSubject.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl text-fg",
									children: activeSubject.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg text-fg/90",
									children: activeSubject.lead
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl leading-relaxed text-muted",
									children: activeSubject.body
								}),
								"focus" in activeSubject && activeSubject.focus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 grid gap-2 sm:grid-cols-2",
									children: activeSubject.focus.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-l border-accent/40 pl-3 text-sm leading-relaxed text-fg/85",
										children: line
									}, line))
								}) : null
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "court",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "03",
							label: "Basketball"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
							children: "Wing. Shooting guard. Last four minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 leading-relaxed text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I play on the wing — shooting guard by label, cutter and closer by habit. I am not the tallest body in a zone. I am the one who wants the ball when the scoreboard is ugly. Catch-and-shoot from the corners, a growing weak-hand finish, and a free-throw routine I do not change even when the gym is loud." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Practice is not a highlight tape. Two hundred makes. Closeout footwork. Screens I used to bump instead of read. Film, when we have it, is more useful than praise. I keep a small book: shots taken, turnovers, how my legs felt in the third quarter. The point is not to look busy. It is to know what actually broke." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Competitions this year are house matches, a zonal invitational, and whatever inter-school friendlies the calendar gives us. I care less about the medal photograph than about whether I still make the simple play when I am tired." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid grid-cols-3 gap-3",
							children: [
								["Position", "SG / wing"],
								["Range", "Corners first"],
								["Tell", "Free throws"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface px-3 py-4 text-center shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.65rem] tracking-[0.16em] text-muted uppercase",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm font-medium text-fg",
									children: v
								})]
							}, k))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
							src: "/images/basketball.jpg",
							alt: "Worn basketball on a hardwood court",
							className: "min-h-64"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
							src: "/images/outdoor-court.jpg",
							alt: "Outdoor school court at dusk",
							caption: "The outdoor court after last period. Quiet is useful.",
							className: "min-h-52"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "training",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
									index: "04",
									label: "Strength training"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
									children: "Iron as a skill, not a costume."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 leading-relaxed text-muted",
									children: "I started lifting because basketball made the gaps obvious: first step, landing, holding a box-out in the fourth quarter. The programme is four lifting days in a normal week, built around squats, hinges, presses, pull-ups, and carries. I add load slowly. I film the main lifts. If the bar path is ugly, the weight comes off. Size is not the goal. A body that still works in February is."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-relaxed text-muted",
									children: "Warm-ups are not optional. Hips, ankles, T-spine, then empty-bar work. After the main set I do what the sport needs that week — split squats, calf raises, anti-rotation. I eat like a student who trains, which means I actually eat: protein at every meal, water that is not only during practice, sleep that I defend the night before a test as fiercely as the night before a match."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
								src: "/images/gym-barbell.jpg",
								alt: "Barbell on a platform in a dark gym",
								caption: "The bar does not care about a long school day.",
								className: "min-h-72"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
										className: "sr-only",
										children: "Main lifts"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "border-b border-line text-xs tracking-[0.16em] text-muted uppercase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-medium sm:px-6",
												children: "Lift"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-medium sm:px-6",
												children: "Role"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "hidden px-4 py-3 font-medium sm:table-cell sm:px-6",
												children: "Note"
											})
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: LIFTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-line/70 last:border-b-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3.5 text-fg sm:px-6",
												children: row.lift
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3.5 text-muted sm:px-6",
												children: row.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "hidden px-4 py-3.5 text-muted sm:table-cell sm:px-6",
												children: row.note
											})
										]
									}, row.lift)) })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex size-9 items-center justify-center rounded-md bg-surface text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl text-fg",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: item.body
									})
								]
							}, item.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "record",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "05",
							label: "Competitions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl text-fg sm:text-5xl",
								children: "The record, not the résumé."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm text-muted",
								children: "School-level. Honest. Includes the papers I did not finish the way I wanted."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							role: "group",
							"aria-label": "Filter competitions",
							children: TAGS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-filter": item,
								onClick: () => setTag(item),
								className: cn("min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", tag === item ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"),
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 divide-y divide-line border-y border-line",
							children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-3 py-6 sm:grid-cols-[5.5rem_1fr_auto] sm:items-baseline sm:gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl text-accent",
										children: item.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-medium text-fg",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-subtle",
											children: item.place
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
											children: item.detail
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-fit rounded-full bg-surface px-3 py-1 text-xs tracking-wide text-muted",
										children: item.tag
									})
								]
							}, item.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "week",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "06",
							label: "A working week"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
							children: "How the hours actually go."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted",
							children: "This is a map, not a prison. Tests move practice. Matches move maths. The rule is that something still happens — a shorter session, not a vanished one."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[36rem] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "border-b border-line text-xs tracking-[0.16em] text-muted uppercase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium sm:px-6",
											children: "Day"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium sm:px-6",
											children: "Desk"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium sm:px-6",
											children: "Body"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: WEEK.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line/70 last:border-b-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 font-medium text-fg sm:px-6",
											children: row.day
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 text-muted sm:px-6",
											children: row.am
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 text-muted sm:px-6",
											children: row.pm
										})
									]
								}, row.day)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: SKILLS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs tracking-[0.18em] text-accent uppercase",
									children: group.group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5 text-sm text-fg/90",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								})]
							}, group.group))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "note",
				className: "scroll-mt-20 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "07",
							label: "A note"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl text-fg sm:text-5xl",
							children: "Teachers, teammates, family — write here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md leading-relaxed text-muted",
							children: "This is a school portfolio, not a public inbox. Messages stay on this device so I can show them in class or pass them along. If you know me from the court or from M1, say which."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 flex items-center gap-2 text-sm text-fg",
							children: ["Class XI · M1 · PCM", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted" })]
						})
					] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl italic text-fg",
								children: "Received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: "The note is saved on this device. If you need a reply the same day, find me after last period or after practice."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								className: "mt-6 w-fit",
								onClick: () => setSent(false),
								children: "Write another"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									autoComplete: "name",
									required: true,
									placeholder: "Your name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									required: true,
									placeholder: "you@school.edu"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									name: "message",
									required: true,
									placeholder: "A note for Rudra…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full sm:w-auto",
								children: "Send note"
							})
						]
					})]
				})
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl italic text-fg",
				children: "Rudra Priye"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Class XI · Section M1 · PCM"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "A personal record of school, the court, and the work in between."
			})]
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const els = NAV.map((item) => item.href.slice(1)).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (els.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const el of els) observer.observe(el);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200", scrolled || open ? "bg-bg/92 shadow-[var(--shadow-border)] backdrop-blur-md" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2.5 text-fg",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-8 items-center justify-center rounded-sm bg-accent font-display text-sm font-medium text-accent-fg",
							children: "RP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-sans text-sm font-medium tracking-wide sm:inline",
							children: "Rudra Priye"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: cn("rounded-md px-3 py-2 text-sm transition-colors duration-150", active === item.href ? "text-fg" : "text-muted hover:text-fg"),
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#note",
								children: "Write a note"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				hidden: !open,
				className: "border-t border-line bg-bg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl flex-col px-4 py-4",
					"aria-label": "Mobile",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "flex min-h-11 items-center border-b border-line/60 text-base text-fg last:border-b-0",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#note",
							onClick: () => setOpen(false),
							children: "Write a note"
						})
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Home as component };
