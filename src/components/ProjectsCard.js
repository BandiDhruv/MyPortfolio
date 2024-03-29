import React from 'react'
import github from '../includes/images/github.png'
import { Link } from 'react-router-dom'
const ProjectsCard = (props) => {

    const myComponentStyle = {
        background: `linear-gradient(#341b8f69,#25585e7a), url('${props.project.image}')`,
        backgroundSize: 'cover',
        position:'absolute',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        backgroundPosition:'center',
        transition:'transform 0.2s',
    }





    return (
            <div className="project-card flex lg:h-[275px] flex-col sm:flex-row sm:min-w-[40%] sm:max-w-[700px] shadow-xl rounded-xl overflow-hidden z-10 text-white border border-white">
                <div className="meta h-[200px] relative z-0 sm:basis-[50%] sm:h-auto text-sm overflow-hidden"> 
                    <div className="photo"  style={myComponentStyle}></div>
                    <div className="details absolute flex flex-col top-0 bottom-0 left-[-100%] justify-around p-4 w-full gap-1">
                      <div className="text-sm">Technologies Used : </div>
                      <div className='flex flex-row content-start gap-2 flex-wrap '>
                      {props.project.techStack.map(stackElement=>
                        <div className='p-2 relative border w-fit h-fit text-xs border-white rounded-lg hover:bg-white hover:text-black '>{stackElement}</div>
                      )}
                      </div>
                      <div className="flex flex-row gap-2 ">
                        {props.project.githubLink && <Link to={props.project.githubLink}><img src={github} alt={props.project.name} width='45px'/> </Link>}
                        {props.project.hostLink && <Link to={props.project.hostLink}><img src={props.project.logo} alt={props.project.name} width='45px'/> </Link>}
                      </div>
                    </div>
                </div>
                <div className="description sm:basis-[50%] text-sm p-4 relative z-10"> 
                    <h1><i>{props.project.subtitle}</i></h1>
                    <h2 className='text-xl'>{props.project.title}</h2>
                    <button className='underline' id="underline1"></button>
                    <button className='underline' id="dot1"></button>
                    <button className='underline' id="dot2"></button>
                    <button className='underline' id="dot3"></button>
                    <ul className="description flex flex-col p-2 text-xs xl:text-sm gap-1">
                      {props.project.desc.line1 && <li>{props.project.desc.line1}</li>}
                      {props.project.desc.line2 && <li>{props.project.desc.line2}</li>}
                    </ul>
                </div>
            </div>


    )
}

export default ProjectsCard
