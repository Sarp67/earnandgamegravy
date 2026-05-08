import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Gravy Pass" },
      { name: "description", content: "Terms of service for Gravy Pass." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="flex min-h-screen items-start justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-card rounded-2xl shadow-lg p-8">
        <Link to="/" className="text-cta text-sm font-medium hover:underline mb-6 inline-block">
          ← Back
        </Link>
        <h1 className="text-2xl font-extrabold text-heading mb-6">Terms of Service</h1>
        <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
          <p><strong>Effective Date:</strong> January 1, 2025</p>
          <p>
            By accessing or using earnandgame.com ("the Service"), you agree to be bound by these
            Terms of Service. If you do not agree, do not use the Service.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Eligibility</h2>
          <p>
            You must be at least 13 years of age to use this Service. Users under 21 may have
            limited payout options as described on the platform.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Use of the Service</h2>
          <p>
            You agree to use the Service only for lawful purposes and in accordance with these
            Terms. You are responsible for maintaining the confidentiality of your account.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Rewards & Payouts</h2>
          <p>
            Rewards are subject to availability and completion of required offers. We reserve the
            right to modify, suspend, or discontinue rewards at any time without notice.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this website are the property of earnandgame.com
            or its licensors. Game names and logos are trademarks of their respective owners.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Limitation of Liability</h2>
          <p>
            The Service is provided "as is" without warranties of any kind. We shall not be liable
            for any indirect, incidental, or consequential damages arising from your use of the
            Service.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service
            constitutes acceptance of updated Terms.
          </p>
          <h2 className="text-heading font-bold text-base pt-2">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@earnandgame.com.
          </p>
        </div>
      </div>
    </div>
  );
}
