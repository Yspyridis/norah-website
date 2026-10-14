export function DarkPanel({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`p-8 text-[var(--norah-white)] sm:p-10 ${className}`}
      style={{ background: "var(--norah-brand)" }}
    >
      {children}
    </div>
  );
}
