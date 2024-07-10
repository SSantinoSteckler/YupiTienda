import Slider from 'react-slick';
import { CardProduct } from '../CardProduct';
import { Product } from '../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCarrouselCardsProducts } from './useCarrouselCardsProducts';

type CarouselProductProps = {
  products: Product[];
};

export const CarouselProduct = ({ products }: CarouselProductProps) => {
  const { settings } = useCarrouselCardsProducts();

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
