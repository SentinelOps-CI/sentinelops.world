import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const channels = [
  {
    label: "Press & media",
    address: "press@sentinelops.dev",
    note: "Interviews, background briefings, and media inquiries.",
  },
  {
    label: "Careers",
    address: "careers@sentinelops.dev",
    note: "Open roles, research collaborations, and applications.",
  },
  {
    label: "Privacy",
    address: "privacy@sentinelops.dev",
    note: "Privacy questions and data-related requests.",
  },
  {
    label: "Legal",
    address: "legal@sentinelops.dev",
    note: "Terms, licensing, and legal correspondence.",
  },
];

const Contact = () => (
  <Layout>
    <Seo
      title="Contact — SentinelOps"
      description="Contact SentinelOps for press, careers, privacy, legal matters, or technical questions about the open-source verification programme."
      path="/contact"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3 pt-2">
            <div className="hero-kicker">Correspondence</div>
            <div className="eyebrow mt-4">Contact</div>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <h1 className="mb-7">Contact.</h1>
            <p className="font-serif text-2xl leading-relaxed text-foreground/[0.86] max-w-3xl">
              Use the channel closest to your inquiry. Technical questions and implementation issues are handled in the relevant public repository.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16 sm:py-20">
      <section className="mb-20">
        <div className="section-frame mb-8">
          <div className="section-heading">
            <div className="section-index">01 / Direct</div>
            <div className="section-title">
              <h2>Correspondence channels.</h2>
            </div>
          </div>
        </div>

        <dl className="border-t border-[hsl(var(--rule))]">
          {channels.map((channel, index) => (
            <div key={channel.address} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[hsl(var(--rule))] items-baseline">
              <dt className="md:col-span-1 mono text-xs text-muted-foreground">0{index + 1}</dt>
              <dd className="md:col-span-3 font-medium">{channel.label}</dd>
              <dd className="md:col-span-5 text-muted-foreground">{channel.note}</dd>
              <dd className="md:col-span-3 md:text-right">
                <a href={`mailto:${channel.address}`} className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary">
                  {channel.address}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border border-foreground bg-[hsl(var(--paper-bright))] p-7 sm:p-10 max-w-4xl">
        <div className="eyebrow mb-4">Technical questions</div>
        <h2 className="mb-4">Work in public.</h2>
        <p className="text-muted-foreground max-w-2xl mb-6">
          For implementation questions, bug reports, or project-specific discussion, use the issue tracker in the relevant SentinelOps repository so the technical record remains public and reproducible.
        </p>
        <a
          href="https://github.com/orgs/SentinelOps-CI/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-primary hover:text-primary/70 border-b border-primary pb-1"
        >
          Browse repositories ↗
        </a>
      </section>
    </div>
  </Layout>
);

export default Contact;
