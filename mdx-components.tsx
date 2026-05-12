import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[2.25rem] font-bold text-[#1A1A1A] tracking-[-0.025em] leading-[1.2] mt-12 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.625rem] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.25] mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[1.25rem] font-semibold text-[#1A1A1A] tracking-[-0.015em] mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[1.0625rem] text-[#3D3832] leading-[1.75] mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 mb-5 space-y-2 text-[1.0625rem] text-[#3D3832] leading-[1.7]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 mb-5 space-y-2 text-[1.0625rem] text-[#3D3832] leading-[1.7]">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-[#FF5C39] pl-5 my-6 text-[1.0625rem] italic text-[#6B6560]">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[#1A1A1A]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#FF5C39] underline underline-offset-[3px] hover:text-[#E84B28] transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-[#EAE5DF] px-1.5 py-0.5 rounded text-[0.875em] font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#1A1A1A] text-[#FAF8F5] p-5 rounded-xl overflow-x-auto my-6 text-[0.9375rem]">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="border-none border-t border-[#EAE5DF] my-10" />
    ),
    ...components,
  };
}
