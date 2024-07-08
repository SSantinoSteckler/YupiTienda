import Slider from 'react-slick';
import { CardProduct } from './CardProduct';
import { Product } from '../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProductProps = {
  products: Product[];
};

export const CarouselProduct = ({ products }: CarouselProductProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full max-w-[1500px] mx-auto my-8 '>
      <div className='my-10'>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className='p-2'>
              <CardProduct elem={product} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='my-10'>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className='p-2'>
              <CardProduct elem={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
