export const NAV = [
  { href: "#about", label: "About" },
  { href: "#academics", label: "PCM" },
  { href: "#court", label: "Court" },
  { href: "#training", label: "Training" },
  { href: "#record", label: "Record" },
  { href: "#week", label: "Week" },
  { href: "#note", label: "Note" },
] as const;

export const STATS = [
  { value: "XI · M1", label: "Class & section" },
  { value: "PCM", label: "Stream" },
  { value: "SG / Wing", label: "Basketball" },
  { value: "4-day", label: "Strength block" },
] as const;

export const SUBJECTS = [
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
      "System of particles, centre of mass, rotational motion (current)",
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    kicker: "Structure before tricks",
    lead: "I used to treat chemistry as a memory subject. That was a mistake I am still undoing.",
    body: "Physical chemistry is where I am most comfortable — mole concept, stoichiometry, states of matter, thermodynamics. Inorganic I drill with tables I rewrite myself; organic I am learning to see as patterns, not a pile of reactions. Lab work is the part I do not skip: if I cannot explain what the apparatus is doing, I do not count the experiment as done. The aim is not speed. It is to stop guessing.",
  },
  {
    id: "maths",
    name: "Mathematics",
    kicker: "Clean lines",
    lead: "Maths is the quietest hour of my day, and the most unforgiving.",
    body: "Sets, relations, trigonometric identities, straight lines, conic sections, and the first stretch of limits and derivatives. I like problems that look short and are not. I time my practice sets the way I time shooting drills — a fixed number, a fixed window, no phone. Coordinate geometry is my favourite unit so far; calculus is the one I am trying to make as natural as a free throw routine.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Show up tired",
    body: "School does not wait for a perfect night of sleep. Training does not wait either. The standard is to do the work on ordinary days, not only on motivated ones.",
  },
  {
    title: "Form over load",
    body: "A sloppy squat is not training, it is a future injury. I film the main lifts when I can. If the bar path is ugly, the weight comes down.",
  },
  {
    title: "Study like a drill",
    body: "One topic, one problem set, one review. I do not stack five chapters and call it a session. Depth beats a highlight reel of unfinished notes.",
  },
  {
    title: "Recover on purpose",
    body: "Sunday is not a void. Mobility, a long walk, cooking at home, rewriting the week. Rest is part of the programme, not a leak in it.",
  },
] as const;

export const LIFTS = [
  { lift: "Back squat", role: "Primary lower", note: "Depth and brace before adding plates" },
  { lift: "Romanian deadlift", role: "Posterior chain", note: "Hamstrings for sprinting and landing" },
  { lift: "Bench / floor press", role: "Upper push", note: "Controlled eccentrics, no bounce" },
  { lift: "Weighted pull-up", role: "Upper pull", note: "Strict reps; bands when needed" },
  { lift: "Split squat", role: "Single-leg", note: "Knee tracking, court-specific" },
  { lift: "Farmer carry", role: "Trunk / grip", note: "Long walks, quiet core" },
] as const;

export const WEEK = [
  {
    day: "Mon",
    am: "Physics — numericals + derivation rewrite",
    pm: "Upper strength · mobility",
  },
  {
    day: "Tue",
    am: "Mathematics — timed problem set",
    pm: "Team practice · shooting 200 makes",
  },
  {
    day: "Wed",
    am: "Chemistry — theory + exercises",
    pm: "Lower strength · posterior chain",
  },
  {
    day: "Thu",
    am: "Physics — mixed chapter review",
    pm: "Skill work: footwork, closeouts, free throws",
  },
  {
    day: "Fri",
    am: "PCM — weekly error log",
    pm: "Team scrimmage or conditioning",
  },
  {
    day: "Sat",
    am: "Maths / chemistry backlog",
    pm: "Full-body strength or match day",
  },
  {
    day: "Sun",
    am: "Notes, sleep, family",
    pm: "Walk, stretch, plan the next seven days",
  },
] as const;

export const RECORD = [
  {
    year: "2026",
    title: "Inter-house basketball — senior category",
    place: "School courts",
    detail:
      "Playing as a wing in section fixtures. Focus this year is decision-making in the last four minutes, not just scoring in the first.",
    tag: "Basketball",
  },
  {
    year: "2026",
    title: "Zonal school invitational",
    place: "District venue",
    detail:
      "Short, physical games against teams we do not see every week. I keep a private sheet: turnovers, closeouts, and how my legs felt in the third quarter.",
    tag: "Basketball",
  },
  {
    year: "2025–26",
    title: "Annual sports meet",
    place: "School ground",
    detail:
      "Basketball exhibition plus a relay. Sports day is noisy; I treat it as a test of whether training holds when the crowd is louder than the whistle.",
    tag: "Athletics",
  },
  {
    year: "2025",
    title: "Intra-school science exhibition",
    place: "Senior wing",
    detail:
      "A working model of projectile motion using a basketball release angle. Judges asked why the optimum is not 45° on a court. That conversation was the point.",
    tag: "Academics",
  },
  {
    year: "2025",
    title: "Mathematics olympiad — school round",
    place: "Class 10 into 11",
    detail:
      "Did not finish the paper the way I wanted. The useful part was the error log: geometry under time pressure is still a hole I am filling in Class 11.",
    tag: "Academics",
  },
  {
    year: "2025",
    title: "Inter-class strength & conditioning challenge",
    place: "School gym",
    detail:
      "Pull-ups, a 2 km loop, and a farmer carry. I did not win the room. I did finish without changing the plan mid-event, which is the habit I actually wanted.",
    tag: "Training",
  },
  {
    year: "2024–25",
    title: "Inter-house basketball — junior to senior bridge",
    place: "School courts",
    detail:
      "Runners-up with the house side. First year I was trusted to run a set in the fourth quarter. That trust is the thing I am trying to deserve again.",
    tag: "Basketball",
  },
] as const;

export const SKILLS = [
  {
    group: "On the court",
    items: ["Catch-and-shoot", "Weak-hand finishes", "Closeouts", "Screen navigation", "Free-throw routine"],
  },
  {
    group: "In the gym",
    items: ["Barbell squatting", "Hinge patterning", "Pull-up strength", "Conditioning intervals", "Mobility work"],
  },
  {
    group: "At the desk",
    items: ["Numericals under a clock", "Derivation from memory", "Lab records", "Error logs", "Graphing by hand"],
  },
  {
    group: "How I work",
    items: ["Time blocking", "Showing up sore", "Film / form checks", "Asking one better question", "Keeping a week plan"],
  },
] as const;
