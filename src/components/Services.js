import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
// Import gambar
import webDevImage from '../assets/html5.png'; 
import canvaImage from '../assets/javascript.png';
import youtubeImage from '../assets/canva.png';

//services data
const services = [
  {
    name: 'HTMl ',
    description: 'Saya telah menggunakan HTMl untuk project.',
    Link: 'Learn More',
    image: webDevImage
  },
  {
    name: 'Java Script',
    description: 'Saya telah menggunakan Java Script untuk project.',
    Link: 'Learn More',
    image: canvaImage
  },
  {
    name: 'Canva',
    description: 'Saya telah menggunakan Canva untuk Design project.',
    Link: 'Learn More',
    image: youtubeImage
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          {/* Bagian animasi teks di kiri */}
          <div className='flex-1 text-left mb-6 lg:mb-0'>
            {/* Animasi My Project, Skill saya dan See My Work */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.3 }} // Mengubah 'once: true' menjadi false
              className='space-y-4 lg:-mt-24' // Mengangkat elemen lebih tinggi
            >
              <h2 className='h2 text-accent mb-4'>My Skill</h2>
              <h3 className='h3 max-w-[455px]'>Bebearapa Skill yang sudah saya jalankan/kerjakan.</h3>
              <button className='btn btn-sm'>See My Work</button>
            </motion.div>
          </div>

          {/* services */}
          <div className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index)=> {
                const { name, description, Link, image } = service;
                return (
                  <motion.div
                    key={index}
                    className='border-b border-white/20 h-[146px] mb-[38px] flex items-center'
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.3 }} // Pastikan animasi muncul kembali saat terlihat
                  >
                    {/* Gambar di samping teks */}
                    <motion.div 
                      variants={fadeIn('left', 0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.3 }} 
                      className='flex-shrink-0 mr-6'
                    >
                      <motion.img
                        src={image}
                        alt={name}
                        className='w-[150px] object-cover rounded-lg shadow-lg'
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                    <motion.div 
                      variants={fadeIn('left', 0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.3 }} 
                      className='flex-1'
                    >
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight mb-4'>
                        {description}
                      </p>
                      <div className='flex'>
                        <a href="#" className='btn w-9 h-9 flex justify-center items-center'>
                          <BsArrowUpRight />
                        </a>
                        <a href="#" className='text-gradient text-sm ml-4'>
                          {Link}
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
