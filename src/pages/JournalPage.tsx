import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import { articles, categories } from "@/data/journal";

const JournalPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = articles.find((a) => a.featured);
  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Hero */}
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-7 w-7 text-foreground" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Sangpt Journal
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Insights, updates, and ideas from the team building Sangpt. Explore our thinking on AI, privacy, product design, and the future of intelligent software.
            </p>
          </motion.div>

          {/* Featured Article */}
          {featured && (
            <motion.div {...fadeUp(0.05)}>
              <Link
                to={`/journal/${featured.slug}`}
                className="block glass-hover rounded-3xl p-8 lg:p-12 mb-12 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-semibold">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filters */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <motion.div key={article.slug} {...fadeUp(0.12 + i * 0.04)}>
                <Link
                  to={`/journal/${article.slug}`}
                  className="block glass-hover rounded-2xl p-6 h-full group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-foreground/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default JournalPage;
