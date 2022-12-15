import React, { useState } from "react";

export default function Header({ fixed }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav class=" z-90  opacity-800 bg-none shadow-transparent  px-2 sm:px-4 py-2.5 bg-[#0c0c0c] w-full z-20 top-0 left-0 ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          
          <div class="flex md:order-2">
            
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black dark:text-gray-400 dark:hover:bg-black dark:focus:ring-black"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span class="sr-only">Open main menu</span>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`justify-between md:shadow-transparent opacity-800 items-center w-full md:flex md:w-auto md:h-full md:order-1  ${
              navbar ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: ">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white-700 rounded text-[20px] font-epilogue  text-slate-100 hover:text-[#F0A500]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              
              <li>
                <a
                  href="Events"
                  class="block py-2 pr-4 pl-3 text-white-700 rounded text-[20px] font-epilogue text-slate-100 hover:text-[#F0A500]"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="Speakers"
                  class="block py-2 pr-4 pl-3 text-white-700 rounded text-[20px] font-epilogue text-slate-100 hover:text-[#F0A500]"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="Sponsors"
                  class="block py-2 pr-4 pl-3 text-white-700 rounded text-[20px] font-epilogue text-slate-100 hover:text-[#F0A500]"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
