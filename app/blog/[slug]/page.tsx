import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/mdx";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Focusly Blog`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        {/* Back link */}
        <div className="max-w-[780px] mx-auto px-6 pt-8 pb-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.875rem] text-[#6B6560] hover:text-[#FF5C39] transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>
        </div>

        <article className="max-w-[780px] mx-auto px-6 py-10">
          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#FF5C39] bg-[#FFF0EC] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#1A1A1A] tracking-[-0.025em] leading-[1.1] mb-6">
              {post.title}
            </h1>

            <p className="text-[1.125rem] text-[#6B6560] leading-[1.6] mb-8 max-w-[600px]">
              {post.description}
            </p>

            {/* Author + meta */}
            <div className="flex items-center gap-4 pb-8 border-b border-[#EAE5DF]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5C39] to-[#E84B28] flex items-center justify-center text-[0.8125rem] font-bold text-white flex-shrink-0">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="text-[0.9375rem] font-medium text-[#1A1A1A]">
                  {post.author}
                </div>
                <div className="text-[0.8125rem] text-[#6B6560]">
                  {formatDate(post.publishedAt)} · {post.readingTime}
                </div>
              </div>
            </div>
          </header>

          {/* MDX Content */}
          <div className="prose">{content}</div>

          {/* Post footer */}
          <footer className="mt-16 pt-8 border-t border-[#EAE5DF]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.9375rem] text-[#6B6560] hover:text-[#FF5C39] transition-colors font-medium"
            >
              <ArrowLeft size={15} />
              Back to all posts
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
