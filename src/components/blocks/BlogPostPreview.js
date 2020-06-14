import React from "react";
import { Link } from "react-router-dom";
import OnVisible from "react-on-visible";
import moment from "moment";
import ButtonCta from "../ButtonCta";

const BlogPostPreview = (props) => {
  const postDate = moment(props.date);

  return (
    <OnVisible className="fadeUpPrepare">
      <div
        className={`shadow-md rounded-md bg-white py-6 px-8 h-full flex flex-col ${props.className}`}
      >
        <h4
          className="font-montbold font-semibold text-2xl mt-4"
          dangerouslySetInnerHTML={{ __html: props.title.rendered }}
        ></h4>
        <span className="text-sm text-mutedblue mb-6 mt-2 block font-montbold">
          {postDate.format("Mo MMM YYYY")}
        </span>
        <p
          className="font-montbold text-sm md:text-base leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}
        ></p>
        <Link
          to={`/blog/${props.slug}`}
          className="text-secondary block my-6 hover:text-primary font-montbold mt-auto"
        >
          <ButtonCta label="Read More" className=" no-focus py-2 px-6" hollow>
            Read more
          </ButtonCta>
        </Link>
      </div>
    </OnVisible>
  );
};

export default BlogPostPreview;
