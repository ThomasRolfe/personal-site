import React from "react";
import { ReactComponent as HeroAnimation } from "../hero-animation.svg";
import ButtonCta from "../components/ButtonCta";
import TechBanner from "../components/TechBanner";
import BlogBanner from "../components/BlogBanner";
import PortfolioBanner from "../components/PortfolioBanner";
import ContactForm from "../components/ContactForm";
import ScrollToRef from "../components/helpers/ScrollToRef";

const Home = (props) => {
  const learnMoreRef = React.createRef();

  return (
    <React.Fragment>
      <div className="container py-8 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-800px max-h-800">
        <div className="left-text h-full flex flex-col justify-center">
          <div className="text-center md:text-left fadeIn">
            <span className="block font-montbold font-extrabold text-3xl text-offblack">
              Tom Rolfe
            </span>

            <span className="block font-montbold font-extrabold text-6xl tracking-tighter leading-none">
              <span className="text-brightblue">Full Stack</span> Web Dev
            </span>

            {/* <span className="w-16 h-1 mt-10 bg-mutedpurple inline-block"></span> */}

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
                <ButtonCta className="w-full" path="#">
                  Learn more
                </ButtonCta>
              </div>

              <ButtonCta
                hollow
                className="mt-4 lg:mt-0 lg:ml-2 w-full"
                path="/contact"
              >
                Contact
              </ButtonCta>
            </div>
          </div>
        </div>
        <div className="right-image fadeIn">
          <div className="flex w-full lg:h-full">
            <HeroAnimation />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4" style={{ height: "1500px" }}>
        <TechBanner />
      </div>

      <div className="w-full bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
          <div className="text-left">text about me</div>
          <div className="text-center">face and socials</div>
        </div>
      </div>

      <div
        className="container mx-auto px-4"
        ref={learnMoreRef}
        id="learnMoreRef"
      >
        <BlogBanner />
      </div>

      <div className="w-full bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
          <PortfolioBanner />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </React.Fragment>
  );
};

export default Home;
