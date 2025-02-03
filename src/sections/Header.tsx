'use client';
import {useState} from 'react';
import {Link} from 'react-scroll';

import {motion} from 'framer-motion';
import {Menu, X} from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-3 w-full z-10 flex justify-between items-center px-4'>
      {/* Mobile Menu Button */}
      <div className='flex-1'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 bg-white/10 rounded-full border border-white/15'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className='hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
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
          className='nav-item bg-emerald-300 text-gray-900 hover:bg-emerald-300/70 hover:text-gray-900'
        >
          Kontakt
        </Link>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -20}}
          className='absolute top-16 left-4 w-[120px] bg-white/10 backdrop-blur border border-white/15 rounded-lg p-4 flex flex-col gap-2'
        >
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='nav-item'
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to='projekty'
            smooth={true}
            duration={500}
            className='nav-item'
            onClick={() => setIsOpen(false)}
          >
            Projekty
          </Link>
          <Link
            to='o-mnie'
            smooth={true}
            duration={500}
            className='nav-item'
            onClick={() => setIsOpen(false)}
          >
            O mnie
          </Link>
          <a
            href='https://github.com/JStepnowski'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-item'
            onClick={() => setIsOpen(false)}
          >
            Git
          </a>
          <Link
            to='kontakt'
            smooth={true}
            duration={500}
            className='nav-item bg-emerald-300 text-gray-900 hover:bg-emerald-300/70 hover:text-gray-900'
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </motion.div>
      )}
    </div>
  );
};
