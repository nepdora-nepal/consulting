"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useRecentBlogs } from "@/hooks/use-blogs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost } from "@/types/blog";

const BlogSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="overflow-hidden border-none shadow-sm h-full">
        <Skeleton className="aspect-video w-full" />
        <CardHeader className="space-y-4 p-6">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-full" />
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <Skeleton className="h-20 w-full" />
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Skeleton className="h-10 w-32" />
        </CardFooter>
      </Card>
    ))}
  </div>
);

const Blogs = () => {
  const { data: blogs, isLoading, isError } = useRecentBlogs();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest from our Blog
            </h2>
          </div>
          <BlogSkeleton />
        </div>
      </section>
    );
  }

  if (isError || !blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white" id="blogs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Articles & News
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Insights & <span className="text-blue-600">Strategy</span>
            </h3>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends in business consulting,
              financial strategy, and operational excellence.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-blue-100 text-blue-600 hover:bg-blue-50"
            asChild
          >
            <Link href="/blogs" className="gap-2">
              View All Posts <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: BlogPost) => (
            <Card
              key={blog.id}
              className="group overflow-hidden border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white rounded-2xl"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="relative aspect-video overflow-hidden"
              >
                <Image
                  src={blog.thumbnail_image || "/placeholder-blog.png"}
                  alt={blog.thumbnail_image_alt_description || blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {blog.tags && blog.tags.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {blog.tags[0].name}
                    </span>
                  </div>
                )}
              </Link>

              <CardHeader className="p-6 pb-2">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(blog.created_at), "MMM d, yyyy")}
                  </div>
                  {blog.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {blog.author.username}
                    </div>
                  )}
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h4>
                </Link>
              </CardHeader>

              <CardContent className="p-6 pt-2 flex-grow">
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {blog.meta_description ||
                    blog.content.substring(0, 150).replace(/<[^>]*>/g, "") +
                      "..."}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600 font-bold hover:gap-3 transition-all gap-2"
                  asChild
                >
                  <Link href={`/blogs/${blog.slug}`}>
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
