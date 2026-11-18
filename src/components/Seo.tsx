import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sentinelops.world";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

const Seo = ({ title, description, path, type = "website", jsonLd, noIndex = false }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const inputSchemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const schemas = inputSchemas.map((schema) => schema["@type"] === "Article"
    ? {
        ...schema,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SentinelOps", url: SITE_URL },
      }
    : schema);
  const jsonLdScripts = schemas.map((schema) => ({
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026"),
  }));
  return (
    <Helmet script={jsonLdScripts}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,follow" />}
      {!noIndex && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SentinelOps" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;