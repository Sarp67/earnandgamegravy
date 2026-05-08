import { createFileRoute, Link } from "@tanstack/react-router";
import instagramLogo from "@/assets/instagram-logo.png";
import coinIcon from "@/assets/coin-icon.png";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gravy Pass" },
      { name: "description", content: "Join thousands earning daily by playing popular games" },
      { property: "og:title", content: "Gravy Pass" },
      { property: "og:description", content: "Join thousands earning daily by playing popular games" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <div className="pt-6 text-center">
        <span className="text-heading font-semibold text-lg tracking-wide">Gravy Pass</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={instagramLogo} alt="Instagram" className="w-16 h-16 rounded-xl" />
            <span className="text-2xl font-bold text-heading leading-none flex items-center">✕</span>
            <img src={coinIcon} alt="Coin icon" className="w-14 h-14 rounded-xl object-contain" />
          </div>
          <h1 className="text-3xl font-extrabold text-heading mb-3">Get Paid To Game</h1>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Join thousands earning daily by playing popular games like Roblox, Subway Surfers, 8 Ball Pool, etc.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/activate"
              className="w-full bg-cta text-cta-foreground rounded-xl py-4 px-6 font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              I'm over 21
              <span className="block text-xs font-normal mt-1 opacity-80">
                Instant Payouts: Apple Wallet, Google Wallet, or Wire
              </span>
            </Link>
            <Link
              to="/activate"
              className="w-full bg-card text-cta border-2 border-cta rounded-xl py-4 px-6 font-bold text-lg hover:bg-muted transition-colors cursor-pointer"
            >
              I'm under 21
              <span className="block text-xs font-normal mt-1 opacity-70">
                Limited Payouts: Wire Transfer Only
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
