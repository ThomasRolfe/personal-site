import React, { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";
import LineSeparator from "../components/LineSeparator";
import Loading from "../components/Loading";
import TagPill from "../components/TagPill";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbs from "../components/blocks/Breadcrumbs";

const PortfolioPost = (props) => {
  const data = useContext(DataContext);
  const [portfolioPost, setPortfolioPost] = useState();

  console.log(data);

  useEffect(() => {
    setPortfolioPost(
      data.portfolios.filter((post) => {
        return post.slug === props.match.params.slug;
      })[0]
    );
  }, [data.portfolios, props.match.params.slug]);

  if (data.loading || !portfolioPost) {
    return <Loading />;
  }

  return (
    <div className="container py-8 mx-auto px-4 w-full">
      <div className="text-center">
        <h1
          className="font-montbold text-4xl font-semibold"
          dangerouslySetInnerHTML={{ __html: portfolioPost.title.rendered }}
        ></h1>
        <LineSeparator className="bg-secondary mt-10" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-4">
        <div className="">
          <h2 className="font-montbold text-2xl font-semibold">
            {portfolioPost.title.rendered}
          </h2>
          <h3 className="font-montbold text-lg">
            {portfolioPost.post_tagline}
          </h3>
          <a
            target="_blank"
            href={portfolioPost.site_link}
            rel="noopener noreferrer"
            className="hover:text-primary text-secondary my-2 inline-block font-montbold"
            title="Visit site"
          >
            {portfolioPost.site_link}
          </a>
          {portfolioPost.github_link && (
            <>
              <span className="font-bold px-2"> | </span>
              <a
                href={portfolioPost.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size={"lg"}
                  style={{ color: "black" }}
                  className=" transform hover:scale-125 duration-100 ease-in-out"
                />
              </a>
            </>
          )}
          <div className="flex flex-row justify-start flex-wrap">
            {portfolioPost.tags.map((tag, index) => {
              return (
                <TagPill
                  key={index}
                  name={data.tags[tag]}
                  className="mr-2"
                  onClick={() => {
                    return false;
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <a href={portfolioPost.site_link}>
            <img
              src={portfolioPost.jetpack_featured_media_url}
              className="shadow-xl rounded-lg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="py-8 ">
        <h3 className="font-montbold text-2xl font-semibold">About</h3>
        <div
          className="cms-content"
          dangerouslySetInnerHTML={{
            __html: portfolioPost.content.rendered,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioPost;
