import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor';
import {CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressLogo = (props) => {


  var PercentageOpacity = 0;

  return (
    <div className='progressBar flex flex-row items-center justify-around z-10'>
        <ReactVisibilitySensor>
         {({ isVisible }) => {
          var Percentage = 0;

            Percentage = isVisible ? props.percentage : 0;

           return (
            <div className={`w-[20vw] sm:w-[15vw] lg:w-[120px] relative bg-[url(${props.logo})] bg-[length:50%] hover:bg-none transition-[1s_ease-in-out] bg-clip-padding  bg-no-repeat bg-center`}>
             <CircularProgressbarWithChildren value={Percentage} styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `${Percentage>=80?"#3e98c7":(Percentage>=60?"orange":"red")}`,
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'round',
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#d6d6d6',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'round',
                          // Rotate the trail
                          transformOrigin: 'center center',
                        },
                        // Customize the text
                        text: {
                          // Text color
                          fill: '#f88',
                          // Text size
                          fontSize: '16px',
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                          background:true,
                          fill: "",
                        },
                        
                    }}>
                    <div className={`absolute -z-1 w-full h-full flex flex-col items-center justify-center progressPercentage  opacity-${PercentageOpacity} hover:opacity-${100-PercentageOpacity} transition-[1s_ease-in-out]`}>

                      <div className='lg:flex hidden'>{props.text}</div>
                    </div>
             </CircularProgressbarWithChildren>
            </div>
               );
             }}
     </ReactVisibilitySensor>
    </div>
  )
}

export default CircularProgressLogo