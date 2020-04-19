import React from "react";
import LineSeparator from "../LineSeparator";
import BlogCarousel from "./BlogCarousel";
import { Link } from "react-router-dom";

const BlogBanner = (props) => (
  <div className={` ${props.className} text-left`}>
    <div className="flex flex-col sm:flex-row justify-between items-baseline">
      <h3 className="font-montbold text-medium text-5xl ">Blog</h3>
      <Link
        to="/blog"
        className="border rounded text-gray-500 px-2 hover:text-brightblue hover:shadow hover:border-brightblue"
      >
        See all
      </Link>
    </div>
    <LineSeparator className="bg-mutedpurple mt-2 lg:mt-8 hidden sm:block" />
    <div>
      <BlogCarousel />
    </div>
  </div>
);

export default BlogBanner;
