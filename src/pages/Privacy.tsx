import { LegalLayout, Section } from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout
    pageTitle="Privacy Policy — MUSEA"
    eyebrow="Legal"
    title="Privacy Policy."
  >
    <Section title="Overview">
      <p>
        We take the protection of your personal data seriously. This page
        explains what information MUSEA and this website collect, how it is
        used, and the rights you have.
      </p>
    </Section>

    <Section title="Data we collect">
      <p>
        <strong className="text-ink font-medium">Website.</strong> This site does not use tracking cookies or third-party analytics.
        Standard server logs (IP address, browser, referrer) may be collected
        by the hosting provider for security and operational purposes.
      </p>
      <p>
        <strong className="text-ink font-medium">App.</strong> MUSEA stores your favorites and personal collections locally on your
        device. We do not require an account and do not transmit your
        favorites to any server operated by us.
      </p>
    </Section>

    <Section title="Third-party data sources">
      <p>
        Artwork data is fetched from The Metropolitan Museum of Art Open
        Access API. When the app loads artworks, requests go directly to their
        public API. Their terms apply.
      </p>
    </Section>

    <Section title="Your rights">
      <p>
        Under applicable data protection law (including the GDPR), you have
        the right to information, correction, deletion, restriction of
        processing, data portability and to object to processing of your
        personal data. To exercise these rights, contact us at{" "}
        <a href="mailto:bav-labs@proton.me" className="text-ink underline underline-offset-4 decoration-accent">bav-labs@proton.me</a>.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:bav-labs@proton.me" className="text-ink underline underline-offset-4 decoration-accent">bav-labs@proton.me</a>.
      </p>
    </Section>

    <Section title="Updates">
      <p>
        We may update this policy as the project evolves. Material changes
        will be reflected on this page.
      </p>
    </Section>
  </LegalLayout>
);

export default Privacy;
