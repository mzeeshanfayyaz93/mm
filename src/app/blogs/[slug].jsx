import { useParams } from 'next/navigation';
import blogData from '../../../../public/blogs.json';
import Image from 'next/image';

const BlogDetail = () => {
  const { slug } = useParams(); // Get slug from URL params

  // Find the blog post that matches the slug
  const blog = blogData.find((blog) => blog.slug === slug);

  // Handle the case where no blog post is found
  if (!blog) {
    return <p className="text-center">Blog post not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div className="relative w-full h-96 mb-6">
        <Image
          src={blog.imageSrc}
          alt={blog.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      {/* Display blog content here */}
    </div>
  );
};

export default BlogDetail;
