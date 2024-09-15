// blogs/[slug].jsx

import { useRouter } from 'next/router';
import BlogDetail from '../../components/BlogDetail'; // Assuming BlogDetail is the component for displaying the blog

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL

  // Here you can fetch the blog data based on the slug
  // For example, you can use getStaticProps or fetch data from an API

  return (
    <div>
      <BlogDetail slug={slug} />
    </div>
  );
};

export default BlogPost;
