// Central content model for the public site. Structured so a future CMS
// (Payload/Strapi, per the implementation plan) can replace this module
// without changing the page components that consume it.

export const site = {
  name: "NORAH",
  fullName: "National Waste & Recycling Robotics Adoption Hub",
  tagline: "National Waste & Recycling Robotics Adoption Hub",
  heroBadge: "UKRI Robotics Adoption Hub · £3.6m · 43 months to March 2030",
  fundingBody: "UKRI Robotics Adoption Hubs",
  fundingProgramme: "the UKRI Robotics Adoption Hubs programme",
  projectCostPrecise: "£3,609,350",
  projectCost: "£3.6m",
  projectDuration: "43 months",
  timeline: "43 months, to March 2030",
  targetDate: "March 2030",
  contactEmail: "hub@norahprogramme.uk",
};

export const hero = {
  title: "Adopting robotics where waste actually moves.",
  lede: "NORAH is a vendor-neutral national hub helping councils, waste operators and recycling businesses evaluate, demonstrate and scale robotics, from first assessment to operational scale-up.",
};

export const glanceStats = [
  { value: "40+", label: "operational deployments by 2030" },
  { value: "150+", label: "organisations engaged across the sector" },
  { value: "<5%", label: "of UK waste facilities use robotics today" },
  { value: "3,500", label: "UK waste management facilities in scope" },
];

export const adoptionPathway = [
  {
    step: "01",
    title: "Assessment",
    description: "Baseline your facility, material flows and where robotics adds value.",
  },
  {
    step: "02",
    title: "System design",
    description: "Specify vendor-neutral systems and integration requirements.",
  },
  {
    step: "03",
    title: "Demonstration",
    description: "Validate performance on live, contaminated waste streams.",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Install and integrate robotics into day-to-day operations.",
  },
  {
    step: "05",
    title: "Scale-up",
    description: "Benchmark results and replicate proven units across sites.",
  },
];

export const pathwayIntro =
  "A structured, evidence-led route that de-risks investment for both end users and robotics companies.";

export type ServiceIcon = "flask" | "target" | "link" | "cap" | "bulb" | "route";

export type Service = {
  title: string;
  body: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Real-world testbeds",
    body: "Trial systems against contaminated, heterogeneous waste — textiles, mixed recyclables and deformable materials.",
    icon: "flask",
  },
  {
    title: "Independent benchmarking",
    body: "Measured performance data from operator-specific waste samples, not vendor-derived metrics.",
    icon: "target",
  },
  {
    title: "Integration support",
    body: "Deployment within Materials Recovery Facilities and legacy infrastructure, including constrained layouts.",
    icon: "link",
  },
  {
    title: "Training & workforce transition",
    body: "Programmes focused on safe robotics operation in contaminated waste environments.",
    icon: "cap",
  },
  {
    title: "Innovation programmes",
    body: "Addressing sector-specific challenges such as mixed fibre sorting, contamination removal and automated disassembly.",
    icon: "bulb",
  },
  {
    title: "Direct routes to deployment",
    body: "Access to waste operators, local authorities and commercial facilities for live operational validation.",
    icon: "route",
  },
];

export type Audience = {
  title: string;
  body: string;
};

export const audiences: Audience[] = [
  {
    title: "Waste operators & recyclers",
    body: "Explore funded support to assess, demonstrate and deploy robotics in your facility, with independent ROI benchmarking.",
  },
  {
    title: "Local authorities",
    body: "Join a defined municipal deployment pipeline and access validated evidence for automation in your waste services.",
  },
  {
    title: "Robotics companies",
    body: "Access customers, live deployment environments and vendor-neutral validation to support commercial scale-up.",
  },
];

export const enquiryDetails = [
  { label: "Funding", value: "UKRI Robotics Adoption Hubs" },
  { label: "Project value", value: "£3.6m" },
  { label: "Timeline", value: "43 months, to March 2030" },
];

export const hubSites = [
  { name: "Kingston University", detail: "Roehampton Vale robotics laboratory, London" },
  { name: "University of Kent", detail: "Robotics and Assistive Technologies Centre (RACE)" },
  { name: "KAPDAA", detail: "Operational robotics facility, London" },
];

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export const outcomeStats: Stat[] = [
  {
    value: "150+",
    label: "Organisations engaged",
    detail: "Across training, testbeds and advisory services by March 2030.",
  },
  {
    value: "20-30",
    label: "End-user organisations",
    detail: "Receiving direct funded support, progressing through demonstration and integration.",
  },
  {
    value: "40+",
    label: "Operational deployments",
    detail: "Robotics systems live in real waste and recycling facilities.",
  },
  {
    value: "20-30%",
    label: "Productivity uplift",
    detail: "Targeted improvement per deployment.",
  },
  {
    value: "5-15%",
    label: "Material recovery improvement",
    detail: "Targeted improvement per deployment.",
  },
  {
    value: "24mo",
    label: "Payback period",
    detail: "Target payback per deployment, from the independent economic model.",
  },
];

export const deliverySites = [
  {
    name: "Kingston University London",
    facility: "Roehampton Vale robotics laboratory",
    role: "A £2m industrial robotics facility used to validate systems and check they are ready for a live site.",
  },
  {
    name: "University of Kent",
    facility: "Robotics and Assistive Technologies Centre (RACE)",
    role: "Digital twin simulation, human robot interaction and adaptive control, used to validate systems before deployment.",
  },
  {
    name: "KAPDAA",
    facility: "Operational robotics facility",
    role: "A leading textile recycler's live site, used for final testing within real, contaminated waste streams.",
  },
];

export const scopeDeliverables = [
  "Impartial advisory services to identify applications and connect end users with vendors, integrators and financing routes",
  "Real-world demonstration and validation within representative waste environments, including Materials Recovery Facilities",
  "Vendor-neutral benchmarking using operator-specific waste samples to generate measured performance data",
  "Integration support for deployment within legacy infrastructure and variable feedstock conditions",
  "Workforce training programmes for safe and effective robotics operation",
  "Challenge-led innovation programmes targeting sector-specific barriers such as mixed fibre sorting and contamination removal",
  "Commercial scale-up support for robotics companies through access to customers and deployment environments",
  "Standardised data collection and sharing, including productivity, safety and economic metrics",
];

// Partner records now live in Payload (see collections/Partners.ts and
// lib/payload.ts) so the hub team can add or edit them without a deploy.
// The four group labels below are structural and stay here.

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/aims-objectives", label: "Aims & Objectives" },
  { href: "/partners", label: "Partners" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/news", label: "News" },
];
