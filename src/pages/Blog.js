import React, { useEffect, useState } from "react";
import LineSeparator from "../components/LineSeparator";
import BlogPostPreview from "../components/blocks/BlogPostPreview";

const Blog = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="container py-8 mx-auto text-center px-4 w-full md:w-4/6">
      <h1 className="font-montbold text-4xl font-semibold ">Blog</h1>
      <LineSeparator className="bg-secondary mt-10" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
        {(props.loading || isLoading) && <div>Loading</div>}
        {!props.loading &&
          !isLoading &&
          !error &&
          props.posts.map((post, index) => {
            return <BlogPostPreview key={index} index={index} {...post} />;
          })}
        {error && <div>Error occured</div>}
      </div>
    </div>
  );
};

export default Blog;
