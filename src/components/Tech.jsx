import React from 'react'
import {BallCanvas} from "../components/canvas"
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-10'>
      {technologies.map((technology, index) =>(
         <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
         </div>
      ))}
    </div>
  )
}

export default Tech