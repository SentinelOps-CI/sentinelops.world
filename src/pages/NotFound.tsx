
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <Seo
        title="Page Not Found — SentinelOps"
        description="The page you are looking for doesn't exist or has been moved. Browse SentinelOps products, docs, mission, or the research blog instead."
        path="/404"
      />
      <article className="container-prose prose-paper text-center">
        <div className="eyebrow mb-6">Error · 404</div>
        <h1 className="font-light text-5xl md:text-6xl mb-6 tracking-tight">Page Not Found</h1>
        <p className="text-lg italic text-foreground/80 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <hr className="rule mb-10" />
        <div className="flex items-center justify-center gap-8 text-sm">
          <Link to="/" className="eyebrow hover:text-foreground transition-colors">← Return home</Link>
          <button onClick={() => window.history.back()} className="eyebrow hover:text-foreground transition-colors">
            Go back
          </button>
        </div>
      </article>
    </Layout>
  );
};

export default NotFound;
