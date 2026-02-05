import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-2">
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
