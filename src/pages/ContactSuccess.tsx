
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const ContactSuccess = () => {
  return (
    <Layout>
      <Seo
        title="Message Received · SentinelOps"
        description="Thanks for reaching out. We've received your message and will get back to you shortly."
        path="/contact/success"
      />
      <article className="container-article article-paper">
        <div className="eyebrow mb-6">Acknowledgement · Correspondence received</div>
        <h1 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">Message received.</h1>
        <p className="text-lg italic text-foreground/80 mb-10">
          Thank you for writing. We will review your note and reply within one to two business days.
        </p>
        <hr className="rule mb-10" />
        <div className="space-y-2 text-base">
          <p>Continue with the <Link to="/docs">documentation</Link> or browse our recent <Link to="/blog">writing</Link>.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="eyebrow hover:text-foreground transition-colors">← Return home</Link>
        </div>
      </article>
    </Layout>
  );
};

export default ContactSuccess;
