import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="w-full text-center text-[10px] text-muted-foreground py-6 mt-auto">
      <div className="flex items-center justify-center gap-2">
        <Link to="/privacy" className="underline hover:text-heading transition-colors">
          Privacy Policy
        </Link>
        <span>·</span>
        <Link to="/terms" className="underline hover:text-heading transition-colors">
          Terms of Service
        </Link>
      </div>
      <p className="mt-1">© 2025 earnandgame.com. All rights reserved.</p>
      <p>This site is not affiliated with or endorsed by any game publisher or platform mentioned herein.</p>
    </footer>
  );
}
