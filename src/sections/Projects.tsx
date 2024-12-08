import CheckIcon from '../assets/icons/check-circle.svg?react';

import { HeaderSection } from '../components/HeaderSection';
import { Card } from '../components/Card';
import tarek from '../assets/images/tarek.jpg';
import tarekTwo from '../assets/images/tarek2.jpg';
import tarekThree from '../assets/images/tarek3.jpg';
import tarekFour from '../assets/images/tarek4.jpg';

const portfolioProjects = [
  {
    firstYear: '2023',
    endYear: '2025',
    title: 'СЗГМУ имени И. И. Мечникова',
    results: [{ title: 'Ординатура по нейрохирургии' }],
    image: tarekThree,
  },
  {
    firstYear: '2017',
    endYear: '2023',
    title: 'Астраханский государственный медицинский университет',
    results: [{ title: 'лечебное дело' }],
    image: tarekFour,
  },
  {
    firstYear: '2017',
    endYear: '2025',
    title: 'Стажировки и практики.',
    results: [
      { title: '08/2018-09/2018 приемное отделение' },
      { title: '08/2019-09/2019  приемное отделение' },
      { title: '02/2021-05/2021 нейрохирургическое отделение' },
      { title: '05/2021-06/2021 кардиологическое отделение' },
      { title: '07/2022-08/2022 травматологичекое отделение' },
      { title: 'НИИ скорой помощи им. И.И.Джанелидзе:' },
      { title: '2023- нейрохирургическое отделение' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: tarek,
  },
  {
    firstYear: 'Операции',
    endYear: '',
    title: 'Клинический опыт',
    results: [
      {
        title:
          'Трепанация черепа: Удаление гематомы (субдуральные , эпидуральные , внутримозговые)',
      },
      {
        title:
          'Операции на позвоночнике: Ламинэктомия, Дискэктомия, Стабилизация позвоночника (ТПФ), Удаление грыжи позвоночника.',
      },
      { title: 'Чрезкожные процедуры: Пункция спинномозговой жидкости.' },
      { title: 'Краниопластика: Реконструкция черепа после травмы головы.' },
    ],
    image: tarekTwo,
  },
];

export const Projects = () => {
  return (
    <section className='pb-16 lg:py-24' id='projects'>
      <div className='container'>
        <HeaderSection eyebrow='Образование' title='' description='' />
        <div className='flex flex-col mt-10 gap-20 md:mt-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.firstYear}</span>
                    <span>&bull;</span>
                    <span>{project.endYear}</span>
                  </div>

                  <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li className='flex gap-2 text-sm text-white/50 md:text-base'>
                        {/* @ts-expect-error Server Component */}
                        <CheckIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='relative'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-full lg:max-w-none'
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
