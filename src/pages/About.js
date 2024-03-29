import React from 'react'
import "../includes/css/about.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import ProfilePic from '../includes/images/dhruv.jpg'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const About = () => {

    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md: backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>

                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; About</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>About</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>

            </div>

            <div className='text-white px-4 md:p-2 md:mx-8 flex flex-col items-center justify-between'>


                <div className='w-full flex flex-col justify-start items-start lg:p-4'>
                    <div className="text-sky-300 text-3xl mt-2">Hi!</div>
                    <div className="text-slate-100 text-4xl">I am
                        <span className='text-sky-300'> Dhruv!</span>
                    </div>
                </div>
                <div className='flex flex-row p-2 items-center justify-between md:text-base lg:text-lg text-slate-300 '>

                    <div className="about-body w-[50%] text-justify flex flex-col gap-3 ">
                        <div>I am a promising third-year student at 
                            <span className="highlight text-blue-400"> LNMIIT, Jaipur</span>, pursuing a B.Tech in <span className="highlight text-sky-500">Computer Science and Engineering</span> .
                        </div>
                        <div className="text-slate-300 my-2 pb-2 text-base lg:text-xl md:text-lg">Feel free to explore a snapshot of my skills and projects ...</div>
                        <div className="flex flex-row items-center md:justify-start justify-around gap-4">

                            <div className='z-10 '>
                                <Link to="/skills" className=' flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg'>Skills</Link>
                            </div>
                            <div className='z-10'>
                                <Link to="/projects" className=' flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg'>Projects</Link>
                            </div>
                        </div>


                    </div>

                    <div className=" about-body p-2 lg:w-[50%] text-justify pb-10 lg:pb-2 flex flex-col gap-3">
                        <div className='flex z-10 mb-1items-center justify-center '>
                            <img className="aboutImg border-1 shadow-xl rounded-xl border-slate-500 z-10 w-[80%] md:w-[200px] sm:w-[220px] h-[250px] hover:scale-105 duration-500"
                                src={ProfilePic}
                                alt=""/>
                        </div>
                    </div>
                </div>

            </div>


            <Footer/>

        </div>
    )
}

export default About