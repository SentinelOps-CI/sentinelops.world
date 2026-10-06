import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Download, FileText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const PaperViewer = () => {
  const [searchParams] = useSearchParams();
  const file = searchParams.get("file");
  const title = searchParams.get("title") || "Document";
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const safeFileUrl = useMemo(() => {
    if (!file) return null;
    try {
      // Ensure absolute URL for robust behavior across environments
      return new URL(file, window.location.origin).toString();
    } catch {
      return null;
    }
  }, [file]);

  useEffect(() => {
    document.title = `${title} — View PDF`;
    // Canonical tag
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = window.location.href;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [title]);

  useEffect(() => {
    let revoked = false;
    const load = async () => {
      if (!safeFileUrl) {
        setIsLoading(false);
        toast({
          title: "Missing file",
          description: "No PDF file was specified.",
          variant: "destructive",
        });
        return;
      }
      try {
        const res = await fetch(safeFileUrl);
        if (!res.ok) throw new Error(`Failed to load PDF (${res.status})`);
        const blob = await res.blob();
        // Basic content-type sanity check
        if (blob.type && !blob.type.includes("pdf")) {
          // Still allow preview but inform user
          toast({
            title: "Non-PDF content",
            description: "Attempting to preview the file.",
          });
        }
        const url = URL.createObjectURL(blob);
        if (!revoked) setBlobUrl(url);
      } catch (err) {
        console.error("PDF view error:", err);
        toast({
          title: "Unable to preview PDF",
          description: "The file could not be loaded. You can still download it.",
          variant: "destructive",
        });
      } finally {
        if (!revoked) setIsLoading(false);
      }
    };
    load();
    return () => {
      revoked = true;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [safeFileUrl, toast]);

  return (
    <Layout>
      <Seo
        title={`${title} — Paper Viewer | SentinelOps`}
        description={`Read ${title} from SentinelOps — research papers on formal verification, runtime safety, and provably safe AI systems.`}
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
