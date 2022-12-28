import React from "react";

export default function Footer() {
  return (
    <>
      <div>
        <nav class="bg-black m-20  flex items-center mt-20 -mb-20 ">
          <p class="text-white ml-48  m-6 hover:text-purple-400 font-semibold text-xl">
            ©2023 Head to Heels All Rights Reserved.
          </p>
          <a
            href="#"
            class="text-white m-6 hover:text-purple-400 font-semibold text-xl">
            Terms
          </a>
          <a
            href="#"
            class="text-white m-6 hover:text-purple-400 font-semibold text-xl">
            Privacy
          </a>
          <a
            href="#"
            class="text-white m-6 hover:text-purple-400 font-semibold text-xl">
            Returns
          </a>
        </nav>
      </div>
    </>
  );
}
