
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const SubscribeSuccess = () => {
  return (
    <Layout>
      <Seo
        title="Subscribed · Thanks for Joining | SentinelOps"
        description="You're subscribed to the SentinelOps newsletter. Expect updates on verified AI research, releases, and contributor calls."
        path="/subscribe/success"
      />
      <article className="container-article article-paper">
        <div className="eyebrow mb-6">Subscription · Confirmed</div>
        <h1 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">You are subscribed.</h1>
        <p className="text-lg italic text-foreground/80 mb-10">
          You will receive periodic dispatches on verified AI research, releases, and contributor calls.
        </p>
        <hr className="rule mb-10" />
        <div className="space-y-4 text-base">
          <p>
            Each dispatch is short. In the meantime, the <Link to="/mission">mission</Link> and the
            {" "}<Link to="/docs">documentation</Link> are good starting points.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Preference updates and unsubscribe controls appear in every email. Your address stays within the SentinelOps mailing system.
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
