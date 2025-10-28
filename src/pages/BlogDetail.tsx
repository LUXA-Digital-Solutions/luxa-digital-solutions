import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Blog Not Found</h1>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  // Get related articles
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.id !== blog.id &&
        (b.category === blog.category ||
          b.tags.some((tag) => blog.tags.includes(tag))),
    )
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareText = blog.title;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Cover Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-brand-charcoal">
        {/* Cover Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex h-full items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <button
              onClick={() => navigate("/blog")}
              className="mb-6 flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </button>

            {/* Category Badge */}
            <Badge className="mb-4 bg-brand-teal text-white">
              {blog.category}
            </Badge>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-12 w-12 rounded-full border-2 border-white/20 object-cover"
                />
                <div>
                  <div className="font-semibold text-white">
                    {blog.author.name}
                  </div>
                  <div className="text-xs text-white/70">
                    {blog.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Share & Progress Sidebar (Desktop) */}
            <div className="sticky top-24 float-left -ml-20 mr-8 hidden xl:block">
              <div className="flex flex-col gap-4">
                {/* Share Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-white hover:shadow-md"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute left-full top-0 ml-2 flex gap-2 rounded-full border border-border bg-card p-2 shadow-lg">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-brand-teal hover:text-white"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-brand-teal hover:text-white"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-brand-teal hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-3xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-2xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:bg-muted prose-pre:text-foreground prose-ul:my-6 prose-li:my-2 max-w-none">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </article>

            {/* Tags */}
            <div className="mt-12 border-t border-border pt-8">
              <div className="mb-4 text-sm font-semibold text-muted-foreground">
                TAGGED IN
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => navigate("/blog")}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-24 w-24 rounded-full border-4 border-brand-teal/20 object-cover"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">
                    {blog.author.name}
                  </h3>
                  <p className="mb-3 text-brand-teal">{blog.author.role}</p>
                  <p className="text-muted-foreground">
                    An expert in their field with years of experience helping
                    businesses succeed in the digital landscape. Passionate
                    about sharing knowledge and driving innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section (Mobile) */}
            <div className="mt-12 border-t border-border pt-8 xl:hidden">
              <div className="mb-4 text-sm font-semibold text-muted-foreground">
                SHARE THIS ARTICLE
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-border bg-gradient-to-b from-card/10 to-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Related Articles
              </h2>
              <p className="mt-3 text-muted-foreground">
                Continue exploring insights and trends
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedBlog.slug}`)}
                >
                  <div className="overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-700 hover:shadow-2xl hover:shadow-brand-teal/10">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute left-4 top-4 bg-brand-teal text-white">
                        {relatedBlog.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-2 line-clamp-2 text-xl font-bold transition-colors duration-300 group-hover:text-brand-teal">
                        {relatedBlog.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-brand-teal">
                        <span className="font-semibold">Read More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal/5 via-purple-500/5 to-cyan-500/5 py-24">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-brand-teal to-cyan-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              Ready to start your project? Get in touch with our team and let's
              discuss how we can help you succeed.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="group rounded-full bg-brand-teal px-8 py-6 text-lg font-semibold text-white shadow-xl shadow-brand-teal/25 transition-all hover:scale-105 hover:bg-brand-teal/90 hover:shadow-2xl hover:shadow-brand-teal/40"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/blog")}
                className="rounded-full border-2 border-brand-teal/40 px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:border-brand-teal/60 hover:bg-brand-teal/10"
              >
                More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
