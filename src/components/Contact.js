import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:py-24' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-lg uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in Touch
              </h4>
              <h2 className='text-3xl lg:text-5xl leading-none mb-12'>
                Let's Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border border-transparent rounded-lg flex flex-col gap-y-6 pb-6 p-6 items-start bg-transparent'
          >
            <input
              className='bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your Name'
            />
            <input
              className='bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your Email'
            />
            <textarea
              className='bg-transparent border-b border-white/20 py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-6'
              placeholder='Your Message'
            ></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
