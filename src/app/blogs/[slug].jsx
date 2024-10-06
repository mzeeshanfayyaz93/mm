// blogs/[slug].jsx
import BlogDetail from '../../components/BlogDetail'; // Assuming BlogDetail is the component for displaying the blog

export async function getStaticPaths() {
  // Fetch or simulate your blog slugs here
  const blogs = [
    { slug: 'top-5-marketing-strategies-for-online-brokers-2024' },
    { slug: 'how-to-mitigate-market-volatility-expert-tips' },
    // Add more slugs as needed
  ];

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug }, // Define slug parameter for each blog
  }));

  return { paths, fallback: false }; // fallback: false means other routes should 404
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch or simulate blog content based on slug
  const blogData = {
    'top-5-marketing-strategies-for-online-brokers-2024': {
      title: 'Top 5 Marketing Strategies for Online Brokers in 2024',
      content: 'This is the content of the marketing strategies blog...',
    },
    'how-to-mitigate-market-volatility-expert-tips': {
      title: 'How to Mitigate Market Volatility: Expert Tips for Risk Management',
      content: 'This is the content for mitigating market volatility...',
    },
    // Add more blog data as needed
  };

  const blog = blogData[slug];

  if (!blog) {
    return { notFound: true }; // If blog not found, return 404
  }

  return {
    props: { blog }, // Pass blog data to the BlogDetail component
  };
}

const BlogPost = ({ blog }) => {
  return (
    <div>
      <BlogDetail blog={blog} /> {/* Pass the blog data to BlogDetail component */}
    </div>
  );
};

export default BlogPost;
