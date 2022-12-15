import { useState } from "react";

const EventCard = ({ title, tagline, link, desc }) => {
  const [description, setDescription] = useState(false);

  const handleClick = () => {
    window.open(link);
  };

  const handleDesc = () => {
    setDescription(!description)
  }

  return (
    <>
      {description ? (
        <div className="overflow-y-auto h-[420px] w-[280px] bg-white p-[20x] rounded-[10px] pb-[15px] hover:scale-105 duration-300 transition ease-in-out">
          <div className="flex justify-between items-center flex-col">
            <h3 className="text-semibold font-black justify-center text-[20px] font-cursive mt-[2px] text-[#263159] ">
              {title}
            </h3>
            <p className=" p-[2px]  text-[#434242] text-center">{desc}</p>
            <div className="w-[86%] h-[1px] bg-[#818183] rounded-[10px]" />
            <div className="flex flex-row justify-between items-center gap-6">
              <div
                onClick={handleClick}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Register</span>
              </div>
              <div
                onClick={() => setDescription(!description)}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Back</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" border-[5px] border-[#F0A500] h-[420px] w-[280px] bg-white p-[20x] rounded-[10px] hover:scale-105 duration-300 ">
          <div className="flex justify-between items-center flex-col">
            <img
              src="/images/sample.jpeg"
              alt="sample"
              className="p-[1px] rounded-[10px]"
            />
            <h3 className="text-bold font-black justify-center text-[30px] font-cursive mt-[12px] text-[#263159] ">
              {title}
            </h3>
            <p className="font-semibold mb-[10px] text-[#434242]">{tagline}</p>
            <div className="w-[86%] h-[1px] bg-[#818183] rounded-[10px]" />
            <div className="flex flex-row justify-between items-center gap-6">
              <div
                onClick={handleClick}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Register</span>
              </div>
              <div
                onClick={handleDesc}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Description</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
