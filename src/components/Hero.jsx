import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 h-15 object-contain rounded-3xl' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/vishvender25", "_blank")
          }
          className='bg-gray-800 px-3 py-1.5 rounded-xl text-white'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text '>
        Summarize Articles with <br className='max-md:hidden' />
        <span className=''>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc text-white'>
        Simplify your reading with Infosnap, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
