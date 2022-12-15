import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div
        className="h-[100%] w-[100%]"
        style={{ backgroundImage: ` url(${`/images/bg.jpg`})` }}
      >
        <div className="md:pl-[55px] pl-[15px] flex flex-col w-[80%]">
          <h3 data-aos="fade-in" data-aos-duration="2000" className="pt-[150px]  text-white md:text-[100px] lg:text-[120px] text-[40px]">
            E-Summit'23
          </h3>
          <p className="text-[white] text-[15px] md:text-[25px] text-left">
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Dare To Begin")
                  .pauseFor(3500)
                  .start().changeDelay(1500);
              }}
            />
          </p>
          <div className="h-[2px] md:w-[60vw] bg-[#F0A500] pl-[55px]" />
        </div>
        <div className="flex flex-col justify-center w-[80%]  mt-[10px] md:pl-[55px] pl-[15px]">
          <p className="text-white font-epilogue  text-[20px] md:text-[30px] md:pl-[200px]">
            JANUARY 27-29, 2023
          </p>
        </div>
        <div className=" flex gap-5 justify-start w-[80%]  mt-[40px] md:pl-[55px] pl-[15px]">
          <div className="hover:scale-105 duration-300 hover:bg-[#F0A500] h-[45px] w-[130px] bg-[white] rounded-[5px] text-black text-[20px] flex justify-center items-center cursor-pointer">
            Register
          </div>
          <div className="hover:scale-105 duration-300 hover:bg-[#F0A500] h-[45px] w-[130px] bg-[white] rounded-[5px] text-black text-[20px] flex justify-center items-center cursor-pointer">
            Discord
          </div>
        </div>

        <div
          id="about"
          className=" md:px-[55px] px-[15px] pt-[400px] flex flex-col justify-start md:justify-center pb-[100px]"
          
        >
          <h3 className=" text-white text-[50px] pl-5 md:pl-0 md:text-[70px] font-epilogue ">
            About Us
          </h3>
          <div className="flex  gap-3 flex-col md:flex-row justify-center items-center">
            <div className="w-[90%] ">
              <p className="text-[white] text-[15px] text-left font-epilogue">
                EDC BIT MESRA has always considered social impact as of the
                greatest priorities, and this year is no different. Women have
                the 50% share of the population, but the number is too low when
                it comes to the number of women in entrepreneurship. The
                fundamental pillar of women's empowerment is to make them
                believe in themselves so that they can pursue their goals and
                bloom with grace in their lives.
                <br />
                <br />
                This year E-Summit came with the concept of "BELIEVE TO
                ACHIEVE," and we want to help the women entrepreneurs by
                supporting new businesses that may empower the passionate women
                who may become ideal people for society.
              </p>
            </div>
            <div  className="w-[90%] flex flex-col justify-between mx-[40px] md:mt-0 mt-[30px] gap-10">
              <div className="flex justify-center gap-[140px]">
                <div className="flex flex-col justify-center items-center duration-300 hover:scale-110">
                  <img
                    src="/logos/users.png"
                    alt="users"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-white text-center font-epilogue">
                    5000 attendees
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center duration-300 hover:scale-110">
                  <img
                    src="/logos/speakers.png"
                    alt="users"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-white text-center font-epilogue">
                    Speakers 50+
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-[140px]">
                <div className="flex flex-col justify-center items-center duration-300 hover:scale-110">
                  <img
                    src="/logos/startup.png"
                    alt="users"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-white text-center font-epilogue">
                    Startup 30+
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center duration-300 hover:scale-110">
                  <img
                    src="/logos/events.png"
                    alt="users"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-white text-center font-epilogue">
                    Events 60+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
