import { useIndexPage } from './useIndexPage';
import { ImageCarousel } from '../../components/Carrousel';
import { CardProduct } from '../../components/CardProduct';
import { CategoryCard } from '../../components/CategoryCard';
import { Loader } from '../../components/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const IndexPage = () => {
  const { loading, settings, CategoryNames, ProductsAll } = useIndexPage();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className='flex justify-center bg-black'>
        <ImageCarousel />
      </section>

      <section className='flex justify-center p-6 bg-black'>
        <div className='w-full 2xl:w-3/4 my-28 flex flex-col gap-7'>
          <div>
            <h2 className='text-3xl md:text-4xl lg:text-4xl p-1 font-semibold text-white bg-black inline'>
              Collections
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-16'>
            <Slider {...settings}>
              {CategoryNames.slice(0, Math.ceil(CategoryNames.length / 2)).map(
                (elem) => (
                  <CategoryCard elem={elem} key={elem.name} />
                )
              )}
            </Slider>
            <Slider {...settings}>
              {CategoryNames.slice(Math.ceil(CategoryNames.length / 2)).map(
                (elem) => (
                  <CategoryCard elem={elem} key={elem.name} />
                )
              )}
            </Slider>
            <hr className='m-6 border-2' />
          </div>
        </div>
      </section>

      <section className='min-h-screen flex flex-col justify-center items-center p-5 my-28'>
        <div className='gap-2 w-full max-w-[1300px]'>
          <div className='my-8'>
            <h2 className='text-3xl md:text-4xl lg:text-4xl p-1 my-6 text-white bg-black inline font-semibold'>
              Top Sellers
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {ProductsAll.slice(0, 12).map((elem) => (
              <CardProduct key={elem.id} elem={elem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
