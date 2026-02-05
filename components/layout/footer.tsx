import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 {SITE_CONFIG.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js 16, TailwindCSS v4, and shadcn/ui
        </p>
      </div>
    </footer>
  );
}
