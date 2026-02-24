import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import { articles } from "@/data/journal";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/journal" replace />;

  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Back link */}
          <motion.div {...fadeUp()}>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Journal
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div {...fadeUp(0.05)} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium flex items-center gap-1.5">
                <Tag className="h-3 w-3" /> {article.category}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> {article.readTime}
              </span>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Dev-Link Team</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-8 lg:p-10 mb-12">
            <div className="space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground text-sm leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Related */}
          {related.length > 0 && (
            <motion.div {...fadeUp(0.2)}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Related Articles
              </h3>
              <div className="grid sm:grid-cols-2 gap-5 mb-12">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/journal/${r.slug}`}
                    className="glass-hover rounded-2xl p-5 group"
                  >
                    <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-3xl p-8 lg:p-12 text-center"
            style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 18%))" }}
          >
            <h2 className="font-display text-2xl font-bold text-background mb-3">
              Try Sangpt Today
            </h2>
            <p className="text-background/60 max-w-md mx-auto mb-6 text-sm">
              Experience the AI assistant that respects your privacy and adapts to your workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all text-sm"
              >
                Download Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all text-sm"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
