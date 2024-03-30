import React from 'react'
import "../includes/css/projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import ProjectCard from "../components/ProjectsCard"
import Footer from '../components/Footer';
import sportsims from '../includes/images/sportsims.png'
import simslogo from '../includes/images/simslogo.png'
import huf from '../includes/images/HUF.png'
import huflogo from '../includes/images/huflogo.png'
import mirologo from "../includes/images/mirologo.svg"
import miroc from '../includes/images/miroc.png'
const Projects = () => {

 
    const projects = {
        project1:{
            id:1,
            title:"SIMS",
            subtitle:"Inventory Management",
            image:sportsims,
            desc: {
                line1:"Built a Sports Inventory Management System website using MERN stack, with backend validation for user login and signup.",
                line2:"Includes functionalities such as add, update, delete inventory."
            },
            techStack:[
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "ReactJS",
                "NodeJS"
            ],
            hostLink:"https://sports-ims.vercel.app/",
            githubLink:"https://github.com/BandiDhruv/Sports_IMS",
            logo:simslogo
        },
        project2:{
            id:2,
            title:"Health Umbrella",
            subtitle:"Frontend ",
            image:huf,
            desc: {
                line1:"This is a project made for the people who are mislead by many sources on website with false data for their particular disease",
            },
            techStack:[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS"
            ],
            hostLink:"https://healthumbrella.org/",
            githubLink:"https://github.com/BandiDhruv/health_umbrella_foundation_frontend",
            logo:huflogo
        },

        project4:{
            id:4,
            title:"MIROC",
            subtitle:"Miro Clone",
            image:miroc,
            desc: {
                line1:"MIRO-CLONE built using NEXTJS ",
                line2:"Contains functionality of adding , deleting and updating the board in real time .",
            },
            techStack:[
                "NEXTJS",
                "Convex Database",
                "Clerk Auth",
                "Tailwind CSS",
                "TypeScript",
                "Liveblocks"
            ],
            logo:mirologo,
            githubLink:"https://github.com/BandiDhruv/MiroC",
            hostLink:"https://miroc.vercel.app/"
            
        },
       
    }

  return (
    <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Projects</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Projects</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>


            <div className={`flex flex-col items-around gap-4 projects p-4 pb-10`}>
                <div className={`projects-title text-center items-center justify-center w-full text-xl md:text-4xl text-white p-4`}>Here are my projects...</div>
                <div className="project-cards flex flex-col items-around gap-5 p-0 md:pl-5 lg:p-0">
                    <div className={`flex flex-col lg:flex-row gap-5 items-around justify-around`}>
                        <ProjectCard project={projects.project1} />
                        <ProjectCard project={projects.project2} />
                    </div>
                    <div className={`flex flex-col lg:flex-row gap-5 items-around justify-around`}>
                        <ProjectCard project={projects.project4} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Projects


