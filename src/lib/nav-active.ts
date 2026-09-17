/**
 * Nav active-state helpers.
 * Prefers path+hash matches so `/about` and `/about#accreditation`
 * do not light up two top-level items at once.
 */

function normalizeHash(hash: string) {
  return hash.replace(/^#/, "");
}

function scoreHref(pathname: string, hash: string, href: string): number {
  const currentHash = normalizeHash(hash);
  const [path, itemHash] = href.split("#");

  if (itemHash) {
    return pathname === path && currentHash === itemHash ? 300 : 0;
  }

  if (pathname === path) {
    // Exact path; lower score when a hash is present so hash links can win.
    return currentHash ? 100 : 200;
  }

  if (path !== "/" && pathname.startsWith(`${path}/`)) {
    return 150;
  }

  return 0;
}

type NavLike = {
  href: string;
  children?: readonly { href: string }[];
};

function scoreItem(pathname: string, hash: string, item: NavLike): number {
  let best = scoreHref(pathname, hash, item.href);
  for (const child of item.children ?? []) {
    best = Math.max(best, scoreHref(pathname, hash, child.href));
  }
  return best;
}

export function isNavActive(
  pathname: string,
  hash: string,
  item: NavLike,
  allItems: readonly NavLike[],
) {
  const score = scoreItem(pathname, hash, item);
  if (score === 0) return false;
  const best = Math.max(...allItems.map((candidate) => scoreItem(pathname, hash, candidate)));
  return score === best;
}

export function isNavHrefActive(pathname: string, hash: string, href: string) {
  const score = scoreHref(pathname, hash, href);
  // 300 = path+hash, 200 = exact path (no hash), 150 = nested path.
  // 100 (same path while a hash is present) is ignored so hash items can win.
  return score >= 150;
}
