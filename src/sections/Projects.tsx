import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import {Card} from '@/components/Card';

import Image from 'next/image';

// TUTAJ FIRMY/OSIĄGNIĘCIA
const portfolioProjects = [
  {
    company: 'DIGRA',
    year: '2018',
    title: 'Kupiec Poznański',
    results: [
      {title: 'Pomoc w projektowaniu UX/UI'},
      {title: 'Projektowanie interaktywnej mapy galerii'},
      {title: 'Zaprojektowanie RWD'},
    ],
    link: 'https://www.kupiecpoznanski.pl',
    image: darkSaasLandingPage,
  },
  {
    company: 'DIGRA',
    year: '2018',
    title: 'Wartmilk',
    results: [
      {title: 'Pomoc w projektowaniu UX/UI'},
      {title: 'Zaprojektowanie RWD'},
      {title: 'Przygotowywanie assetów'},
    ],
    link: 'https://www.osmsieradz.pl',
    image: lightSaasLandingPage,
  },
  {
    company: 'Logic Studio',
    year: '2023',
    title: 'More Moda',
    results: [
      {title: 'Przetłumaczenie strony w 80%'},
      {title: 'Dopracowanie widoków RWD'},
      {title: 'Poszerzenie swojej wiedzy z zakresu TypeScript'},
    ],
    link: 'https://app.moremoda.at',
    image: aiStartupLandingPage,
  },
];

// TU CAŁA LOGIKA
export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
            Moje osiągnięcia
          </p>
        </div>
        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>Wyróżnione projekty</h2>
        <p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
          Chciałem stworzyć przestrzeń, gdzie mogę dzielić się moimi osiągnięciami i przyszłymi
          celami zawodowymi.
        </p>
        <div className='mt-10 md:mt-20 flex flex-col gap-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg;px-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inflate-flex  gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>{project.title}</h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className='flex gap-2 text-sm md:text-base md:mt-5 text-white/50'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Zobacz</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
