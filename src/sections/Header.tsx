export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <a href='#home' className='nav-item'>
          дом
        </a>
        <a href='#projects' className='nav-item'>
          Образование
        </a>
        <a href='#about' className='nav-item'>
          о
        </a>
        <a
          href='#contact'
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Контакт
        </a>
      </nav>
    </div>
  );
};
