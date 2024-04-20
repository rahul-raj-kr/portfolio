import React from 'react'
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
   <div className='md:h-[650] pb-8 bg-gray-100 ' id='skills'>
      <div className="md:pb-14 pt-10  text-center">
        <p className="text-5xl mb-3 font-bold italic text-black mt-14 "><span className="bg-yellow-200 ">SKILL'S</span> </p>
        <p className="text-gray-400">My TechStack Skills</p>
      </div>
    <div className='md:flex justify-between pb-16 py-7 px-6 mb-6 grid grid-cols-2 '>
     <a href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg' ><img className='hover:-translate-y-5 duration-200 ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" width={130} alt="HTML 5" loading="lazy" w-/><h1 className=' ml-[50px] '>HTML</h1></a>
     <a href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg' > <img className='hover:-translate-y-5 duration-200' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" width={130} alt="CSS 3" loading="lazy"/><h1 className='  ml-[50px]'>CSS</h1></a>
      <a  href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg' ><img className='hover:-translate-y-5 duration-200 '  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width={130} alt="JavaScript" loading="lazy"/><h1 className='  ml-[35px]'>JavaScript</h1> </a>
     <a href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg'  > <img className='hover:-translate-y-5 duration-200'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={130} alt="React JS" loading="lazy"/><h1 className='  ml-[40px]'>React JS</h1></a>
     <a href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg' > <img className='hover:-translate-y-5 duration-200'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" width={130} alt="Bootstrap" loading="lazy"/><h1 className='  ml-[30px]'>Bootstrap</h1></a>
     
    <a href=""className='bg-white pt-5 px-4 border-2 border-yellow-300 rounded-lg'><img className='hover:-translate-y-5 duration-200' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"width={130} /><h1 className='  ml-[30px]'>TailwindCSS</h1></a>
          
    </div>
    
    </div>
  )
}

export default Skills