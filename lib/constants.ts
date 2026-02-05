export const SITE_CONFIG = {
  name: "Next.js Starter Kit",
  description:
    "Next.js 16 App Router starter kit with TailwindCSS v4 and shadcn/ui",
  url: "https://example.com",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/yourusername/your-repo",
  },
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/dashboard", label: "대시보드" },
] as const;
