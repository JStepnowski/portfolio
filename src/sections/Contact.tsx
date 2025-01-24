'use client';

import {useEffect} from 'react';

export const ContactSection = () => {
  useEffect(() => {
    const button = document.getElementById('contact-button');
    if (button) {
      button.addEventListener('click', () => {
        window.location.href = 'mailto:j.stepnowski97@gmail.com';
      });
    }
  }, []);

  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-visible z-0'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Skontaktuj się ze mną!</h2>
              <p className='text-sm md:text-base mt-2'>
                Masz pytania lub chcesz nawiązać współpracę? Poniżej znajdziesz do mnie kontakt.
              </p>
            </div>
            <div>
              <div className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950'>
                <span className='font-semibold'>Skontaktuj się</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
