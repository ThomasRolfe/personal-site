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

const Home = (props) => {
  const learnMoreRef = React.createRef();

  return (
    <React.Fragment>
      <div className="container py-8 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-800px max-h-800 px-4">
        <div className="left-text h-full flex flex-col justify-center">
          <OnVisible className="fadeUpPrepare">
            <div className="text-center md:text-left">
              <span className="block font-montbold font-semibold text-2xl md:text-3xl text-offblack">
                Tom Rolfe
              </span>

              <span className="block font-montbold font-extrabold text-4xl md:text-6xl tracking-tighter leading-none">
                <span className="text-brightblue">Full Stack</span> Web Dev
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
                  <ButtonCta className="w-full no-focus py-3 px-16" path="#">
                    Learn more
                  </ButtonCta>
                </div>

                <ButtonCta
                  hollow
                  className="mt-4 lg:mt-0 lg:ml-2 w-full py-3 px-16"
                  path="/contact"
                >
                  Contact
                </ButtonCta>
              </div>
            </div>
          </OnVisible>
        </div>

        <div className="right-image slowFadeIn">
          <div className="flex w-full lg:h-full">
            <HeroAnimation />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 mt-12 pt-10">
        <div
          className="container mx-auto px-4 overflow-auto"
          ref={learnMoreRef}
        >
          <HomeBio />
          <ProcessBanner />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center py-8 lg:py-12">
        <TechBanner />
      </div>

      <div className="container mx-auto px-4">
        <PortfolioBanner className="mt-12" />
      </div>

      <div className="w-full bg-gray-100 mt-12 pt-10">
        <div className="container mx-auto px-4 overflow-auto">
          <BlogBanner className="mb-16" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ContactBanner />
      </div>
    </React.Fragment>
  );
};

export default Home;
