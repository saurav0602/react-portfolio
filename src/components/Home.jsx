import React from 'react'
import home from '../assets/home.png';
import { motion } from "framer-motion";
const Container= (delay) => ({
    hidden: {x: -100, opacity:0 },
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5 ,delay: delay}
    }

});

const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb:35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                variants={Container(0)}
                initial='hidden'
                animate='visible'
                 className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                    Saurav Kumar
                </motion.h1>
                <motion.span 
                 variants={Container(0.5)}
                 initial='hidden'
                 animate='visible'
                 className='bg-gradient-to-r from-pink-300 via bg-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Full Stack Developer
                </motion.span>
                <motion.p 
                 variants={Container(1)}
                 initial='hidden'
                 animate='visible'
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.

                </motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img
                initial={{ x: 100,opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                className='w-[50%]'
                src={home} alt="home"/>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
