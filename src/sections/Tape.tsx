import { Fragment } from 'react';
import StarIcon from '../assets/icons/star.svg?react';

const words = [
  'Профессиональный',
  'Внимательный',
  'Ответственный',
  'Сострадательный',
  'Стрессоустойчивый',
  'Эмпатичный',
  'Обучаемый',
  'Надежный',
  'Компетентный',
  'Аккуратный',
  'Спокойный',
];

export const Tape = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 '>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div
            className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'
            style={{
              transform: 'translateX(-750px)',
            }}
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className='inline-flex gap-4 items-center'>
                    <span className='text-gray-900 uppercase font-extrabold text-sm'>
                      {word}
                    </span>
                    {/* @ts-expect-error Server Component */}
                    <StarIcon className='size-6 text-gray-900 -rotate-12' />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};