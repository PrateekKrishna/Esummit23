import React, { useState } from "react";
import videobg from "../assets/Mars.mp4";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="cursor-pointer  ">
      {isReadMore ? text.slice(-1, 0) : text}
      <div>
        <button
          onClick={toggleReadMore}
          className="read-or-hide bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  "
        >
          {" "}
          {isReadMore ? " ...read more  " : " ...show less"}
        </button>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <div className=" overflow-hidden w-[100%] h-screen">
        <video
          className="w-[90%] rounded-3xl h-screen object-cover absolute -z-30"
          src={videobg}
          autoPlay
          loop
          muted
        />

        <div className=" max-w-[1250px] z-30 mx-auto relative my-12 py-40 flex items-center justify-center md:grid grid-cols-2 text-white  ">
          <div className="col-span-1 sm:w-[80%] w-[100%]  flex flex-col justify-center ">
            <h1 className="text-center max-[600px]:mt-10 py-4">About Us</h1>
            <p className="max-[600px]:text-sm max-[660px]:ml-4">
              {" "}
              EDC BIT MESRA has always considered social impact as of the
              greatest priorities, and this year is no different. Women have the
              50% share of the population, but the number is too low when it
              comes to the number of women in entrepreneurship.
              <ReadMore>
                The fundamental pillar of women's empowerment is to make them
                believe in themselves so that they can pursue their goals and
                bloom with grace in their lives. This year E-Summit came with
                the concept of "BELIEVE TO ACHIEVE," and we want to help the
                women entrepreneurs by supporting new businesses that may
                empower the passionate women who may become ideal people for
                society.
              </ReadMore>
            </p>
          </div>
          <div className=" col-span-1 row-span-2   flex flex-col justify-center p-2 font-bold"></div>
        </div>
      </div>
    </>
  );
}
