
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Terms = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service — SentinelOps"
        description="The terms that govern use of the SentinelOps website, documentation, and open-source verification tools."
        path="/legal/terms"
      />
      <article className="container-prose prose-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Legal · Last updated 1 January 2024</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            The terms that govern use of the SentinelOps website, documentation, and open-source verification tools.
          </p>
        </header>

        <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-light mb-4">§ 1. Acceptance of Terms</h2>
                <p>
                  By accessing or using SentinelOps' services, websites, or open-source software,
                  you agree to be bound by these Terms of Service. If you do not agree to these terms,
                  please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 2. Description of Service</h2>
                <p>
                  SentinelOps provides open-source tools and services for AI safety verification,
                  including formal verification tools, runtime safety systems, and related documentation.
                  Our services are provided "as is" and are intended for use by developers and organizations
                  building AI systems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 3. Open Source License</h2>
                <p>
                  Our open-source software is licensed under various open-source licenses as specified
                  in each repository. These terms apply to our web services and do not supersede or
                  modify the open-source licenses governing our software.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 4. User Responsibilities</h2>
                <div className="space-y-2">
                  <p>You agree to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use our services in compliance with applicable laws and regulations</li>
                    <li>Not use our services for illegal or harmful purposes</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Follow community guidelines in public forums and discussions</li>
                    <li>Report security vulnerabilities responsibly</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 5. Limitation of Liability</h2>
                <p>
                  SentinelOps provides verification tools and services to help improve AI safety,
                  but we cannot guarantee the absolute safety or correctness of any AI system.
                  Users are responsible for thoroughly testing and validating their systems before
                  deployment in production environments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 6. Privacy and Data</h2>
                <p>
                  Our handling of personal data is governed by our Privacy Policy. We collect
                  minimal data necessary to provide our services and do not sell or share personal
                  information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 7. Modifications to Terms</h2>
                <p>
                  We may update these terms from time to time. We will notify users of significant
                  changes through our website or other appropriate means. Continued use of our services
                  after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 8. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate access to our services for violations
                  of these terms or for any other reason at our discretion. Users may discontinue
                  use of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 9. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the jurisdiction in which SentinelOps
                  operates, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 10. Contact Information</h2>
                <p>
                  If you have questions about these terms, please contact us at legal@sentinelops.dev.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-12">
                <p className="text-sm text-muted-foreground italic">
                  Note. These terms are provided as a template and are not legally binding.
                  For actual deployment, please consult with legal counsel to ensure compliance
                  with applicable laws and regulations.
                </p>
              </div>
        </div>
      </article>
    </Layout>
  );
};

export default Terms;
