import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="m-20">
        <div className="relative">
          <img src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <h1 className=" -mt-12 absolute text-7xl font-serif  text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            COLLECTION HOUSES OUR FIRST-EVER
          </h1>
          <button className="bg-[#FF8A5C] p-5 hover:bg-[#FFDD67] rounded-full text-3xl font-bold  absolute mt-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            About Us
          </button>
        </div>
      </div>
    </>
  );
}
