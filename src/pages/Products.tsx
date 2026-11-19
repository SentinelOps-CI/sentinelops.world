import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { projectGroups } from "@/data/projects";

const Products = () => (
  <Layout>
    <Seo
      title="Open-Source Verification Projects | SentinelOps"
      description="Explore the SentinelOps source repositories for runtime mediation, formal specifications, proof tooling, model integrity, and evaluation."
      path="/products"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">

<div className="lg:col-span-12 max-w-5xl">
            <h1 className="mb-7">Products.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl">
              The public repositories address different parts of the verification problem,
              from stating properties to checking and mediating execution.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mt-5 max-w-3xl">
              The original project catalogue, technical topics, and source links are retained.
              Its status classifications and feature descriptions describe the earlier site,
              not an independently verified release or guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16 sm:py-20">
      {projectGroups.map((group) => (
        <section key={group.number} className="mb-16 sm:mb-20" aria-labelledby={"group-" + group.number}>
          <header className="section-frame section-heading mb-8">
            <div className="section-index">{group.number} / Research area</div>
            <div className="section-title">
              <h2 id={"group-" + group.number}>{group.title}</h2>
            </div>
          </header>

          <ol className="border-t border-[hsl(var(--rule))]">
            {group.projects.map((project) => (
              <li
                key={project.id}
                id={project.id}
                className="grid md:grid-cols-12 gap-4 md:gap-8 border-b border-[hsl(var(--rule))] py-7 sm:py-9 scroll-mt-28"
              >
                <div className="md:col-span-1 eyebrow text-primary pt-1">
                  {project.originalNumber}
                </div>
                <div className="md:col-span-4">
                  <h3>{project.name}</h3>
                </div>
                <div className="md:col-span-5 max-w-xl">
                  <p className="text-muted-foreground leading-relaxed">{project.focus}</p>
                  <ul aria-label={project.name + " technical topics"} className="research-topics">
                    {project.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <details className="research-source-note">
                    <summary>Original project description and classification</summary>
                    <p className="mt-3 leading-relaxed">{project.previousDescription}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Original catalogue label: {project.previousStatus}. This label is
                      retained for continuity and is not a current certification.
                    </p>
                  </details>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:text-primary"
                  >
                    Inspect source ↗
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <div className="border-t border-[hsl(var(--rule-strong))] pt-9 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-3 eyebrow">Complete source index</div>
        <div className="md:col-span-9 max-w-2xl">
          <p className="text-muted-foreground leading-relaxed mb-5">
            The organization directory includes additional repositories, maintenance work,
            and experimental projects. Individual repositories retain the authoritative
            implementation history.
          </p>
          <a
            href="https://github.com/orgs/SentinelOps-CI/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline underline-offset-4 hover:text-primary"
          >
            Browse all repositories ↗
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Products;
