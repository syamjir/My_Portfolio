import React from 'react'
import {motion,useInView} from "framer-motion"

const Work = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <div className='flex justify-center items-center'>
        <div className='flex-col justify-center px-4 md:px-6'>
        <div className="text-2xl md:text-4xl font-tiny5 mt-4 md:mt-8 text-center font-bold text-slate-200" 
                    >Work & Exp.</div>
                    
        {/* //Work Experince card */}
        <div className='flex flex-row justify-center my-5 items-center'>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 0, scale: 0.8 }} 
          whileHover={{scale:1.05}}
          whileTap={{scale: 1.05}}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
          transition={{ duration: 0.7, bounce: 0.3, type: 'spring' }}
         className="flex flex-col justify-center w-full cursor-pointer md:w-3/4 border-r-4 border-b-8  border-l-2 border-t-2 border-l-sky-400 border-t-sky-400  rounded-b-xl rounded-t-xl border-slate-600 bg-slate-800 ">
        <div className='flex flex-row justify-between items-end'>
        <div>
        <div className="text-xl md:text-4xl font-mono mt-4 md:mt-5 ml-4 md:ml-5  text-left font-bold text-fuchsia-400">MERN-Stack Trainee</div>
        <div className="text-base md:text-2xl font-mono ml-4 md:ml-5 text-left font-semibold text-green-400 flex items-center space-x-1">
  <span>Techlive</span>
  <span>&bull;</span>
  <span>Remote</span>
</div>
        <div className='block md:hidden lg:hidden  text-left ml-4 text-xs mx-2 font-mono font-semibold text-amber-400'>June, 2024 - Aug, 2024</div>
        </div>
        <div className='hidden md:block text-right mr-5 font-mono font-semibold text-amber-400'>June, 2024 - Aug, 2024</div>
        </div>
        <div className="mt-2 text-left lg:mt-5 px-4 font-mono font-medium text-sm md:text-base text-slate-400 pb-3 tracking-wide md:tracking-wider">&bull;<span className="mr-2"/>Worked on a variety of web development projects using the MERN stack. <br/>&bull;<span className="mr-2"/>Learned about building dynamic and responsive web applications. <br/>&bull;<span className="mr-2"/>Gained practical experience and sharpened coding skills through hands-on projects and exercises.</div>
         </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Work