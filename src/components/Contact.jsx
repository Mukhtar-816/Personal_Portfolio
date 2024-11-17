import React from "react";

const Contact = () => {
  return (
    <div className="border-t-neutral-600 border-t">
      <div>
        <h1 className="text-white text-4xl text-center items-center my-10">
          Get in Touch
        </h1>
      </div>
      <div className="sm:flex-row flex-col flex justify-center items-center sm:justify-evenly mb-20 gap-20 mt-20">
       
        <div>
          <p className="text-white text-lg mb-5">Work</p>
          <div className="flex flex-wrap w-[180px] gap-5">
            <p className="text-neutral-500 text-md hover:text-neutral-400">Code</p>
            <p className="text-neutral-500 text-md hover:text-neutral-400">App Dev</p>
            <p className="text-neutral-500 text-md hover:text-neutral-400">Web Dev</p>
            <p className="text-neutral-500 text-md hover:text-neutral-400">Designs</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm">Write your mail to connect!</p>
          <input type="text" className="bg-neutral-500 rounded p-1" />
          <button className="bg-white p-2 px-5 font-bold rounded-md justify-center items-center mb-5 hover:bg-black hover:text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
