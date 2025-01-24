'use client';
import * as Scroll from 'react-scroll';

export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <Scroll.Link to='home' smooth={true} duration={500} className='nav-item'>
          Home
        </Scroll.Link>
        <Scroll.Link to='projekty' smooth={true} duration={500} className='nav-item'>
          Projekty
        </Scroll.Link>
        <Scroll.Link to='o-mnie' smooth={true} duration={500} className='nav-item'>
          O mnie
        </Scroll.Link>
        <Scroll.Link
          to='kontakt'
          smooth={true}
          duration={500}
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Kontakt
        </Scroll.Link>
      </nav>
    </div>
  );
};
