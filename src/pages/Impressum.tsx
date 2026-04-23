import { LegalLayout, Section } from "@/components/LegalLayout";

const Impressum = () => (
  <LegalLayout
    pageTitle="Impressum — MUSEA"
    eyebrow="Legal"
    title="Impressum."
  >
    <Section title="Information according to § 5 TMG">
      <p>BAV Labs</p>
      <p>An independent design and development studio.</p>
    </Section>

    <Section title="Represented by">
      <p>Benjamin Sparwasser</p>
      <p>Alex Jäger Peña</p>
      <p>Valeria Bilous</p>
    </Section>

    <Section title="Contact">
      <p>Email: <a href="mailto:bav-labs@proton.me" className="text-ink underline underline-offset-4 decoration-accent">bav-labs@proton.me</a></p>
      <p>GitHub: <a href="https://github.com/BAV-Labs" className="text-ink underline underline-offset-4 decoration-accent" target="_blank" rel="noopener noreferrer">github.com/BAV-Labs</a></p>
    </Section>

    <Section title="Responsible for content according to § 55 Abs. 2 RStV">
      <p>BAV Labs · See contact details above.</p>
    </Section>

    <Section title="Disclaimer">
      <p>
        MUSEA is an independent application. It is not affiliated with,
        endorsed by, or sponsored by The Metropolitan Museum of Art.
        All artwork data is provided through The Metropolitan Museum of Art
        Open Access API.
      </p>
      <p>
        Despite careful content control, we assume no liability for the
        content of external links. The operators of the linked pages are
        solely responsible for their content.
      </p>
    </Section>

    <Section title="Copyright">
      <p>
        Content created by BAV Labs on this site is subject to copyright law.
        Reproduction, processing, distribution and any kind of use outside the
        limits of copyright require written consent of the respective author or creator.
      </p>
    </Section>
  </LegalLayout>
);

export default Impressum;
