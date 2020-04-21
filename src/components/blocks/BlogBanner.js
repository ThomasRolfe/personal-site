import React, { useEffect, useState } from "react";
import LineSeparator from "../LineSeparator";
import BlogCarousel from "./BlogCarousel";
import { Link } from "react-router-dom";
import Axios from "axios";

const BlogBanner = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BLOG_API)
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className={` ${props.className} text-left`}>
      <div className="flex flex-col sm:flex-row justify-start items-baseline">
        <h3 className="font-montbold text-medium text-5xl ">Blog</h3>
        <Link
          to="/blog"
          className="ml-5 border rounded text-gray-500 px-2 hover:text-brightblue hover:shadow hover:border-brightblue"
        >
          See all
        </Link>
      </div>
      <LineSeparator className="bg-mutedpurple mt-2 lg:mt-8 hidden sm:block" />
      <div>
        {isLoading || error ? (
          <div className="font-montbold text-md font-bold">
            Loading blog posts...
          </div>
        ) : (
          <BlogCarousel posts={posts} />
        )}
      </div>
    </div>
  );
};

export default BlogBanner;
