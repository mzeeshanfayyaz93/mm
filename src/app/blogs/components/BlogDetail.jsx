// components/BlogDetail.jsx
import React from 'react';

const BlogDetail = ({ blog }) => {
  if (!blog) return <p>No blog found</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div className="prose max-w-none">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
