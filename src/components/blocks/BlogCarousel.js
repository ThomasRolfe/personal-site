import React from "react";
import BlogPostPreview from "./BlogPostPreview";

const BlogCarousel = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
      {props.posts.map((post, index) => {
        return <BlogPostPreview key={index} index={index} {...post} />;
      })}
    </div>
  );
};

export default BlogCarousel;
