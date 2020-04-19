import React from "react";
import { Link } from "react-router-dom";
import OnVisible from "react-on-visible";

const BlogPostPreview = (props) => {
  return (
    <OnVisible className="fadeUpPrepare">
      <div
        className={`shadow-xl rounded-md bg-white py-6 px-8 ${props.className}`}
      >
        <h4 className="font-montbold font-semibold text-2xl mt-4">
          {props.title}
        </h4>
        <span className="text-sm text-mutedblue mb-6 block font-montbold">
          {props.date}
        </span>
        <p className="font-montbold text-sm md:text-base leading-relaxed">
          {props.previewText}
        </p>
        <Link
          to="/blog"
          className="text-mutedpurple block my-6 hover:text-brightblue font-montbold"
        >
          Read more
        </Link>
      </div>
    </OnVisible>
  );
};

export default BlogPostPreview;
