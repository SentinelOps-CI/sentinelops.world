import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Privacy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy · SentinelOps"
        description="SentinelOps privacy practices for information handled across its website and tools."
        path="/legal/privacy"
      />
      <article className="container-article article-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Legal · Last updated 1 January 2024</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            SentinelOps privacy practices for information about visitors and subscribers.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-light mb-4">§ 1. Information We Collect</h2>
            <div className="space-y-3">
              <p>We collect the information needed to operate our services and respond to users.</p>

              <div>
                <h3 className="eyebrow mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Contact information supplied through direct correspondence</li>
                  <li>Account information supplied during account creation</li>
                  <li>Content submitted through forms and communications</li>
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Website usage metrics and performance data</li>
                  <li>IP addresses and browser information used for security</li>
                  <li>Cookies used for core website functions</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 2. How We Use Information</h2>
            <div className="space-y-2">
              <p>Collected information supports the following activities.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Service delivery and product improvement</li>
                <li>Responses to inquiries and support requests</li>
                <li>Important service updates</li>
                <li>Security controls and abuse prevention</li>
                <li>Usage analysis for product quality</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 3. Information Sharing</h2>
            <div className="space-y-3">
              <p>Personal information stays within SentinelOps and contracted service providers except in the circumstances listed below.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Explicit user consent</li>
                <li>Applicable legal duties</li>
                <li>Protection of rights and safety</li>
                <li>Operational service providers working under privacy agreements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 4. Data Security</h2>
            <p>
              Security controls protect information against unauthorized access and alteration. Encryption protects data in transit and at rest. Access management plus regular security assessment address disclosure and destruction risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 5. Data Retention</h2>
            <p>
              Personal information is retained for the period needed to fulfil the purposes described in this policy and meet legal duties. Retention also covers dispute resolution and agreement enforcement. At the end of the applicable retention period, SentinelOps securely deletes or anonymizes the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 6. Your Rights</h2>
            <div className="space-y-2">
              <p>Applicable privacy law grants different rights by jurisdiction. Available rights include the following.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access to personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of personal information</li>
                <li>Objection to specified processing activities</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-2">
                Requests related to these rights belong at privacy@sentinelops.dev.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 7. Open Source Considerations</h2>
            <p>
              Contributions to SentinelOps open-source projects form part of the public repository, including personal information placed in commit messages or comments. Applicable open-source licences govern those contributions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 8. Children's Privacy</h2>
            <p>
              SentinelOps services target users aged 13 and above. Discovery of personal information from a child under 13 triggers prompt deletion of that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 9. International Transfers</h2>
            <p>
              Information processing occurs across jurisdictions involved in SentinelOps operations and service delivery. Appropriate safeguards protect information in accordance with this policy and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 10. Changes to This Policy</h2>
            <p>
              Policy updates are posted on this website with an updated revision date. Material changes receive an appropriate notice through SentinelOps communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">§ 11. Contact Us</h2>
            <p>
              Questions about this policy or SentinelOps privacy practices belong at privacy@sentinelops.dev.
            </p>
          </section>

          <div className="border-t border-border pt-6 mt-12">
            <p className="text-sm text-muted-foreground italic">
              This policy is a working template. Production deployment warrants review by qualified legal counsel for compliance with applicable privacy law.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
