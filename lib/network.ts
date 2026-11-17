// Wider network: organisations the hub collaborates with outside the funded
// consortium (see lib/partners.ts for those). Static data, like partners, so
// the site stays fully static-exported. Edit this file and redeploy.
//
// Logos go in public/logos/network/. Only set `consentToList: true` once the
// organisation has agreed to be named publicly and to their logo being used.
// Entries without it are kept here for tracking but never rendered.

import { withBasePath } from "@/lib/base-path";

export type NetworkCategory = "operators" | "technology" | "industry" | "public-sector" | "research";

type NetworkRecord = {
  name: string;
  category: NetworkCategory;
  website: string;
  logo: string;
  consentToList: boolean;
};

const networkMembers: NetworkRecord[] = [
  {
    name: "Factor Smart Manufacturing",
    category: "technology",
    website: "https://factorsl.es/en",
    logo: "/logos/network/factor.png",
    consentToList: true,
  },
  {
    name: "Kinemica",
    category: "technology",
    website: "https://kinemica.com",
    logo: "/logos/network/kinemica.png",
    consentToList: true,
  },
  {
    name: "Zoritex",
    category: "technology",
    website: "https://www.zoritex.com",
    logo: "/logos/network/zoritex.png",
    consentToList: true,
  },
  // {
  //   name: "Example Organisation",
  //   category: "operators",
  //   website: "https://example.com",
  //   logo: "/logos/network/example.png",
  //   consentToList: true,
  // },
];

const categoryTitles: Record<NetworkCategory, string> = {
  operators: "Sites & operators",
  technology: "Technology & robotics",
  industry: "Industry bodies",
  "public-sector": "Public sector",
  research: "Research",
};

const categoryOrder: NetworkCategory[] = ["operators", "technology", "industry", "public-sector", "research"];

export type NetworkMemberView = { name: string; category: NetworkCategory; website: string; logo: string };
export type NetworkCategoryView = { slug: NetworkCategory; title: string; count: number };

export function getNetwork(): { members: NetworkMemberView[]; categories: NetworkCategoryView[] } {
  const members = networkMembers
    .filter((m) => m.consentToList)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((m) => ({ name: m.name, category: m.category, website: m.website, logo: withBasePath(m.logo) }));

  const categories = categoryOrder
    .map((slug) => ({ slug, title: categoryTitles[slug], count: members.filter((m) => m.category === slug).length }))
    .filter((c) => c.count > 0);

  return { members, categories };
}
