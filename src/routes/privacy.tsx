import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gravy Pass" },
      { name: "description", content: "Privacy policy for Gravy Pass." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="flex min-h-screen items-start justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-card rounded-2xl shadow-lg p-8">
        <Link to="/" className="text-cta text-sm font-medium hover:underline mb-6 inline-block">
          ← Back
        </Link>
        <h1 className="text-2xl font-extrabold text-heading mb-6">Privacy Policy</h1>
        <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
          <p><strong>Effective Date:</strong> January 1, 2025</p>
          <p>
            earnandgame.com ("we", "us", or "our") operates this website. This page informs you of
            our policies regarding the collection, use, and disclosure of personal information when
            you use our service.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, age range, device
            information, and usage data when you interact with our website and services.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, process rewards and
            payouts, communicate with you about offers, and comply with legal obligations.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Third-Party Services</h2>
          <p>
            We may share your information with third-party partners for the purpose of delivering
            offers, processing payments, and analytics. We do not sell your personal information.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and
            hold certain information. You can instruct your browser to refuse all cookies.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Data Security</h2>
          <p>
            We strive to use commercially acceptable means of protecting your personal information,
            but no method of transmission over the Internet is 100% secure.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at
            support@earnandgame.com.
          </p>
        </div>
      </div>
    </div>
  );
}
