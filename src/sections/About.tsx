'use client';
import {useRef} from 'react';

import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import LightroomIcon from '@/assets/icons/Lightroom.svg';
import PhotoshopIcon from '@/assets/icons/photoshop.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import cvImage from '@/assets/images/cv.png';
import smileMoji from '@/assets/images/memoji-smile.png';
import mapImage from '@/assets/images/wroclaw.png';
import {Card} from '@/components/Card';
import {CardHeader} from '@/components/CardHeader';
import {SectionHeader} from '@/components/SectionHeader';
import {ToolboxItems} from '@/components/ToolboxItems';

import {motion} from 'framer-motion';
import Image from 'next/image';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'CSS',
    iconType: CssIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Photoshop',
    iconType: PhotoshopIcon,
  },
  {
    title: 'Lightroom',
    iconType: LightroomIcon,
  },
];

const hobbies = [
  {
    title: 'Gra na gitarze',
    emoji: '🎸',
    left: '34%',
    top: '40%',
  },
  {
    title: 'Gry komputerowe',
    emoji: '🕹️',
    left: '10%',
    top: '56%',
  },
  {
    title: 'Muzyka',
    emoji: '🎵',
    left: '30%',
    top: '80%',
  },
  {
    title: 'Książki',
    emoji: '📖',
    left: '10%',
    top: '28%',
  },
  {
    title: 'Seriale',
    emoji: '📺',
    left: '50%',
    top: '-10%',
  },
  {
    title: 'Piłka nożna',
    emoji: '⚽',
    left: '40%',
    top: '15%',
  },
  {
    title: 'Siatkówka',
    emoji: '🏐',
    left: '10%',
    top: '-5%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader title='Moje CV' description='Pobierz moje CV' />
              <div className='w-30 mx-auto'>
                <Image src={cvImage} alt='Moje CV' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Czego używam'
                description='Poznaj technologię oraz narzędzia których używam do poszerzania swojej wiedzy'
                className=''
              />
              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassname='animate-move-left [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassname='animate-move-right [animation-duration:25s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Hobby'
                description='Moje zainteresowania, co robię w wolnym czasie (poprzesuwaj sobie kafelki)'
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='map'
                className='h-full w-full object-cover object-left-top'
              />
              <div className='absolute top-1/2 left 1/2 translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image src={smileMoji} alt='smiling emoji' className='size-20' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
