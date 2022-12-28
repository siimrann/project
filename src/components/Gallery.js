import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="flex m-20 ">
        <img
          className="hover:scale-105 duration-500 cursor-pointer m-1 w-1/4"
          src="https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=400"
        />

        <img
          className="hover:scale-105 duration-500 cursor-pointer m-1 w-1/4"
          src="https://images.pexels.com/photos/4588717/pexels-photo-4588717.jpeg?auto=compress&cs=tinysrgb&w=400"
        />

        <img
          className="hover:scale-105 duration-500 cursor-pointer m-1 w-1/4"
          src="https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&w=400"
        />

        <img
          className="hover:scale-105 duration-500 cursor-pointer m-1 w-1/4 "
          src="https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
      </div>
    </>
  );
}
