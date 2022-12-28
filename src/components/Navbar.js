import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex">
        <ul className="flex ml-12 mr-12 p-10">
          <li className="mr-6 ">
            <a
              className="text-black pr-10 hover:text-[#7F167F] font-extrabold text-3xl"
              href="#">
              Head Over Heels
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-semibold hover:text-[#ADA2FF] text-xl"
              href="#">
              HOME
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-semibold hover:text-[#ADA2FF] text-xl"
              href="#">
              SHOP
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-semibold hover:text-[#ADA2FF] text-xl"
              href="#">
              ABOUT
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-semibold hover:text-[#ADA2FF] text-xl"
              href="#">
              BLOG
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-semibold hover:text-[#ADA2FF] text-xl"
              href="#">
              CONTACT
            </a>
          </li>
        </ul>

        <div className="icon  flex mt-12  ml-20 text-xl">
          <a
            href="#"
            className="fa-regular fa-user mx-5 hover:text-[#810CA8]"></a>
         
          <a
            href="#"
            className="fa-solid fa-magnifying-glass mx-5 hover:text-[#810CA8]"></a>
         
          <a
            href="#"
            className="fa-brands fa-instagram mx-5 hover:text-pink-600"></a>
          
          <a
            href="#"
            className="fa-brands fa-twitter mx-5 hover:text-blue-600"></a>
          <a
            href="#"
            className="fa-solid fa-magnifying-glass mx-5 hover:text-[#810CA8]"></a>
         
         
          
        </div>
      </div>
    </>
  );
}


