import React from "react";

export default function Cards() {
  return (
    <>
      <div className="flex m-20 ">
        <div className="relative m-5 ">
          <img
            className="hover:scale-110 duration-500 cursor-pointer   "
            src="https://images.pexels.com/photos/7204245/pexels-photo-7204245.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <h3 className="absolute text-2xl p-10 text-black font-bold bottom-5 right-5">
            Established fact that by the readable conten
          </h3>
          <button className="bg-black  text-white p-2 hover:bg-white hover:text-black   rounded-lg text-xl font-semibold absolute mt-40 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
            About Us
          </button>
        </div>

        <div className="relative m-5">
          <img
            className="hover:scale-110 duration-500 cursor-pointer "
            src="https://images.pexels.com/photos/7204238/pexels-photo-7204238.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <h3 className="absolute text-2xl p-10 text-white font-bold bottom-5 right-5">
            Established fact that by the readable content
          </h3>
          <button className="bg-white text-black p-2 hover:bg-black hover:text-white  rounded-lg text-xl font-semibold absolute mt-40 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
            About Us
          </button>
        </div>
      </div>
    </>
  );
}
