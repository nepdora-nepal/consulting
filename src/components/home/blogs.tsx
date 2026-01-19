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
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              Academic Insights
            </h2>
            <h3 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Latest from our{" "}
              <span className="text-primary italic">Community</span>
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              Explore professional advice, student success tips, and the latest
              trends in interactive learning and skill development.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-2xl border-primary/10 text-primary hover:bg-primary/5 hover:border-primary/20 font-bold transition-all"
            asChild
          >
            <Link href="/blogs" className="gap-2">
              Explore All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: BlogPost) => (
            <Card
              key={blog.id}
              className="group overflow-hidden border-none shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full bg-white rounded-lg"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="relative aspect-video overflow-hidden m-2 rounded-lg"
              >
                <Image
                  src={blog.thumbnail_image || "/placeholder-blog.png"}
                  alt={blog.thumbnail_image_alt_description || blog.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {blog.tags && blog.tags.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-xl shadow-lg backdrop-blur-sm">
                      {blog.tags[0].name}
                    </span>
                  </div>
                )}
              </Link>

              <CardHeader className="p-8 pb-3">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(new Date(blog.created_at), "MMM d, yyyy")}
                  </div>
                  {blog.author && (
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {blog.author.username}
                    </div>
                  )}
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h4 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
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

              <CardFooter className="p-8 pt-0 mt-auto">
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary font-black hover:gap-3 transition-all gap-2 text-sm uppercase tracking-widest"
                  asChild
                >
                  <Link href={`/blogs/${blog.slug}`}>
                    Read Article <ArrowRight className="h-4 w-4 stroke-[3]" />
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
