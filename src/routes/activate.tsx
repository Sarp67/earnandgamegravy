import { createFileRoute } from "@tanstack/react-router";
import { Lock, CheckCircle2 } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import coinIcon from "@/assets/coin-icon.png";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/activate")({
  head: () => ({
    meta: [
      { title: "You're In! — Gravy Pass" },
      { name: "description", content: "Activate your Gravy Pass wallet and start earning." },
    ],
  }),
  component: Activate,
});

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta text-cta-foreground flex items-center justify-center font-bold text-sm">
        {n}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-heading mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Activate() {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <div className="pt-6 text-center">
        <span className="text-heading font-semibold text-lg tracking-wide">Gravy Pass</span>
      </div>

      <div className="flex-1 py-8 max-w-md w-full mx-auto space-y-6">
        {/* Hero card */}
        <div className="bg-card rounded-2xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={instagramLogo} alt="Instagram" className="w-16 h-16 rounded-xl" />
            <span className="text-2xl font-bold text-heading leading-none flex items-center">✕</span>
            <img src={coinIcon} alt="Coin" className="w-14 h-14 rounded-xl object-contain" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-cta" strokeWidth={2.5} />
            <h1 className="text-3xl font-extrabold text-heading">You're In!</h1>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Your account is eligible to unlock exclusive earning features. Activate Gravy Wallet to
            gain full access.
          </p>
          <p className="text-foreground text-sm mb-6">
            💰 Every in-app purchase pays you back <strong>2x</strong> straight to your Gravy Pass
            wallet
          </p>
          <a
            href="https://track.topdls.com/click"
            className="block w-full bg-cta text-cta-foreground rounded-full py-4 px-6 font-bold text-base hover:opacity-90 transition-opacity"
          >
            ACTIVATE WALLET &amp; START EARNING
          </a>
        </div>

        {/* Journey card */}
        <div className="bg-[oklch(0.95_0.04_195)] rounded-2xl p-8">
          <h2 className="text-center font-extrabold text-heading tracking-wider text-sm mb-6">
            YOUR EARNING JOURNEY
          </h2>
          <div className="space-y-5">
            <Step n={1} title="Add Gravy Pass to Your Wallet">
              Available on Apple Wallet (iOS) &amp; Google Wallet (Android) · Takes less than 60
              seconds · No app download required
            </Step>
            <Step n={2} title="Complete Starter Offers">
              Play games, try apps, or complete simple challenges · Unlock access to popular gaming
              rewards. (Roblox, Fortnite, Subway Surfers)
            </Step>
            <Step n={3} title="Get Paid Instantly">
              Earnings are credited directly to your Apple Wallet or Google Wallet · No cashout
              apps. No waiting.
            </Step>
          </div>
        </div>

        {/* Activation required */}
        <div className="bg-card rounded-2xl p-6 border-2 border-red-500 relative">
          <span className="absolute -top-3 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
            IMPORTANT
          </span>
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-heading flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-heading mb-2">Activation Required</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-heading">New users:</strong>{" "}
                <strong className="text-heading">
                  Every in-app purchase pays you back double straight to your Gravy Pass. Complete 2
                  quick offers
                </strong>{" "}
                to unlock full access and start earning with paid-to-scroll features and top Games
                like Roblox, Subway Surfers, and more.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-heading text-sm">
          Trusted by over 500,000 users earning money daily
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
