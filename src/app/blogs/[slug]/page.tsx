"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import {
  Calendar,
  ArrowLeft,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import { useBlog } from "@/hooks/use-blogs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Blogs from "@/components/home/blogs";

const BlogDetailSkeleton = () => (
  <div className="container mx-auto px-4 md:px-6 py-12">
    <Skeleton className="h-6 w-32 mb-8" />
    <Skeleton className="h-12 w-full max-w-3xl mb-6" />
    <div className="flex gap-4 mb-12">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-10 w-32" />
    </div>
    <Skeleton className="aspect-video w-full rounded-2xl mb-12" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: blog, isLoading, isError } = useBlog(slug);

  if (isLoading) return <BlogDetailSkeleton />;

  if (isError || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Article Not Found</h1>
        <p className="text-gray-600">
          The blog post you are looking for might have been moved or deleted.
        </p>
        <Button asChild>
          <Link href="/blogs">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8 gap-2 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Articles
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  className="bg-blue-600 hover:bg-blue-700 border-none px-4 py-1.5 rounded-full shadow-sm"
                >
                  {tag.name}
                </Badge>
              ))}
              {blog.time_to_read && (
                <Badge
                  variant="outline"
                  className="border-blue-200 text-blue-600 bg-blue-50/50 px-4 py-1.5 rounded-full"
                >
                  <Clock className="h-3 w-3 mr-1" /> {blog.time_to_read}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-400 font-medium tracking-tight">
              {blog.author && (
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
                    {blog.author.username.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest leading-none mb-1">
                      Written by
                    </div>
                    <div className="font-bold">{blog.author.username}</div>
                  </div>
                </div>
              )}
              <div className="h-10 w-[1px] bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-300" />
                <span>{format(new Date(blog.created_at), "MMMM d, yyyy")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <article className="lg:col-span-8 space-y-12">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={blog.thumbnail_image || "/placeholder-blog.png"}
                alt={blog.thumbnail_image_alt_description || blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg lg:prose-xl max-w-none text-gray-600 leading-relaxed font-normal
                prose-headings:text-gray-900 prose-headings:font-extrabold prose-headings:tracking-tight
                prose-p:mb-8 prose-p:leading-8
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-3xl prose-img:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-32 h-fit">
            {/* Share Post */}
            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Share2 className="h-5 w-5 text-blue-600" /> Share this Article
              </h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl border-gray-200 hover:bg-blue-50 text-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl border-gray-200 hover:bg-blue-50 text-sky-500"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl border-gray-200 hover:bg-blue-50 text-blue-700"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-blue-600 p-8 rounded-3xl text-white space-y-6 shadow-xl shadow-blue-100 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold leading-tight">
                  Join our exclusive newsletter
                </h3>
                <p className="text-blue-100 text-sm">
                  Get the latest business insights delivered straight to your
                  inbox every week.
                </p>
                <div className="space-y-3 pt-2">
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-extrabold h-12 rounded-xl border-none">
                      Subscribe Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 h-32 w-32 bg-white/10 rounded-full translate-x-12 -translate-y-12 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            </div>
          </aside>
        </div>
      </div>

      {/* Suggested Articles */}
      <div className="bg-gray-50/50 border-t border-gray-100">
        <Blogs />
      </div>
    </div>
  );
}
