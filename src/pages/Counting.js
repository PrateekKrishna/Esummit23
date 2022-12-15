import React from 'react'
import { useTimer } from '../hooks/useTimer';
import Attendees from '../assets/attendees.png';
import Speaker from '../assets/speaker.png';
import Bulb from '../assets/bulb.png';
import Investors from '../assets/investors.png';


export default function Counting() {
    let participantCount = useTimer(0, 7000);
  let startupCount = useTimer(0, 30);
  let speakersCount = useTimer(0, 50);
  let eventsCount = useTimer(0, 60);

    return (
        <>
               <div>
               <img className='h-5 w-5' src={Attendees} alt='' />
               <h1>Attendees</h1>
               <span>{participantCount}+</span>
             </div>
             <div>
               <img className='h-5 w-5' src={Speaker} alt='' />
               <h1>Speakers</h1>
               <span>{speakersCount}+</span>
             </div>
           
           
             <div>
               <img className='h-5 w-5' src={Bulb} alt='' />
               <h1>Startups</h1>
               <span>{startupCount}+</span>
             </div>
             <div>
               <img className='h-5 w-5' src={Investors} alt='' />
               <h1>Events</h1>
               <span>{eventsCount}+</span>
             </div>
             </>
             );
}
