import SponsorBox from "../pages/Sponsors/Sponsor";
import styled from "styled-components";
import {
  NewSponsors,
  TitleSponsor,
  copreSponsor,
  associationSponsor,
  investSponsor,
  mediaSponsor,
  gameSponsor,
  learnSponosor,
  startSponsor,
  copowSponsor,
} from "./data";
// import img2 from "../assets/bg.jpg";
// import img3 from "../assets/bg4.jpg";
// import img4 from "../assets/bg6.jpg";
// import img5 from "../assets/bg5.jpg";

const Sponsors = ({ data }) => {
  return (
    <>
      <div style={{backgroundImage: ` url(${`/images/bg.jpg`})`}} className=" h-[100%] w-[100%] ">
        
        {/* <SectionContainer id="sponsors"> */}
        <div className="flex flex-col justify-center items-center pt-[25px] mb-[40px]">
          <h1 className="text-[#F0A500] font-bold lg:text-[50px] text-3xl font-epilogue">
            SPONSORS
          </h1>
          <div className="h-[2px] md:w-[380px] w-[200px] bg-[#F0A500] pl-[55px] mt-[9px] " />
        </div>
        <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Title Sponsor
          </h1>
        </div>
          <EventsContainer>
            {TitleSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Co-Presented By
          </h1>
        </div>
          <EventsContainer>
            {copreSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Co-Powered By
          </h1>
        </div>
          <EventsContainer>
            {copowSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            In Association with
          </h1>
        </div>
          <EventsContainer>
            {associationSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Investment Partners
          </h1>
        </div>
          <EventsContainer>
            {investSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Media Partners
          </h1>
        </div>
          <EventsContainer>
            {mediaSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Gaming Partners
          </h1>
        </div>
          <EventsContainer>
            {gameSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Learning Parners
          </h1>
        </div>
          <EventsContainer>
            {learnSponosor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            Startup Growth Partner
          </h1>
        </div>
          <EventsContainer>
            {startSponsor.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
          <div className="flex flex-col justify-center items-center pt-[25px] ">
          <h1 className="text-[#F0A500] font-bold lg:text-[20px] text-[20px] font-epilogue">
            All Sponsors
          </h1>
        </div>
          <EventsContainer>
            {NewSponsors.map((sponsor) => {
              return <SponsorBox data={sponsor} />;
            })}
          </EventsContainer>
        {/* </SectionContainer> */}
      </div>
    </>
  );
};

export default Sponsors;

// const ImpSponsorBox = styled.a`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 10px;
//   overflow: hidden;
// `;

// const Image = styled.img`
//   width: 600px;
//   @media screen and (max-width: 600px) {
//     width: 300px;
//   }
// `;

// const LandingSectionContainer = styled.div`
//   min-height: 80vh;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const LandingHeading = styled.h1`
//   color: #fff;
//   font-size: 126px;
//   text-align: center;
//   padding: 50px 0px 10px 0px;
//   @media screen and (max-width: 600px) {
//     text-align: left;
//     font-size: 86px;
//   }
// `;

// const Span = styled.span`
//   background-image: linear-gradient(
//     to right,
//     #f76c6c,
//     #e8637c,
//     #d45f8a,
//     #bc5e93,
//     #a25e97
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;
// const LandingDescription = styled.p`
//   color: #fff;
//   font-size: 24px;
//   width: 600px;
//   text-align: center;
//   padding-bottom: 20px;
//   @media screen and (max-width: 850px) {
//     width: 400px;
//   }
//   @media screen and (max-width: 600px) {
//     text-align: left;
//     width: 100%;
//     font-size: 18px;
//   }
// `;

// const LandingDate = styled.h3`
//   background-image: linear-gradient(
//     to right,
//     #f76c6c,
//     #e8637c,
//     #d45f8a,
//     #bc5e93,
//     #a25e97
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: bold;
//   font-size: 32px;
//   border-top: 0.2px solid rgba(255, 255, 255, 0.5);
//   padding: 10px 0px;
//   @media screen and (max-width: 600px) {
//     text-align: left;
//     width: 100%;
//   }
// `;
// const LandingButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   width: 100%;
//   padding-top: 10px;
//   @media screen and (max-width: 600px) {
//     justify-content: left;
//     padding-top: 0px;
//   }
// `;

// const LandingButton = styled.a`
//   color: ${(props) => {
//     if (props.fontColor) {
//       return props.fontColor;
//     } else {
//       return "#fff";
//     }
//   }};
//   background-color: ${(props) => {
//     if (props.backColor) {
//       return props.backColor;
//     } else {
//       return "#0e0f25";
//     }
//   }};
//   padding: 10px 20px;
//   margin: 10px 10px 10px 10px;
//   border: 1px solid #fff;
//   border-radius: 5px;
//   font-size: 20px;
//   transition: background-color 0.4s;
//   text-decoration: none;
//   &:hover {
//     color: ${(props) => {
//       if (props.fontColor) {
//         return "#fff";
//       } else {
//         return "#0e0f25";
//       }
//     }};
//     background-color: ${(props) => {
//       if (props.backColor) {
//         return "#0e0f25";
//       } else {
//         return "#fff";
//       }
//     }};
//     transition: background-color 0.4s;
//   }
//   @media screen and (max-width: 600px) {
//     margin: 10px 10px 10px 0px;
//     font-size: 16px;
//   }
// `;

// const SectionContainer = styled.div`
//   padding: 50px 0px 100px 0px;
//   @media screen and (max-width: 800px) {
//     padding: 50px 0px 50px 0px;
//     text-align: left;
//     border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
//   }
//   text-align: center;
// `;

// const Heading = styled.h1`
//   display: block;
//   background-image: linear-gradient(
//     to right,
//     #f76c6c,
//     #e8637c,
//     #d45f8a,
//     #bc5e93,
//     #a25e97
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 56px;
//   padding-bottom: 50px;
// `;

// const SponsorHeading = styled.h1`
//   display: block;
//   background-image: linear-gradient(
//     to right,
//     #f76c6c,
//     #e8637c,
//     #d45f8a,
//     #bc5e93,
//     #a25e97
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: white;
//   font-size: 24px;
//   text-align: center;
// `;

// const Paragraph = styled.p`
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 18px;
//   line-height: 28px;
//   width: 600px;
//   padding-top: 20px;
//   margin: 0px auto;
//   @media screen and (max-width: 1000px) {
//     width: 500px;
//   }
//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: ${(props) => {
    if (props.back) {
      return "20px";
    } else {
      return "20px 0px 30px 0px";
    }
  }};
  background-color: ${(props) => {
    if (props.back) {
      return "#151629";
    } else {
      return "rgba(0,0,0,0)";
    }
  }};
`;

// const ImpSponsorContainer = styled.a`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding-top: 10px;
//   padding-bottom: 50px;
// `;
