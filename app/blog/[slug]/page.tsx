import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Badge } from "@/components/ui/badge";
import { P, Strong } from "@/components/docs/primitives";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <MarketingPage title={post.title} description={post.excerpt}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{post.category}</Badge>
          <p className="text-xs text-muted-foreground">
            {post.date} · {post.readTime}
          </p>
        </div>
        <div className="mt-6">
          {post.content.map((paragraph, i) => (
            <P key={i}>
              {i === 0 ? (
                <Strong>{paragraph}</Strong>
              ) : (
                paragraph
              )}
            </P>
          ))}
        </div>
      </div>
    </MarketingPage>
  );
}