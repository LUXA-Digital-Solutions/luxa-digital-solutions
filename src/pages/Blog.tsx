import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogs } from "@/data/blogs";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = filter === "all" || blog.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const latestBlog = filteredBlogs[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-teal/5 to-background pb-20 pt-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full bg-brand-teal/30 blur-3xl"></div>
          <div className="absolute -right-40 top-40 h-96 w-96 animate-pulse rounded-full bg-purple-500/30 blur-3xl delay-700"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="animate-fade-in-up mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Insights & Updates
            </Badge>

            <h1 className="animate-fade-in-up mb-6 text-5xl font-bold leading-tight delay-100 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-foreground via-brand-teal to-foreground bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-muted-foreground delay-200 sm:text-xl md:text-2xl">
              Explore expert insights, industry trends, and actionable tips to
              elevate your digital presence and drive business growth.
            </p>

            {/* Search Bar */}
            <div className="animate-fade-in-up mx-auto mt-12 max-w-2xl delay-300">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by keyword, topic, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 rounded-full border-2 border-border/50 bg-background/50 pl-12 pr-4 text-base backdrop-blur-sm transition-all focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 border-b border-border/50 bg-background/80 py-6 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "scale-105 bg-brand-teal text-white shadow-lg shadow-brand-teal/25"
                    : "bg-card/50 text-muted-foreground hover:scale-105 hover:bg-card hover:text-foreground"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            {filteredBlogs.length} article
            {filteredBlogs.length !== 1 ? "s" : ""} found
          </div>
        </div>
      </section>

      {/* Featured Article - Hero */}
      {latestBlog && (
        <section className="bg-gradient-to-b from-background to-card/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-teal/50"></div>
              <Badge className="bg-brand-teal text-white">Latest Article</Badge>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-teal/50"></div>
            </div>

            <div
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-card shadow-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-brand-teal/10"
              onClick={() => navigate(`/blog/${latestBlog.slug}`)}
            >
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 overflow-hidden lg:h-auto">
                  <img
                    src={latestBlog.coverImage}
                    alt={latestBlog.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>

                  {/* Category Badge */}
                  <Badge className="absolute left-6 top-6 bg-brand-teal text-white">
                    {latestBlog.category}
                  </Badge>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h2 className="mb-4 text-3xl font-bold leading-tight transition-colors duration-300 group-hover:text-brand-teal sm:text-4xl lg:text-5xl">
                    {latestBlog.title}
                  </h2>

                  <p className="mb-6 text-lg text-muted-foreground">
                    {latestBlog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{latestBlog.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(latestBlog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{latestBlog.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {latestBlog.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-medium text-brand-teal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand-teal transition-all duration-300 group-hover:gap-4">
                    <span className="text-sm font-semibold">Read Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-gradient-to-b from-card/10 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 1 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {filteredBlogs.slice(1).map((blog, index) => (
                <div
                  key={blog.id}
                  className="animate-fade-in-up group relative cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredBlog(blog.id)}
                  onMouseLeave={() => setHoveredBlog(null)}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                >
                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-700 hover:shadow-2xl hover:shadow-brand-teal/10">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>

                      {/* Category Badge */}
                      <Badge className="absolute left-4 top-4 bg-brand-teal text-white">
                        {blog.category}
                      </Badge>

                      {/* Featured Badge */}
                      {blog.featured && (
                        <Badge className="absolute right-4 top-4 border-brand-gold bg-brand-gold/90 text-brand-charcoal">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(blog.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-brand-teal sm:text-2xl">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {blog.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-semibold">
                            {blog.author.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {blog.author.role}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-brand-teal opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-3xl border-2 border-brand-teal/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="mb-4 h-16 w-16 text-muted-foreground/50" />
              <h3 className="mb-2 text-2xl font-bold">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal/5 via-purple-500/5 to-cyan-500/5 py-24">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-brand-teal to-cyan-500 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              Let's discuss how we can help you achieve your digital goals.
              Schedule a free consultation today.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="group rounded-full bg-brand-teal px-8 py-6 text-lg font-semibold text-white shadow-xl shadow-brand-teal/25 transition-all hover:scale-105 hover:bg-brand-teal/90 hover:shadow-2xl hover:shadow-brand-teal/40"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="rounded-full border-2 border-brand-teal/40 px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:border-brand-teal/60 hover:bg-brand-teal/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Blog;
