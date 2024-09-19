import React from 'react';
// images
import logo from '../assets/kupu.png';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href="#">
          <img src={logo} alt="" />
        </a>
        {/*button */}
        <button className='btn btn-sm'>Work with Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
