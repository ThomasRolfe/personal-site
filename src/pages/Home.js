import React from "react";
import { ReactComponent as Logo } from "../placeholder_site_illustration.svg";
import ButtonCta from "../components/ButtonCta";
import TechBanner from "../components/TechBanner";
import BlogBanner from "../components/BlogBanner";
import PortfolioBanner from "../components/PortfolioBanner";
import ContactForm from "../components/ContactForm";

const Home = (props) => (
  <React.Fragment>
    <div className="container py-8 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="left-text h-full flex flex-col justify-center">
        <div className="text-center md:text-right">
          <span className="block font-montbold font-extrabold text-6xl tracking-tighter leading-none">
            <span className="text-mutedblue">Full</span> Stack
          </span>
          <span className="block font-montbold font-extrabold text-6xl tracking-tighter leading-none">
            Web Dev
          </span>
          <ButtonCta className="mt-16">Learn more</ButtonCta>
        </div>
      </div>
      <div className="right-image">
        <div className="flex w-2/3 mx-auto">
          <Logo />
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <TechBanner />
    </div>

    <div className="w-full bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="text-left">text about me</div>
        <div className="text-center">face and socials</div>
      </div>
    </div>

    <div className="container mx-auto px-4">
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

export default Home;
