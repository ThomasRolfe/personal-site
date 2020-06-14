import React, { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";
import LineSeparator from "../components/LineSeparator";
import Loading from "../components/Loading";

const correctMarks = (text) => {
  text = text.replace(/&lt;mark>/g, "<span style='background-color:yellow'>");
  text = text.replace(/&lt;\/mark>/g, "</span>");
  return text;
};

const BlogPost = (props) => {
  const data = useContext(DataContext);
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    setBlogPost(
      data.blogs.filter((post) => {
        return post.slug === props.match.params.slug;
      })[0]
    );
  }, [data.blogs, props.match.params.slug]);

  if (data.loading || !blogPost) {
    return <Loading />;
  }

  return (
    <div className="container py-8 mx-auto px-4 w-full">
      <div className="text-center">
        <h1
          className="font-montbold text-4xl font-semibold"
          dangerouslySetInnerHTML={{ __html: blogPost.title.rendered }}
        ></h1>
        <LineSeparator className="bg-secondary mt-10" />
      </div>
      <div
        className="py-8 cms-content"
        dangerouslySetInnerHTML={{
          __html: correctMarks(blogPost.content.rendered),
        }}
      ></div>
    </div>
  );
};

export default BlogPost;
