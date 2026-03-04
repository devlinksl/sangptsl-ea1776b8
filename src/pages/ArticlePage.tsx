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

          {/* Hero Image */}
          {article.image && (
            <motion.div {...fadeUp(0.03)} className="rounded-3xl overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </motion.div>
          )}

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
                    className="glass-hover rounded-2xl overflow-hidden group"
                  >
                    {r.image && (
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-5">
                      <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors leading-snug">
                        {r.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(220 15% 8%), hsl(250 20% 15%), hsl(220 25% 10%))" }}
          >
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, hsla(220, 80%, 60%, 0.2), transparent 50%)" }} />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Try Sangpt Today
              </h2>
              <p className="text-white/50 max-w-md mx-auto mb-6 text-sm">
                Experience Sierra Leone's AI assistant. Private, smart, and built for you.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-sm"
                >
                  Download Free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/10 transition-all text-sm"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
