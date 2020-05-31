import React from "react";
import LineSeparator from "../components/LineSeparator";

const Blog = (props) => {
  return (
    <div className="container py-8 mx-auto text-center px-4 w-full md:w-4/6">
      <h1 className="font-montbold text-4xl font-semibold ">Blog</h1>
      <LineSeparator className="bg-secondary mt-10" />
    </div>
  );
};

export default Blog;
