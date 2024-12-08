import ArrowUpRight from '../assets/icons/arrow-up-right.svg?react';
import grainImage from '../assets/images/grain.jpg';

export const Contact = () => {
  const whatsappNumber = '21658618709';
  const baseUrl = 'https://api.whatsapp.com/send/';
  const encodedMessage = 'Contact Me';
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_abset=0`;

  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left  overflow-hidden z-0'>
          <div
            className=' inset-0 opacity-5 -z-10'
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Давайте вместе создадим что-то удивительное
              </h2>
              <p className='text-sm md:text-base mt-2'>
                Готовы воплотить в жизнь свой следующий проект? Давайте
                подключимся и обсудить, как я могу помочь вам достичь ваших
                целей.
              </p>
            </div>
            <div>
              <a
                href={whatsappLink}
                rel='noreferrer noopener'
                target='_blank'
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'
              >
                <span className='font-semibold'>Свяжитесь со мной</span>
                {/* @ts-expect-error Server Component */}
                <ArrowUpRight className='size-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
