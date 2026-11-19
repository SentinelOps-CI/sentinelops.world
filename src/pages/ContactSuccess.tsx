
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const ContactSuccess = () => {
  return (
    <Layout>
      <Seo
        noIndex
        title="Contact Information · SentinelOps"
        description="SentinelOps correspondence channels and research documentation."
        path="/contact/success"
      />
      <article className="container-article article-paper">
        <div className="eyebrow mb-6">Contact</div>
        <h1 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">Contact information.</h1>
        <p className="text-lg italic text-foreground/80 mb-10">
          Use the contact channels to send an inquiry. Visiting this page directly does not confirm that a message was delivered.
        </p>
        <hr className="rule mb-10" />
        <div className="space-y-2 text-base">
          <p>See the <Link to="/contact">contact channels</Link>, <Link to="/docs">documentation</Link>, or recent <Link to="/blog">writing</Link>.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="eyebrow hover:text-foreground transition-colors">← Return home</Link>
        </div>
      </article>
    </Layout>
  );
};

export default ContactSuccess;
