import React, { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";
import LineSeparator from "../components/LineSeparator";
import Loading from "../components/Loading";
import BreadCrumbs from "../components/blocks/Breadcrumbs";
import { Helmet } from "react-helmet";
import Error from "../components/Error";

const correctMarks = (text) => {
  text = text.replace(/&lt;mark>/g, "<span style='background-color:yellow'>");
  text = text.replace(/&lt;\/mark>/g, "</span>");
  return text;
};

const BlogPost = (props) => {
  const data = useContext(DataContext);
  const [blogPost, setBlogPost] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    setBlogPost(
      data.blogs.filter((post) => {
        return post.slug === props.match.params.slug;
      })[0]
    );
  }, [data.blogs, props.match.params.slug]);

  useEffect(() => {
    if (!blogPost) {
      return;
    }
    setBreadcrumbs([
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: blogPost.slug,
        path: `/blog/${blogPost.slug}`,
      },
    ]);
  }, [blogPost]);

  if (!data.loading && !blogPost) {
    return <Error />;
  }

  if (data.loading || !blogPost) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title dangerouslySetInnerHTML={{ __html: blogPost.title.rendered }}>
          {`${blogPost.title.rendered} | Tom Rolfe | Full Stack Web Developer`}
        </title>
      </Helmet>
      <div className="container py-8 mx-auto px-4 w-full">
        <BreadCrumbs crumbs={breadcrumbs} />
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
    </>
  );
};

export default BlogPost;
