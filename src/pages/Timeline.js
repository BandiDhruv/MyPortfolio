import React from 'react'
import '../includes/css/timeline.css'
import TsParticles from '../components/TsParticles';
import TimeLineCard from '../components/TimeLineCard';
import Footer from '../components/Footer';

import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {


    
    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md: backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Timeline</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Timeline</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>

          
            <div className={`timeline flex flex-col items-center justify-center w-full pb-10 ` }>
                <div className="timeline-title text-center w-full text-xl md:text-4xl text-white p-4">A brief timeline of my life...</div>
                <div className="timeline-body w-full">

                    <div className="timeline-bar px-4  relative ml-2 md:ml-5 lg:ml-0 w-fit lg:w-full h-fit min-h-[100vh] lg:min-h-[0] lg:pb-0 flex flex-row lg:flex-col">
                        <div>
                            <button className='bg-[#3e98c7] ml-2 md:ml-5 lg:ml-0  h-full w-[5px] min-h-[100vh] lg:min-h-[5px] lg:w-full lg:h-[5px]  rounded-xl '></button>
                            <div className="bar-buttons absolute lg:relative top-0 left-[6px] md:left-[18px] lg:left-0 min-h-[100vh] h-full lg:min-h-[5px]   lg:top-[-30px] lg:w-full  flex flex-col lg:flex-row items-center justify-around">
                                <div className="timeline-icon relative bg-slate-300 hover:bg-yellow-600 transsition-[1s_ease-in-out] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCakeCandles}size='xl'/>
                                </div>
                                
                                <div className="timeline-icon relative bg-slate-300 hover:bg-rose-400 transsition-[1s_ease-in-out] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGraduationCap}size='xl'/>
                                </div>
                                <div  className="timeline-icon relative bg-slate-300 hover:bg-rose-600 transsition-[1s_ease-in-out] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGraduationCap}size='xl'/>
                                </div>
                                <div className="timeline-icon relative bg-slate-300 hover:bg-rose-800 transsition-[1s_ease-in-out] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGraduationCap} size='xl' id="UGEdu"/>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-cards-container flex flex-col h-full p-4 min-h-[100vh]  lg:min-h-[0vh]  lg:w-full lg:flex-row items-start justify-around gap-4 md:gap-2 '>
                            <TimeLineCard  location={"Indore, Madhya Pradesh"} title={"Birthday & Pry. Education"} desc={JSON.stringify({line1:"Born on 29th April 2003. Completed my primary education from ",line2:"Choithram School North Campus"})} date={"23 Jun 2003 - Dec 2013"}/>
                            <TimeLineCard  location={"Indore, Madhya Pradesh"} footer={"Percentage : 93.4%"} title={"Secondary Education"} desc={JSON.stringify({line1:"Completed secondary education from ", line2:"Choithram School North Campus"})} date={"Feb 2014 - Mar 2019"}/>
                            <TimeLineCard  location={"Indore, Madhya Pradesh"} footer={"Percentage : 81.2%"} title={"Higher Secondary Education"} desc={JSON.stringify({line1:"Completed higher secondary education in Science Stream from ", line2:"The Green Field Public School"})} date={"Apr 2019 - July 2021"}/>
                            <TimeLineCard  location={"Indore, Madhya Pradesh"} footer={"CGPA : 7.33"} title={"Under Graduate"} desc={JSON.stringify({line1:"Currently pursuing B.Tech in Computer Science and Engineering from", line2:"LNMIIT, Jaipur"})} date={"Dec 2021 - Present"} />
                        </div>
                    </div>
                    

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Timeline
