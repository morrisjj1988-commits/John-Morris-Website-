import type { ImageMetadata } from 'astro';

// Optional real photos for news posts: drop a file at
// src/assets/images/news/<post-slug>.(jpg|jpeg|png|webp) and it's picked up
// automatically, matched by filename against the post's slug. Posts without
// a matching file fall back to the PlaceholderPhoto graphic.
const newsImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/news/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export function getNewsImage(slug: string): ImageMetadata | undefined {
  const entry = Object.entries(newsImages).find(([path]) => {
    const filename = path.split('/').pop() ?? '';
    return filename.replace(/\.[^.]+$/, '') === slug;
  });
  return entry?.[1].default;
}
