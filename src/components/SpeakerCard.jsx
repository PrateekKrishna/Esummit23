import React from "react";

const SpeakerCard = ({ image, name, about, role, link }) => {
    const handleClick = () => {
        window.open(link);
    }
  return (
    <div onClick={handleClick} className="cursor-pointer felx flex-col  h-[350px] w-[320px] bg-[#1c1c24] rounded-[10px] hover:scale-105 duration-300 transition ease-in-out  border-[5px] border-[#F0A500]">
      <img
        src="/images/samplespeaker.jpeg"
        alt="pic"
        className="w-full h-[70%] object-cover rounded-[5px]"
      />
      <div>
        <h3 className="font-epilogue font-semibold text-[20px] text-white leading-[26px] truncate text-center mt-3 " >{name}</h3>
        <p className="mt-[5px] font-epilogue font-normal  text-[#808191] text-center truncate">
          {role}
        </p>
        <p className="mt-[5px] font-epilogue font-normal  text-[#808191] text-center truncate">
          {about}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
