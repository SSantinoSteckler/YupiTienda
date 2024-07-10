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

  const halfLength = Math.ceil(products.length / 2);

  const firstHalf = products.slice(0, halfLength);
  const secondHalf = products.slice(halfLength);

  const remainingProducts = settings.slidesToShow - secondHalf.length;
  const productsForSecondCarousel = firstHalf.slice(remainingProducts);

  return (
    <div className='w-full max-w-[1500px] mx-auto my-8'>
      <div className='my-10'>
        <Slider {...settings}>
          {firstHalf.map((product) => (
            <div key={product.id} className='p-2'>
              <CardProduct elem={product} />
            </div>
          ))}
        </Slider>
      </div>
      {secondHalf.length > 0 && (
        <div className='my-10'>
          <Slider {...settings}>
            {secondHalf.map((product) => (
              <div key={product.id} className='p-2'>
                <CardProduct elem={product} />
              </div>
            ))}

            {productsForSecondCarousel.map((product) => (
              <div key={product.id} className='p-2'>
                <CardProduct elem={product} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
