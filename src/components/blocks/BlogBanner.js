import React, { useContext } from "react";
import LineSeparator from "../LineSeparator";
import BlogCarousel from "./BlogCarousel";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const BlogBanner = (props) => {
  const data = useContext(DataContext);
  return (
    <div className={` ${props.className} text-left`}>
      <div className="flex flex-col sm:flex-row justify-start items-baseline">
        <h3 className="font-montbold text-medium text-5xl ">Blog</h3>
        <Link
          to="/blog"
          label="See all blog posts"
          className="sm:ml-5 border rounded text-gray-500 px-2 hover:text-primary hover:shadow hover:border-primary font-montbold"
        >
          See all
        </Link>
      </div>
      <LineSeparator className="bg-secondary mt-2 lg:mt-8 hidden sm:block" />
      <div>
        {data.loading && <div>Loading</div>}
        {data.blogs.length > 0 && <BlogCarousel />}
        {data.error && <div>Error occured</div>}
      </div>
    </div>
  );
};

export default BlogBanner;
