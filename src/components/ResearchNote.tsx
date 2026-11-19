import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ResearchNoteProps = {
  section: string;
  date: string;
  readTime: string;
  title: string;
  dek: string;
  children: ReactNode;
};

const ResearchNote = ({
  section,
  date,
  readTime,
  title,
  dek,
  children,
}: ResearchNoteProps) => (
  <article className="container mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-20 article-paper">
    <header className="border-b border-border pb-10">
      <Link
        to="/blog"
        className="eyebrow inline-block transition-colors hover:text-foreground"
      >
        Writing index
      </Link>

      <div className="mt-8 grid gap-6 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <div>{section}</div>
          <div>{date}</div>
          <div>{readTime}</div>
        </div>

        <div>
          <h1 className="max-w-3xl text-4xl font-light leading-[1.03] tracking-[-0.035em] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl font-serif text-xl leading-[1.55] text-foreground/80 md:text-2xl">
            {dek}
          </p>
        </div>
      </div>
    </header>

    <div className="mt-12 space-y-14">{children}</div>

    <footer className="mt-16 border-t border-border pt-8">
      <Link
        to="/blog"
        className="eyebrow transition-colors hover:text-foreground"
      >
        Writing index
      </Link>
    </footer>
  </article>
);

export default ResearchNote;
