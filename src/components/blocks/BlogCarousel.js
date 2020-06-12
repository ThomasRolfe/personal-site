import React, { useContext } from "react";
import BlogPostPreview from "./BlogPostPreview";
import DataContext from "../../context/DataContext";

const BlogCarousel = (props) => {
  const data = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
      {data.blogs.map((post, index) => {
        return <BlogPostPreview key={index} index={index} {...post} />;
      })}
    </div>
  );
};

export default BlogCarousel;
