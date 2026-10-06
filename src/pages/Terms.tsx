import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Terms = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service · SentinelOps"
        description="Terms governing use of the SentinelOps website, documentation, and open-source verification tools."
        path="/legal/terms"
      />
      <article className="container-article article-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Legal · Last updated 1 January 2024</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            Terms governing use of the SentinelOps website, documentation, and open-source verification tools.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-light mb-4">§ 1. Acceptance of Terms</h2>
            <p>
              Use of SentinelOps services, websites, or open-source software constitutes acceptance of these Terms of Service. Users who reject these terms must discontinue use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 2. Description of Service</h2>
            <p>
              SentinelOps provides open-source tools and services for AI safety verification. Formal verification tools and runtime safety systems form the core offering. Related documentation supports developers and organizations building AI systems. The services are provided "as is".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 3. Open Source Licence</h2>
            <p>
              SentinelOps open-source software follows the licences specified in each repository. These web-service terms preserve the rights and obligations defined by those repository licences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 4. User Responsibilities</h2>
            <div className="space-y-2">
              <p>Users agree to the following responsibilities.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use services in compliance with applicable law</li>
                <li>Use services for lawful and responsible purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Follow community guidelines in public forums</li>
                <li>Report security vulnerabilities responsibly</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 5. Limitation of Liability</h2>
            <p>
              SentinelOps verification tools support evidence-backed safety claims within stated assumptions and proof scopes. Users retain responsibility for testing and validation. Deployment decisions and production operation also sit with the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 6. Privacy and Data</h2>
            <p>
              Personal data handling follows the Privacy Policy. SentinelOps collects the minimum information needed for service delivery and keeps personal information outside third-party marketing channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 7. Modifications to Terms</h2>
            <p>
              Updated terms are published on this website through the relevant revision date. Continued use following publication constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 8. Termination</h2>
            <p>
              SentinelOps reserves the right to suspend or terminate service access for violations of these terms or other grounds permitted by applicable law. Users retain the right to discontinue service use at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 9. Governing Law</h2>
            <p>
              These terms follow the law of the jurisdiction in which SentinelOps operates. Applicable law governs any conflict-of-law questions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 10. Contact Information</h2>
            <p>
              Questions about these terms belong at legal@sentinelops.dev.
            </p>
          </section>

          <div className="border-t border-border pt-6 mt-12">
            <p className="text-sm text-muted-foreground italic">
              These terms are a working template. Production deployment warrants review by qualified legal counsel for compliance with applicable law.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Terms;
