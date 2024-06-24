import React from 'react'
import bg from './bg.jpeg'
import {TypeAnimation} from 'react-type-animation';

const Feedback = () => {
  return (
    <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' >
        <div className= 'flex-col my-auto mx-auto'>
            <div className='my-auto'>
                  <img className="w-[300px] sm:w-[300px] mx-auto-h-auto rounded-full" src={bg} alt="mybg"/>
            </div>
            <h1 className= 'justify-center align-center md:text-5xl sm:text-5xl text-3xl font-bold md:py-6'>
                <TypeAnimation
                sequence={[
                    "Online Course",
                    1000, 
                    "Feedback",
                    1000,
                    "Review",
                    1000, 
                ]}
                wrapper="span" 
                speed= {50} 
                repeat= {Infinity}
                />
            </h1>
        </div>
    </div>
  )
}

export default Feedback