import React from "react";
import { Link } from "react-router-dom";
import OnVisible from "react-on-visible";
import moment from "moment";

const BlogPostPreview = (props) => {
  const postDate = moment(props.date);

  return (
    <OnVisible className="fadeUpPrepare">
      <div
        className={`shadow-xl rounded-md bg-white py-6 px-8 h-full ${props.className}`}
      >
        <h4
          className="font-montbold font-semibold text-2xl mt-4"
          dangerouslySetInnerHTML={{ __html: props.title.rendered }}
        ></h4>
        <span className="text-sm text-mutedblue mb-6 mt-2 block font-montbold">
          {postDate.format("Mo MMM YYYY")}
        </span>
        <p
          className="font-montbold text-sm md:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}
        ></p>
        <Link
          to={`/blog/${props.slug}`}
          className="text-mutedpurple block my-6 hover:text-brightblue font-montbold"
        >
          Read more
        </Link>
      </div>
    </OnVisible>
  );
};

export default BlogPostPreview;
