import { Link } from 'react-router-dom';
import { useState } from 'react';
import BasicMenu from './BasicMenuUI/BasicMenu';
import { CustomizedBadges } from './CustomizedBadges';

export const Header = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <header className='bg-black py-6 md:py-8 lg:py-11 text-white flex justify-between gap-4 md:gap-6 lg:gap-9 px-4 md:px-6 lg:px-8 items-center'>
      <div className='flex items-center flex-row-reverse gap-2'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          YupiTienda
        </h2>
        <img
          src='/home.png'
          alt='home'
          className='max-w-[50px] md:max-w-[60px] lg:max-w-[70px]'
        />
      </div>
      <div className='hidden lg:block'>
        <nav>
          <ul className='flex gap-4 md:gap-5 lg:gap-6 text-xl md:text-2xl lg:text-2xl items-center'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <BasicMenu closeModal={handleClick}></BasicMenu>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex lg:hidden' onClick={handleClick}>
        <img
          src='/menu-deep.png'
          alt='menu-deep'
          className='max-w-[30px] md:max-w-[35px] lg:max-w-[40px]'
        />
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-black z-50 p-7 transition-opacity duration-300 ${
          value ? 'slide-in opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className='flex flex-col gap-9'>
          <div className='float-right' onClick={handleClick}>
            <img
              src='/x.png'
              alt='x'
              className='max-w-[30px] md:max-w-[35px] lg:max-w-[40px]'
            />
          </div>
          <nav>
            <ul className='flex flex-col gap-6 text-xl md:text-2xl lg:text-2xl items-center'>
              <li onClick={handleClick}>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <BasicMenu closeModal={handleClick}></BasicMenu>
              </li>
              <li onClick={handleClick}>
                <Link to={'/carrito'}>Cart</Link>
                <CustomizedBadges />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
