import React from "react";
import BlogPostPreview from "./BlogPostPreview";
const BlogPosts = [
  {
    title: "jQuery editing text",
    date: "19-Mar 2020",
    previewText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdet justo duo gubergren...",
    link: "/blog",
  },
  {
    title: "jQuery editing text",
    date: "19-Mar 2020",
    previewText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdet justo duo gubergren...",
    link: "/blog",
  },
  {
    title: "jQuery editing text",
    date: "19-Mar 2020",
    previewText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdet justo duo gubergren...",
    link: "/blog",
  },
];

const BlogCarousel = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
      {BlogPosts.map((post, index) => {
        return (
          <BlogPostPreview
            key={index}
            index={index}
            {...post}
            // className="w-full"
          />
        );
      })}
    </div>
  );
};

export default BlogCarousel;
