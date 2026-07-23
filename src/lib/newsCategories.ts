// Turns a news category label (e.g. "Road Safety") into a URL-friendly slug
// (e.g. "road-safety") used for the ?category= query param and data attributes.
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const ALL_CATEGORY_SLUG = 'all';
