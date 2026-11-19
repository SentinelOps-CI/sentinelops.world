
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const SubscribeSuccess = () => {
  return (
    <Layout>
      <Seo
        noIndex
        title="Newsletter Information | SentinelOps"
        description="Information about subscribing to SentinelOps research updates."
        path="/subscribe/success"
      />
      <article className="container-article article-paper">
        <div className="eyebrow mb-6">Newsletter</div>
        <h1 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">Newsletter subscription.</h1>
        <p className="text-lg italic text-foreground/80 mb-10">
          Subscribe through the form on the Writing page. A successful submission is confirmed in the form itself.
        </p>
        <hr className="rule mb-10" />
        <div className="space-y-4 text-base">
          <p>
            Read the <Link to="/mission">mission</Link> and the
            {" "}<Link to="/docs">documentation</Link> are good starting points.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Questions about subscription preferences and personal information belong with the contact channels.
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="eyebrow hover:text-foreground transition-colors">← Return home</Link>
        </div>
      </article>
    </Layout>
  );
};

export default SubscribeSuccess;
