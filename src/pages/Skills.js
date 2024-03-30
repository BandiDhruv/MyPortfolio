import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import CLang from '../includes/images/C.png'
import CppLang from '../includes/images/c++.png'
import TypeScript from '../includes/images/typescript.png'
import reactjs from '../includes/images/reactjs.png'
import nodejs from '../includes/images/nodejs.png'
import nextjs from '../includes/images/next-js.jpg'
import html from '../includes/images/html.png'
import css from '../includes/images/css.png'
import js from '../includes/images/js.png'
import mongodb from '../includes/images/mongodb.png'
import linux from '../includes/images/linux.png'
import vscode from '../includes/images/vscode.png'
import github from '../includes/images/github.png'
import git from '../includes/images/git.png'
import bootstrap from '../includes/images/bootstrap.png'
import tailwind from '../includes/images/tailwind.png'
import "../includes/css/skills.css"
import CircularProgressLogo from '../components/CircularProgressLogo';
import Footer from '../components/Footer';

const Skills = () => {

    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>
            <div className={
                `z-10 flex flex-col justify-end md: backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Skills</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Skills</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>
            
            <div className={`skills`}>

                <div className="skills-title text-center w-full text-xl md:text-4xl text-white p-4">Have a look at what I have learnt...</div>

                <div className="skills gap-4  p-3 text-white flex flex-col items-center justify-around text-center">
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Technical Skills</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'C'}
                                logo={CLang}
                                percentage={60}/>
                            <CircularProgressLogo text={'C++'}
                                logo={CppLang}
                                percentage={75}/>
                            <CircularProgressLogo text={'JavaScript'}
                                logo={js}
                                percentage={60}/>
                            <CircularProgressLogo text={'TypeScript'}
                                logo={TypeScript}
                                percentage={40}/>

                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Web Development</div>
                        <div className="skills-section-body flex flex-col lg:flex-row items-center justify-center w-full gap-3 ">
                            <div className='skills-section-body flex flex-row items-center justify-around w-full gap-3'>
                                <CircularProgressLogo text={'HTML'}
                                    logo={html}
                                    percentage={60}/>
                                <CircularProgressLogo text={'CSS'}
                                    logo={css}
                                    percentage={60}/>
                                <CircularProgressLogo text={'ReactJS'}
                                    logo={reactjs}
                                    percentage={65}/>
                                <CircularProgressLogo text={'NodeJS'}
                                    logo={nodejs}
                                    percentage={55}/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Tools</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'VS Code'}
                                logo={vscode}
                                percentage={75}/>
                            <CircularProgressLogo text={'Git'}
                                logo={git}
                                percentage={50}/>
                            <CircularProgressLogo text={'GitHub'}
                                logo={github}
                                percentage={62}/>
                            <CircularProgressLogo text={'Linux'}
                                logo={linux}
                                percentage={45}/>
                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%] pb-10">
                        <div className="skills-section-title text-lg md:text-3xl">Databases & Frameworks</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'MongoDB'}
                                logo={mongodb}
                                percentage={60}/>
                            <CircularProgressLogo text={'NextJS'}
                                logo={nextjs}
                                percentage={40}/>
                            <CircularProgressLogo text={'Bootstrap'}
                                logo={bootstrap}
                                percentage={55}/>
                            <CircularProgressLogo text={'Tailwind CSS'}
                                logo={tailwind}
                                percentage={40}/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Skills
