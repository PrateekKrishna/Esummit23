import { AllSpeakers } from "../utils/SpeakersData";
import SpeakerCard from "../components/SpeakerCard";

export default function Speakers() {
  return (
    <>
      <div style={{backgroundImage: ` url(${`/images/bg.jpg`})`}} className=" w-[100%]">
        <div className="flex flex-col justify-center items-center pt-[20px]">
          <h1 className="text-[#F0A500] font-bold lg:text-5xl text-3xl">
            SPEAKERS
          </h1>
          <div className="h-[2px] md:w-[350px] w-[200px] bg-[#F0A500] pl-[55px] mt-[9px] " />
        </div>
        <div className="flex flex-wrap lg:justify-between items-center justify-center gap-[46px] lg:px-[90px] pt-[80px] pb-[100px]" >
          {AllSpeakers.map((speaker)=>
          <SpeakerCard 
          name = {speaker.name}
          image = {speaker.image}
          about = {speaker.about}
          role = {speaker.role}
          link = {speaker.link}
          />
          )}
        </div>
      </div>
    </>
  );
}
