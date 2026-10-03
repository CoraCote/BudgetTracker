/**
 * Fictional customer brands used across the marketing site.
 * These are placeholder companies - they are not real businesses.
 * Each entry carries a small style recipe so it can be rendered as a
 * text wordmark (see ClientLogos) instead of using third-party logos.
 */
export const FICTIONAL_BRANDS = [
  {
    name: 'Harborline Outfitters',
    industry: 'Outdoor e-commerce',
    initials: 'HO',
    wordmarkClass: 'font-extrabold uppercase tracking-[0.2em] text-sm',
    accent: 'from-teal-500 to-blue-600',
  },
  {
    name: 'Brightwell Clinics',
    industry: 'Healthcare network',
    initials: 'BC',
    wordmarkClass: 'font-serif font-semibold text-lg',
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Copperleaf Home',
    industry: 'Home & sleep retail',
    initials: 'CH',
    wordmarkClass: 'font-light lowercase tracking-wide text-xl',
    accent: 'from-pink-500 to-purple-600',
  },
  {
    name: 'Northfield Digital',
    industry: 'Performance agency',
    initials: 'ND',
    wordmarkClass: 'font-black tracking-tight text-lg',
    accent: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'Tallgrass Media',
    industry: 'Agency',
    initials: 'TM',
    wordmarkClass: 'font-semibold italic text-lg',
    accent: 'from-indigo-500 to-teal-500',
  },
  {
    name: 'Summit Ridge Auto',
    industry: 'Automotive dealer group',
    initials: 'SR',
    wordmarkClass: 'font-bold uppercase tracking-widest text-sm',
    accent: 'from-blue-600 to-purple-600',
  },
  {
    name: 'Bluepine Travel',
    industry: 'Travel',
    initials: 'BT',
    wordmarkClass: 'font-medium tracking-wide text-lg',
    accent: 'from-teal-500 to-indigo-500',
  },
  {
    name: 'Keystone Ticketing',
    industry: 'Ticketing marketplace',
    initials: 'KT',
    wordmarkClass: 'font-mono font-semibold uppercase tracking-wider text-sm',
    accent: 'from-pink-500 to-indigo-600',
  },
];

export function getBrand(name) {
  return FICTIONAL_BRANDS.find((brand) => brand.name === name);
}
