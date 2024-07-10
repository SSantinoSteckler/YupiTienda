import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-black p-4 lg:p-6 py-8 lg:py-12 flex flex-col lg:flex-row items-start justify-center lg:justify-evenly flex-wrap gap-4 lg:gap-1'>
      <div className='flex gap-1 items-center mb-4 lg:mb-0'>
        <div className='flex flex-row-reverse items-center gap-2'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
            YupiTienda
          </h2>
          <img src='/home.png' alt='home' className='w-10 md:w-12 lg:w-16' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 items-start flex-wrap'>
        <div className='text-white flex flex-col gap-3 text-base md:text-xl p-2 lg:p-4'>
          <ul className='flex flex-col gap-2 lg:gap-3'>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Political</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className='text-white text-base md:text-xl p-2 lg:p-4'>
          <ul className='flex flex-col gap-2 lg:gap-3'>
            <li>Suppliers</li>
            <li>Terms</li>
            <li>Work with us</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className='text-white text-base md:text-xl p-2 lg:p-4'>
          <ul className='flex flex-col gap-2 lg:gap-3'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <Link to={'/carrito'}>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
