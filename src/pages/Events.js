
import { EventsEsummit } from "../utils/EventData";
import Carousel from "./Carousel";

import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <>
      <div
        style={{ backgroundImage: ` url(${`/images/bg.jpg`})` }}
        className=" h-[100%] w-[100%]"
      >
        <div className="flex flex-col justify-center items-center pt-[20px]">
          <h1 className="text-[#F0A500] font-bold lg:text-5xl text-3xl font-epilogue">
            EVENTS
          </h1>
          <div className="h-[2px] md:w-[350px] w-[200px] bg-[#F0A500] pl-[55px] mt-[9px] " />
        </div>
        <div className=" flex flex-wrap lg:justify-between items-center justify-center gap-[46px] lg:px-[90px] pt-[80px] pb-[100px]">
          {EventsEsummit.map((event) => (
            <EventCard
              title={event.title}
              tagline={event.tagline}
              link={event.link}
              desc={event.desc}
            />
          ))}
        </div>

        <div>
          <div
            className="relative z-10  text-2xl font-epilogue pt-10 mt-9 text-center  w-17  
            lg:text-5xl text-[#F0A500] "
          >
            Past Events
          </div>

          <div className="p-20">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
