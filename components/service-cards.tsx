import type { Service, ServiceIcon } from "@/lib/content";

const icons: Record<ServiceIcon, React.ReactNode> = {
  flask: (
    <>
      <path d="M8.5 3h5M9.3 3v4.3c0 .4-.13.8-.37 1.13l-3.2 4.3c-.83 1.1-.03 2.67 1.35 2.67h8.44c1.38 0 2.18-1.57 1.35-2.67l-3.2-4.3a1.9 1.9 0 0 1-.37-1.13V3" />
      <path d="M6.8 12.5h8.4" />
    </>
  ),
  target: (
    <>
      <circle cx="11" cy="11" r="7.2" />
      <circle cx="11" cy="11" r="4" />
      <circle cx="11" cy="11" r="1" fill="var(--norah-brand)" stroke="none" />
    </>
  ),
  link: (
    <>
      <circle cx="8.2" cy="11" r="5" />
      <circle cx="13.8" cy="11" r="5" />
    </>
  ),
  cap: (
    <>
      <path d="M2 8.6 11 4.5l9 4.1-9 4.1-9-4.1Z" strokeLinejoin="round" />
      <path d="M6 10.6v3.6c0 1.5 2.24 2.8 5 2.8s5-1.3 5-2.8v-3.6" />
      <path d="M18.5 9.4v4.4" />
    </>
  ),
  bulb: (
    <>
      <path d="M11 3.2a5.8 5.8 0 0 0-3.35 10.53c.5.36.8.9.8 1.5v.37h5.1v-.37c0-.6.3-1.14.8-1.5A5.8 5.8 0 0 0 11 3.2Z" />
      <path d="M8.9 18h4.2M9.4 20h3.2" />
    </>
  ),
  route: (
    <>
      <circle cx="4" cy="17.5" r="1.5" fill="var(--norah-teal)" stroke="none" />
      <path d="M6 16.8c3-.6 5.2-2.4 6.3-4.3s1.9-4 3.9-5.3" strokeDasharray="2.2 2.4" />
      <path d="M16.8 3.2a3 3 0 0 0-3 3c0 2.1 3 5.4 3 5.4s3-3.3 3-5.4a3 3 0 0 0-3-3Z" strokeLinejoin="round" />
      <circle cx="16.8" cy="6.2" r="1" fill="var(--norah-brand)" stroke="none" />
    </>
  ),
};

export function ServiceCards({ services, columns = 2 }: { services: Service[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
      {services.map((s) => (
        <div key={s.title} className="glass-card p-6">
          <div
            className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px]"
            style={{ background: "var(--norah-teal)" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="var(--norah-brand)"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {icons[s.icon]}
            </svg>
          </div>
          <h3 className="text-[1.125rem]">{s.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
