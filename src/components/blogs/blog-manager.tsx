"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Search, Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { useBlogs, useBlogTags } from "@/hooks/use-blogs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost, BlogTag } from "@/types/blog";

const BlogCardSkeleton = () => (
  <Card className="overflow-hidden border-none shadow-sm h-full flex flex-col">
    <Skeleton className="aspect-video w-full" />
    <CardHeader className="space-y-4 p-6">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-full" />
    </CardHeader>
    <CardContent className="p-6 pt-0 flex-grow">
      <Skeleton className="h-20 w-full" />
    </CardContent>
    <CardFooter className="p-6 pt-0 mt-auto">
      <Skeleton className="h-10 w-32" />
    </CardFooter>
  </Card>
);

export default function BlogManager() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const { data: tagsData, isLoading: isLoadingTags } = useBlogTags();
  const {
    data: blogsData,
    isLoading: isLoadingBlogs,
    isError,
  } = useBlogs({
    search,
    tags: selectedTag ? [selectedTag] : undefined,
    page,
    page_size: pageSize,
  });

  const totalPages = blogsData ? Math.ceil(blogsData.count / pageSize) : 0;

  return (
    <>
      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search articles..."
            className="pl-12 h-12 bg-white border-gray-100 rounded-lg shadow-sm focus-visible:ring-primary"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className={`cursor-pointer px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              selectedTag === null
                ? "bg-primary hover:bg-primary/90 shadow-md"
                : "hover:border-primary/20 hover:bg-primary/5"
            }`}
            onClick={() => {
              setSelectedTag(null);
              setPage(1);
            }}
          >
            All Topics
          </Badge>
          {isLoadingTags ? (
            <Skeleton className="h-10 w-24 rounded-lg" />
          ) : (
            tagsData?.map((tag: BlogTag) => (
              <Badge
                key={tag.id}
                variant={selectedTag === tag.name ? "default" : "outline"}
                className={`cursor-pointer px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  selectedTag === tag.name
                    ? "bg-primary hover:bg-primary/90 shadow-md"
                    : "hover:border-primary/20 shadow-sm hover:bg-primary/5"
                }`}
                onClick={() => {
                  setSelectedTag(tag.name);
                  setPage(1);
                }}
              >
                {tag.name}
              </Badge>
            ))
          )}
        </div>
      </div>

      {/* Blogs Grid */}
      {isLoadingBlogs ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-20">
          <p className="text-red-500 font-medium">
            Something went wrong. Please try again later.
          </p>
        </div>
      ) : blogsData?.results.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            No articles found
          </h3>
          <p className="text-gray-600">Try adjusting your search or filters.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearch("");
              setSelectedTag(null);
              setPage(1);
            }}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData?.results.map((blog: BlogPost) => (
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
                      <Badge className="bg-primary text-white shadow-lg border-none font-bold rounded-xl px-3 py-1">
                        {blog.tags[0].name}
                      </Badge>
                    </div>
                  )}
                </Link>

                <CardHeader className="p-6 pb-2">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium uppercase tracking-tight">
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
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
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
                    className="p-0 h-auto text-primary font-bold hover:gap-3 transition-all gap-2"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16 pb-8">
              <Button
                variant="outline"
                className="rounded-lg h-12 w-12 p-0 border-gray-100 text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={page === i + 1 ? "default" : "ghost"}
                    className={`h-12 w-12 rounded-lg font-bold transition-all ${
                      page === i + 1
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "text-gray-400 hover:bg-primary/5 hover:text-primary"
                    }`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                className="rounded-lg h-12 w-12 p-0 border-gray-100 text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
