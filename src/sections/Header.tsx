'use client';
import {Link} from 'react-scroll';

export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <Link to='home' smooth={true} duration={500} className='nav-item'>
          Home
        </Link>
        <Link to='projekty' smooth={true} duration={500} className='nav-item'>
          Projekty
        </Link>
        <Link to='o-mnie' smooth={true} duration={500} className='nav-item'>
          O mnie
        </Link>
        <a
          href='https://github.com/JStepnowski'
          target='_blank'
          rel='noopener noreferrer'
          className='nav-item'
        >
          Git
        </a>
        <Link
          to='kontakt'
          smooth={true}
          duration={500}
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Kontakt
        </Link>
      </nav>
    </div>
  );
};
