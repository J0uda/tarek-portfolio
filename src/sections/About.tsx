import { Card } from '../components/Card';
import { HeaderSection } from '../components/HeaderSection';
import bookImage from '../assets/images/book-cover.png';

import { CardHeader } from '../components/CardHeader';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '🎥',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Hiking',
    emoji: '🎥',
    left: '45%',
    top: '70%',
  },
];

export const About = () => {
  const constraintRef = useRef(null);
  return (
    <div className='py-20 lg:py-28' id='about'>
      <div className='container'>
        <HeaderSection
          eyebrow='About Me'
          title='Tunisian Neurosurgeon'
          description='Every brain tells a story!'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-col-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='Мои чтения'
                description='Изучите книги, формирующие мои взгляды.'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <img src={bookImage} alt='book cover' />
              </div>
            </Card>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='За пределами стетоскопа'
                description='Изучение моих увлечений и интересов помимо медицины.'
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
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
