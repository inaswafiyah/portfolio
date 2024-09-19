import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import img1 from '../assets/portbyeon.png';
import img2 from '../assets/max.png';
import img3 from '../assets/form.png';
import img4 from '../assets/spotfy.png';
import img5 from '../assets/originote.png';
import img6 from '../assets/maxwell.png';
import img7 from '../assets/localhost.png';
import img8 from '../assets/table.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          {/* Teks di kiri */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Project
              </h2>
              <p className='max-w-sm mb-16'>
                Ini adalah beberapa Project yang sudah saya kerjakan!.
              </p>
              <button className='btn btn-sm'>View All Project</button>
            </div>
          </motion.div>

          {/* Gambar-gambar */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 grid grid-cols-2 gap-6'
          >
            {/* Gambar 1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Portfolio</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Profile</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Form Login</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 4 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Spotify</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 5 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Card product</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 6 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Card</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 7 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img7} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Database</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>

            {/* Gambar 8 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img8} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Table</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
