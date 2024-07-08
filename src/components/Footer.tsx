import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-black p-6 py-12 flex flex-col lg:flex-row items-start justify-center lg:justify-evenly flex-wrap gap-6 lg:gap-1'>
      <div className='flex gap-1 items-center mb-6 lg:mb-0'>
        <div className='flex flex-row-reverse items-center gap-2'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
            YupiTienda
          </h2>
          <img src='/home.png' alt='home' className='w-12 md:w-16 lg:w-20' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 items-start flex-wrap'>
        <div className='text-white flex flex-col gap-5 text-xl md:text-2xl p-4'>
          <ul className='flex flex-col gap-4 lg:gap-5'>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Political</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className='text-white text-xl md:text-2xl p-4'>
          <ul className='flex flex-col gap-4 lg:gap-5'>
            <li>Suppliers</li>
            <li>Terms</li>
            <li>Work with us</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className='text-white text-xl md:text-2xl p-4'>
          <ul className='flex flex-col gap-4 lg:gap-5'>
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
