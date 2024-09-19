import React from 'react';
//images
import image from '../assets/foto2.png.jpg';
//icons
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
//type animation
import { TypeAnimation } from 'react-type-animation'
//motion 
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)}
             initial="hidden"
              whileInView={'show'}
               viewport={{once: false,amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              <span>INAS</span>
              <span className='mt-4 lg:mt-0 lg:ml-4'>WAFIYAH</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false,amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'
            >
              <span className='text-white ml-4'>I am a </span>
              <span className='text-accent'>
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'Designer',
                    2000,
                    'Youtuber',
                    2000,
                  ]}
                  speed={50}
                  wrapper='span'
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
             whileInView={'show'}
              viewport={{once: false,amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Hallo saya adalah seorang Web/Moblie Developer
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)}
             initial="hidden"
              whileInView={'show'}
               viewport={{once: false,amount: 0.7}} className='flex 
               max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false,amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin  />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
           variants={fadeIn('down', 0.5)}
            initial="hidden"
             whileInView={'show'}
               className='hidden lg:flex flex-1 justify-center max-w-[320px] lg:max-w-[482px]'>
            <img src={image} alt="" className='w-64 h-64 object-cover rounded-full' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
