import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { CustomizedBadges } from '../components/CustomizedBadges';

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <Link to={'/carrito'}>
        <div className='bg-black text-white fixed bottom-8 right-8 p-6 rounded-full z-20 hover:scale-110 transition-all cursor-pointer border-2 '>
          <CustomizedBadges />
        </div>
      </Link>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};
