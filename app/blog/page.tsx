import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { MarketingPage } from "@/components/landing/marketing-page";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on product analytics, data modeling, and shipping with confidence.",
};

export default function BlogPage() {
  return (
    <MarketingPage
      eyebrow="Blog"
      title="Notes from the data side"
      description="Practical writing on product analytics, funnels, cohorts, and the habits of teams that ship with confidence."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full transition-[box-shadow] hover:ring-2 hover:ring-primary/40">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg leading-snug group-hover:text-primary">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <p className="mt-4 text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </MarketingPage>
  );
}