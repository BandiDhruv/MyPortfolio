import React from 'react'
import "../includes/css/home.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import linkedin from '../includes/icons/linkedin.svg';
import github from '../includes/icons/github.svg';
import insta from '../includes/icons/insta.svg';
import leetcode from '../includes/icons/leetcodeColor.svg';
import gmail from '../includes/icons/gmail.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Contact = () => {


    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Contact</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Contact</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>


            <div className="contactPage flex flex-col px-2 md:p-2 md:mx-8" >
                <div className="relative -z-10 text-center self-center w-fit contact-head-text text-white text-xl md:text-3xl py-4 px-4 animate-pulse">Reach Out to Me!</div>
                <div className='flex text-white flex-col lg:flex-row items-center justify-center'>
                    <div className="contact-details w-full  lg:w-[50%] p-2 m-2 text-justify ">

                        <div className="codeProfiles flex flex-col my-4 ">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Checkout my profiles...</div>
                            <div className="codeProfiles-body flex flex-row items-center justify-evenly">
                                <Link className="z-10" to="https://leetcode.com/dhruv_bandi/"><img className=" w-[36px]" src={leetcode} alt=""/></Link>
                                <Link className="z-10" to="https://github.com/BandiDhruv"><img className=" w-[48px]" src={github} alt=""/></Link>
                            </div>
                        </div>
                        <div className="socialProfiles flex flex-col my-4 ">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Follow me on...</div>
                            <div className="socialProfiles-body flex flex-row items-center justify-evenly">
                                <Link className="z-10" to="https://www.linkedin.com/in/dhruvbandi/"><img className=" w-[60px]" src={linkedin} alt=""/></Link>
                                <Link className="z-10" to="https://www.instagram.com/dhruv_bandi/"><img className=" w-[60px]"src={insta} alt=""/></Link>
                            </div>
                        </div>

                        <div className="socialProfiles flex flex-col my-4 ">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Contact Me...</div>
                            <div className="socialProfiles-body flex flex-row flex-wrap items-center justify-around">
                                <Link className="z-10 flex flex-row text-xs my-2  sm:text-lg" to='mailto:dhruvbandi03@gmail.com'><img className="w-[24px]" src={gmail} alt=""/> &nbsp; dhruvbandi03@gmail.com</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
