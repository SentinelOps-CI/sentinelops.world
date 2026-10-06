
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Privacy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy — SentinelOps"
        description="How SentinelOps collects, uses, and protects information about visitors and subscribers across its website and tools."
        path="/legal/privacy"
      />
      <article className="container-prose prose-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Legal · Last updated 1 January 2024</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            How SentinelOps collects, uses, and protects information about visitors and subscribers.
          </p>
        </header>

        <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-light mb-4">§ 1. Information We Collect</h2>
                <div className="space-y-3">
                  <p>We collect minimal information necessary to provide our services:</p>

                  <div>
                    <h3 className="eyebrow mb-2">Information You Provide</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Contact information when you reach out to us</li>
                      <li>Account information if you create an account</li>
                      <li>Content you submit through forms or communications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="eyebrow mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Basic usage analytics and website performance metrics</li>
                      <li>IP addresses and browser information for security purposes</li>
                      <li>Cookies for essential website functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 2. How We Use Information</h2>
                <div className="space-y-2">
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide and improve our services</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send important updates about our services</li>
                    <li>Ensure security and prevent abuse</li>
                    <li>Analyze usage patterns to improve user experience</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 3. Information Sharing</h2>
                <div className="space-y-3">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers who assist in our operations (under strict privacy agreements)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your information against unauthorized
                  access, alteration, disclosure, or destruction. This includes encryption of data in transit
                  and at rest, regular security assessments, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 5. Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to fulfill the purposes outlined
                  in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
                  When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 6. Your Rights</h2>
                <div className="space-y-2">
                  <p>Depending on your location, you may have the right to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal information</li>
                    <li>Object to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                  <p className="mt-2">
                    To exercise these rights, please contact us at privacy@sentinelops.dev.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 7. Open Source Considerations</h2>
                <p>
                  When you contribute to our open-source projects, your contributions (including any personal
                  information in commit messages or comments) become part of the public repository and are
                  governed by the applicable open-source license.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 8. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that a child under 13 has provided
                  us with personal information, we will delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 9. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place to protect your information in accordance
                  with this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material
                  changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">§ 11. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or our privacy practices, please contact
                  us at privacy@sentinelops.dev.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-12">
                <p className="text-sm text-muted-foreground italic">
                  Note. This privacy policy is provided as a template and may not reflect
                  all legal requirements. For actual deployment, please consult with legal counsel to ensure
                  compliance with applicable privacy laws and regulations.
                </p>
              </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
