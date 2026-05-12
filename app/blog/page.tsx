import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Focusly",
  description:
    "Thoughts on focus, deep work, and building better habits around the way you spend your time.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[600px]">
              <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#6B6560] mb-4">
                The Focusly Blog
              </span>
              <h1 className="text-[3rem] md:text-[3.75rem] font-bold text-[#1A1A1A] tracking-[-0.025em] leading-[1.08] mb-4">
                On focus, distraction, and doing the work.
              </h1>
              <p className="text-[1.0625rem] text-[#6B6560] leading-[1.65]">
                Honest writing about deep work, the science of attention, and
                building habits that actually last.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-[#EAE5DF]" />

        {/* Posts */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            {posts.length === 0 ? (
              <p className="text-[#6B6560]">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white rounded-[1.25rem] border border-[#EAE5DF] shadow-[0_1px_3px_rgba(26,26,26,0.05),0_4px_16px_rgba(26,26,26,0.05)] overflow-hidden hover:shadow-[0_2px_8px_rgba(26,26,26,0.08),0_8px_32px_rgba(26,26,26,0.09)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Cover image placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-[#FFF0EC] to-[#EEF5EC] flex items-center justify-center relative overflow-hidden">
                      <div
                        aria-hidden
                        className="absolute w-32 h-32 rounded-full bg-[#FF5C39] opacity-10"
                        style={{ top: "10%", left: "10%" }}
                      />
                      <div
                        aria-hidden
                        className="absolute w-20 h-20 rounded-full bg-[#A8C99F] opacity-15"
                        style={{ bottom: "10%", right: "15%" }}
                      />
                      <span className="text-[2.5rem] select-none">📖</span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#FF5C39] bg-[#FFF0EC] px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="text-[1.0625rem] font-semibold text-[#1A1A1A] leading-[1.4] group-hover:text-[#FF5C39] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[0.875rem] text-[#6B6560] leading-[1.6] flex-1">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#EAE5DF]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF5C39] to-[#E84B28] flex items-center justify-center text-[0.625rem] font-bold text-white">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <span className="text-[0.8125rem] text-[#6B6560]">
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[0.8125rem] text-[#6B6560]">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>·</span>
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
