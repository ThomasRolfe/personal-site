import React from "react";
import { ReactComponent as HeroAnimation } from "../hero-animation.svg";
import ButtonCta from "../components/ButtonCta";
import BlogBanner from "../components/blocks/BlogBanner";
import PortfolioBanner from "../components/blocks/PortfolioBanner";
import ContactBanner from "../components/blocks/ContactBanner";
import ScrollToRef from "../components/helpers/ScrollToRef";
import OnVisible from "react-on-visible";
import HomeBio from "../components/blocks/HomeBio";
import ProcessBanner from "../components/blocks/ProcessBanner";
import TechBanner from "../components/blocks/TechBanner";

import { Helmet } from "react-helmet";

const Home = (props) => {
  const learnMoreRef = React.createRef();

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tom Rolfe | Full Stack Web Developer</title>
      </Helmet>

      <div className="container py-8 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-800px max-h-800 px-4">
        <div className="left-text h-full flex flex-col justify-center mb-4">
          <OnVisible className="fadeUpPrepare">
            <div className="text-center md:text-left">
              <span className="block font-montbold font-semibold text-2xl md:text-3xl text-offblack">
                Tom Rolfe
              </span>

              <span className="block font-montbold font-extrabold text-4xl md:text-6xl tracking-tighter leading-none">
                <span className="text-primary">Full Stack</span> Web Dev
              </span>

              <p className="font-montbold font-light my-10 text-lg max-w-md leading-relaxed mx-auto md:mx-0">
                Web app and website development, from planning and design to
                production and deployment.
              </p>

              <div className="flex flex-col lg:flex-row mt-12 md:mt-16 w-10/12 w-full justify-between lg:justify-start lg:mx-auto lg-mx-0">
                <div
                  onClick={() => {
                    ScrollToRef(learnMoreRef);
                  }}
                >
                  <ButtonCta
                    label="Learn More"
                    className="w-full no-focus py-3 px-16"
                    path="#"
                    hollow
                  >
                    Learn more
                  </ButtonCta>
                </div>

                <ButtonCta
                  label="Contact"
                  hollow
                  className="mt-4 lg:mt-0 lg:ml-2 w-full py-3 px-16"
                  path="/contact"
                  secondary
                >
                  Contact
                </ButtonCta>
              </div>
            </div>
          </OnVisible>
        </div>

        <div className="right-image">
          <OnVisible className="fadeDownPrepare">
            <div className="flex w-full lg:h-full">
              {/* <HeroAnimation /> */}
            </div>
          </OnVisible>
        </div>
      </div>

      <div className="w-full bg-gray-100 mt-6 md:mt-12 pt-10 transform skew-y-6">
        <div
          className="container mx-auto px-4 overflow-auto transform -skew-y-6"
          ref={learnMoreRef}
        >
          <HomeBio />
          <ProcessBanner />
        </div>
      </div>

      <div className="container px-4 mx-auto text-center py-8 lg:py-24">
        <TechBanner />
      </div>

      <div className="container mx-auto px-4">
        <PortfolioBanner className="mt-12" />
      </div>

      <div className="w-full bg-gray-100 mt-12 pt-10 transform skew-y-6">
        <div className="container mx-auto px-4 overflow-auto transform -skew-y-6">
          <BlogBanner
            className="mb-16"
            tags={props.tags}
            loading={props.loading}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ContactBanner />
      </div>
    </React.Fragment>
  );
};

export default Home;
