import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          
          {/* Gambar */}
          <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ 
              duration: 2, 
              ease: 'easeInOut', // Haluskan transisi dengan easeInOut
              delay: 0.2 // Tambahkan delay jika perlu
            }}
            className='flex-1 flex justify-center items-center mix-blend-lighten'>
            <img 
              src={require('../assets/wafi.png')} 
              alt='Gambar About Me' 
              className='max-w-full h-auto object-cover'
              style={{ maxHeight: '640px' }} 
            />
          </motion.div>

          {/* Teks */}
          <motion.div 
            initial={{ x: '100vw', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ 
              duration: 2, 
              ease: 'easeInOut', // Haluskan transisi dengan easeInOut
              delay: 0.2 // Tambahkan delay jika perlu
            }}
            className='flex-1'>
            <h2 className='h2 text-accent text-3xl font-bold mb-4'>About Me</h2>
            <p className='h3 mb-4'>
              Saya adalah seorang Web/Mobile Developer Pemula, telah mengambil Jurusan IT (Programmer) di Politeknik IDN Bogor.
            </p>
            <p className='mb-6'>
              Beberapa Project telah saya kerjakan.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={13} duration={4} delay={2.2} /> :
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                Some<br />
                  Experience%
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={15} duration={4} delay={2.2} /> :
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                 <CountUp start={0} end={12} duration={4} delay={2.2} /> :
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Self <br />
                  Satisfied%
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
