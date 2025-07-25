import {styles} from "../style"
import React from 'react'
import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas"
import {EarthCanvas} from "./canvas"
import resume from "../assets/company/NirvanPExpUpdt.pdf"

//Crafting modern digital experiences with React, Node.js, and AI Integration

const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
       <div className="flex flex-col justify-center items-center mt-5">
       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
       </div>
       <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915EFF]">Nirvan</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop <span className="text-[#915EFF]">Web applications </span>
        and <span className="text-[#915EFF]">Cross-Platform Mobile app</span></p>
        <a 
        href={resume}
        download
        className="inline-block mt-5 px-6 py-3 bg-[#915EFF] text-white rounded-lg ht">
          Download Resume
        </a>
       </div>
      </div>

      {/* <ComputersCanvas /> */}
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      {/* <div className="h-[100vh] flex justify-center items-center">
         <button onClick={console.log("download button")} className="bg-slate-500 px-6 py-2 rounded">
          <a href={resume} download="resume">Download</a>
         </button>
      </div> */}
    </section>
  )
}

export default Hero