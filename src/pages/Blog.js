import React, { useContext, useState } from "react";
import LineSeparator from "../components/LineSeparator";
import BlogPostPreview from "../components/blocks/BlogPostPreview";
import DataContext from "../context/DataContext";
import TagPill from "../components/TagPill";
import ButtonCta from "../components/ButtonCta";

const Blog = (props) => {
  const [filterName, setFilterName] = useState("");
  const [filterIndex, setFilterIndex] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const data = useContext(DataContext);

  const toggleFilter = (tagIndex, tagName) => {
    if (tagName === filterName) {
      setFilterName("");
      setFilterIndex("");
    } else {
      setFilterName(tagName);
      setFilterIndex(tagIndex);
    }
  };

  return (
    <div className="container py-8 mx-auto text-center px-4 w-full">
      <h1 className="font-montbold text-4xl font-semibold ">Blog</h1>
      <LineSeparator className="bg-secondary mt-10" />
      <div className="py-6 text-center md:text-left">
        <ButtonCta
          className="no-focus py-1 px-6 lg:py-2 lg:px-16"
          hollow
          secondary
          onClick={() => {
            setFiltersOpen(!filtersOpen);
          }}
        >
          Filters
        </ButtonCta>
      </div>
      {filtersOpen && (
        <div className="flex flex-row justify-center md:justify-start flex-wrap text-center">
          {data.blogTags.map((tag, index) => {
            let currentTag = data.tags[tag];
            return (
              <TagPill
                name={currentTag}
                key={index}
                onClick={(tag, currentTag) => {
                  toggleFilter(tag, currentTag);
                }}
                tagIndex={tag}
                className="mr-2"
                active={tag === filterIndex ? true : false}
              />
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
        {data.blogs
          .filter((blog) => {
            return filterName === ""
              ? true
              : blog.tags.includes(Number(filterIndex));
          })
          .map((post, index) => {
            return <BlogPostPreview key={index} index={index} {...post} />;
          })}
      </div>
    </div>
  );
};

export default Blog;
