// next/image's `unoptimized` mode and plain CSS url() don't get Next's
// basePath prefixing automatically (only <Link> and its own bundled script/
// style tags do), so any hardcoded root-relative asset path needs this
// applied by hand. Mirrors the basePath set in next.config.ts.
export const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
