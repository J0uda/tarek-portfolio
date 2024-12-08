import MemojiImage from '../assets/images/hero-img.png';
import grainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg?react';
import SparkleIcon from '../assets/icons/sparkle.svg?react';
import { Heroorbit } from '../components/HeroOrbit';

export const Hero = () => {
  return (
    <div
      className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'
      id='home'
    >
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        ></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <Heroorbit
          shouldspin
          spinduration='3s'
          size={430}
          rotation={-14}
          shouldorbit
          orbitduration='30s'
        >
          {/* @ts-expect-error Server Component */}
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </Heroorbit>

        <Heroorbit
          shouldspin
          spinduration='3s'
          size={440}
          rotation={79}
          shouldorbit
          orbitduration='32s'
        >
          {/* @ts-expect-error Server Component */}

          <SparkleIcon className='size-5 text-emerald-300/20' />
        </Heroorbit>

        <Heroorbit size={520} rotation={-41} shouldorbit orbitduration='34s'>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </Heroorbit>

        <Heroorbit
          spinduration='3s'
          shouldspin
          size={530}
          rotation={178}
          shouldorbit
          orbitduration='36s'
        >
          {/* @ts-expect-error Server Component */}
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </Heroorbit>

        <Heroorbit
          size={550}
          rotation={20}
          shouldorbit
          orbitduration='38s'
          shouldspin
          spinduration='6s'
        >
          {/* @ts-expect-error Server Component */}
          <StarIcon className='size-12 text-emerald-300' />
        </Heroorbit>

        <Heroorbit
          size={590}
          rotation={98}
          shouldorbit
          orbitduration='40s'
          shouldspin
          spinduration='6s'
        >
          {/* @ts-expect-error Server Component */}
          <StarIcon className='size-8 text-emerald-300' />
        </Heroorbit>

        <Heroorbit size={650} rotation={-5} shouldorbit orbitduration='42s'>
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </Heroorbit>

        <Heroorbit
          size={710}
          spinduration='3s'
          shouldspin
          rotation={144}
          shouldorbit
          orbitduration='44s'
        >
          {/* @ts-expect-error Server Component */}
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </Heroorbit>

        <Heroorbit size={720} rotation={85} shouldorbit orbitduration='46s'>
          <div className='size-3 rounded-full bg-emerald-300/20' />
        </Heroorbit>

        <Heroorbit
          size={800}
          rotation={-72}
          shouldorbit
          orbitduration='48s'
          shouldspin
          spinduration='6s'
        >
          {/* @ts-expect-error Server Component */}
          <StarIcon className='size-28 text-emerald-300' />
        </Heroorbit>
      </div>

      <div className='container'>
        <div className='flex flex-col items-center'>
          <img src={MemojiImage} alt='emoji' className='size-[150px]' />
          <div className='bh-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>
              Каждая операция- новый вызов!
            </div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-5xl md:text-5xl text-center mt-8 tracking-wide'>
            Фержани Тарек нейрохирург
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Кафедра нейрохирургии им.проф А.Л.Поленова. База:НИИ скорой помощи
            им. И.И.Джанелидзе
          </p>
        </div>
      </div>
    </div>
  );
};
