import React from "react";
import { ReactComponent as Logo } from "../placeholder_site_illustration.svg";
import ButtonCta from "../components/ButtonCta";

const Home = (props) => (
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
);

export default Home;
