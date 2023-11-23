import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-16 md:mb-4 py-4">
        <img src={logo} alt="sumz_logo" className="w-20 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/arey-pranay", "_blank")
          }
          className="purple_btn"
        >
          Contact Dev
        </button>
      </nav>
      <h1 className="head_text leading-0 text-cyan-600">
        Summarize Articles with{" "}
      </h1>
      <br className="max-md:hidden" />
      <h1 className="head_text">
        {" "}
        <span className=" purple_gradient">Sum-Rizz-er</span>
      </h1>
      <h2 className="desc text-purple-900">
        Reading lengthy articles can be challenging, and that's where we come
        in. Just paste the article link in the search box below, and we'll
        deliver an accurate AI-generated summary right to you.
        <br />
        <br />
        <b>"The more you read, The more you rizz"</b>
      </h2>
    </header>
  );
};

export default Hero;
