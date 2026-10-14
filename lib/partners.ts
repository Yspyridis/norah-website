// Partner records, migrated from Payload CMS to static data so the public
// site can be fully static-exported with no database dependency at runtime.
// To add or edit a partner, edit this file and redeploy.

import { withBasePath } from "@/lib/base-path";

export type PartnerGroupSlug = "delivery" | "technology" | "national" | "local-authority";

export type PartnerView = {
  name: string;
  logo?: string;
  description: string;
};

export type PartnerGroupView = {
  title: string;
  description: string;
  partners: PartnerView[];
};

type PartnerRecord = {
  name: string;
  group: PartnerGroupSlug;
  order: number;
  description: string;
  logo: string;
};

const partners: PartnerRecord[] = [
  {
    name: "Kingston University London",
    group: "delivery",
    order: 0,
    description:
      "Consortium lead. Hosts the £2m Roehampton Vale robotics laboratory used to validate systems and check deployment readiness.",
    logo: "/logos/kingston-university.png",
  },
  {
    name: "University of Kent",
    group: "delivery",
    order: 1,
    description:
      "Hosts the Robotics and Assistive Technologies Centre (RACE), covering digital twin simulation, human robot interaction and adaptive control.",
    logo: "/logos/university-of-kent.png",
  },
  {
    name: "KAPDAA",
    group: "delivery",
    order: 2,
    description: "Leading textile recycler. Its operational robotics facility enables final testing within live, contaminated waste streams.",
    logo: "/logos/kapdaa.jpg",
  },
  {
    name: "Royal Borough of Kingston upon Thames",
    group: "local-authority",
    order: 0,
    description: "Local authority partner, part of the municipal deployment pipeline.",
    logo: "/logos/kingston-borough.jpg",
  },
  {
    name: "West London Waste Authority",
    group: "local-authority",
    order: 1,
    description: "Local authority partner, part of the municipal deployment pipeline.",
    logo: "/logos/west-london-waste.png",
  },
  {
    name: "WRAP",
    group: "national",
    order: 0,
    description: "Resource and waste sector authority, contributing sector data and driving standardisation across the programme.",
    logo: "/logos/wrap.png",
  },
  {
    name: "Textile Recycling Association",
    group: "national",
    order: 1,
    description: "National body for the textile recycling sector, a core focus material for the hub's early testbeds.",
    logo: "/logos/tra.png",
  },
  {
    name: "OptimalAI Research Ltd",
    group: "technology",
    order: 0,
    description: "Robotics and AI technology partner supporting the hub's system design and validation work.",
    logo: "/logos/optimalai.png",
  },
  {
    name: "Autodiscovery",
    group: "technology",
    order: 1,
    description: "Robotics and technology partner supporting the hub's system design and validation work.",
    logo: "/logos/autodiscovery.jpg",
  },
];

// Group labels are structural (the four consortium categories from the
// funding proposal) and don't need CMS editing, so they stay in code.
const partnerGroupMeta: Record<PartnerGroupSlug, { title: string; description: string }> = {
  delivery: {
    title: "Delivery partners",
    description: "The three sites where robotics systems are assessed, validated and demonstrated.",
  },
  technology: {
    title: "Robotics and technology partners",
    description: "Robotics developers contributing systems, integration expertise and commercial scale-up routes.",
  },
  national: {
    title: "Industry and national bodies",
    description: "National organisations connecting the hub to sector-wide standards, policy and end users.",
  },
  "local-authority": {
    title: "Local authority partners",
    description: "Local authority partners providing a municipal deployment pipeline alongside commercial waste streams.",
  },
};

const groupOrder: PartnerGroupSlug[] = ["delivery", "technology", "national", "local-authority"];

function toPartnerView(doc: PartnerRecord): PartnerView {
  return {
    name: doc.name,
    logo: withBasePath(doc.logo),
    description: doc.description,
  };
}

export async function getGroupedPartners(): Promise<PartnerGroupView[]> {
  return groupOrder
    .map((slug) => ({
      ...partnerGroupMeta[slug],
      partners: partners
        .filter((p) => p.group === slug)
        .sort((a, b) => a.order - b.order)
        .map(toPartnerView),
    }))
    .filter((group) => group.partners.length > 0);
}

export async function getPartnersWithLogos(): Promise<PartnerView[]> {
  return partners.filter((p) => p.logo).map(toPartnerView);
}
