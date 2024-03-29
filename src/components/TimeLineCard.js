import React from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TimeLineCard = (props) => {

    const description = JSON.parse(props.desc);

  return (
    <div className={`hover:scale-105 text-sm lg:text-base lg:scale-95 shadow-xl border border-white transition-[1s_ease-in-out] ml-3 lg:ml-0 lg:min-h-[300px] timelineCard flex flex-col items-center justify-around text-white text-center  w-full lg:w-[50%] p-4 mx-4 lg:m-0 rounded-xl gap-3`} style={{background:'rgba(128, 128, 128, 0.412)'}}>
        <div className="card-title flex flex-col items-center justify-center text-sm lg:text-xl text-gray-300" >
            {props.title}
        </div>
        <div className="location text-blue-300">
            <span><FontAwesomeIcon icon={faLocationDot} /> {props.location}</span>
        </div>
        <div className="card-date flex flex-col items-center justify-center  text-[#3e98c7]" >
            {props.date}
        </div>
        <div className="card-desc flex text-slate-300 flex-col items-center justify-center ">
            <div>{description.line1}</div>
            <div className='text-blue-300'>{description.line2}</div>
        </div>
        <div className="card-footer flex flex-col items-center justify-center  text-violet-400">
            {props.footer}
        </div>
      
    </div>
  )
}

export default TimeLineCard