import BlogHeader from "@/components/blogs/blog-header";
import BlogManager from "@/components/blogs/blog-manager";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <BlogHeader />
        <BlogManager />
      </div>
    </div>
  );
}
