import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "News",
  description: "Updates, press releases and milestones from the NORAH robotics adoption hub.",
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

// No news has been published yet. When the first post is ready, add it here
// (id, slug, title, excerpt, publishedDate) — there's no live CMS anymore.
const posts: { id: string; slug: string; title: string; excerpt: string; publishedDate: string }[] = [];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Updates from the hub"
        lead="Milestones, deployment stories and press releases will be posted here as the programme progresses."
      />

      <section className="band-tint">
        <Container>
          {posts.length === 0 ? (
            <div className="glass-card mx-auto max-w-xl p-10 text-center">
              <h2 className="text-[1.2rem]">Nothing published yet</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
                The hub is at an early stage. Check back soon, or{" "}
                <a href="/contact" className="font-medium" style={{ color: "var(--norah-primary)" }}>
                  get in touch
                </a>{" "}
                to be notified when the first update goes live.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className="glass-card block p-6">
                  <p className="text-[0.82rem] font-medium" style={{ color: "var(--norah-primary)" }}>
                    {dateFormatter.format(new Date(post.publishedDate))}
                  </p>
                  <h2 className="mt-1.5 text-[1.2rem]">{post.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
