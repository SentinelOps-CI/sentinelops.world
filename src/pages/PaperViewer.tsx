import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

/**
 * Only the three public research PDFs appear in the viewer. Query parameters
 * never authorize a fetch to an arbitrary origin or path, nor define a title.
 */
const PUBLIC_PAPERS = new Map([
  ["/papers/architecture.pdf", "System Architecture"],
  ["/papers/technical.pdf", "Technical Guide"],
  ["/papers/whitepaper.pdf", "Whitepaper"],
]);

const PaperViewer = () => {
  const [searchParams] = useSearchParams();
  const file = searchParams.get("file");
  const title = (file && PUBLIC_PAPERS.get(file)) || "Document unavailable";
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const safeFileUrl = file && PUBLIC_PAPERS.has(file) ? file : null;

  useEffect(() => {
    let revoked = false;
    let createdUrl: string | null = null;
    setBlobUrl(null);
    setIsLoading(true);
    const load = async () => {
      if (!safeFileUrl) {
        setIsLoading(false);
        toast({
          title: "Document unavailable",
          description: "Select a research PDF from the writing index.",
          variant: "destructive",
        });
        return;
      }
      try {
        const res = await fetch(safeFileUrl);
        if (!res.ok) throw new Error(`Failed to load PDF (${res.status})`);
        const blob = await res.blob();
        if (blob.type && !blob.type.includes("pdf")) {
          throw new Error("Document response is not a PDF");
        }
        const url = URL.createObjectURL(blob);
        if (!revoked) {
          createdUrl = url;
          setBlobUrl(url);
        } else {
          URL.revokeObjectURL(url);
        }
      } catch (err) {
        console.error("PDF view error:", err);
        toast({
          title: "Unable to preview PDF",
          description: "The preview request failed. Use the download action for the source file.",
          variant: "destructive",
        });
      } finally {
        if (!revoked) setIsLoading(false);
      }
    };
    load();
    return () => {
      revoked = true;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [safeFileUrl, toast]);

  return (
    <Layout>
      <Seo
        noIndex
        title={`${title} · Paper Viewer | SentinelOps`}
        description={`Research document viewer for ${title} from SentinelOps.`}
        path="/papers/view"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="container-paper mb-8 pb-6 border-b border-border">
          <Link to="/blog" className="eyebrow inline-flex items-center gap-2 hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> Return to writing
          </Link>
          <div className="eyebrow mb-2">Paper · PDF</div>
          <h1 className="font-light text-2xl md:text-3xl tracking-tight font-sans">{title}</h1>
        </div>

        <div className="container-paper border border-border bg-card">
            {isLoading ? (
              <div className="p-6">
                <Skeleton className="w-full h-[70vh]" />
              </div>
            ) : blobUrl ? (
              <iframe
                title={title}
                src={blobUrl}
                className={cn("w-full h-[80vh]")}
              />
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <p className="mb-4 italic">Preview unavailable. Try downloading the file.</p>
                {safeFileUrl && (
                  <div className="flex justify-center gap-2">
                    <Button asChild variant="default" size="sm">
                      <a href={safeFileUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Original
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={safeFileUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    </Layout>
  );
};

export default PaperViewer;
