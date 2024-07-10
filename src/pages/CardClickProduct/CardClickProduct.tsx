import { useCardClickProduct } from './useCardClickProduct';
import { StarRating } from '../../components/StarRating';
import { ReviewComponent } from '../../components/ReviewComponent';
import { CarouselProduct } from '../../components/CarrousselCardsProducts/CarrouselCardsProducts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardClickProduct = () => {
  const {
    shareViaEmail,
    handleClickMinus,
    handleClickPlus,
    product,
    amountProduct,
    discountedPrice,
    products,
  } = useCardClickProduct();

  return (
    <section className='flex flex-col items-center min-h-screen p-5 mt-16 mb-20'>
      <div className='max-w-[1450px] w-full p-3 flex flex-col gap-14 bgg-bl'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='max-w-[600px] w-full border-2 shadow-xl rounded-xl'>
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className='w-full h-full border-2 rounded-xl'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5 p-2'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                {product?.title}
              </h2>
              <div className='p-2 flex flex-row items-center gap-1'>
                <StarRating
                  rating={product?.rating ?? 0}
                  maxRating={6}
                ></StarRating>
                <p className='text-base md:text-lg mt-1'>{product?.rating}</p>
              </div>

              <p className='text-base md:text-lg lg:text-xl'>
                {product?.description}
              </p>
              <div className='flex flex-col'>
                <span className='text-xs md:text-sm lg:text-base text-slate-700'>
                  {product?.category} - {product?.availabilityStatus} :{' '}
                  {product?.stock}
                </span>
                <span className='text-base md:text-lg lg:text-xl'>
                  {product?.brand}
                </span>
                <li className='text-xs md:text-sm lg:text-base'>
                  {product?.shippingInformation}
                </li>
              </div>

              <hr className='border-2 w-full mt-3' />
            </div>
            <div className='p-2 flex flex-col gap-1'>
              <div className='flex flex-row gap-2 flex-wrap'>
                <span className='text-lg md:text-xl lg:text-2xl line-through'>
                  ${product?.price}
                </span>
                {discountedPrice !== undefined && (
                  <span className='font-bold text-lg md:text-xl lg:text-2xl'>
                    ${discountedPrice}
                  </span>
                )}
                <small className='text-xs md:text-sm lg:text-base'>
                  %{product?.discountPercentage.toFixed(1)} OFF
                </small>
              </div>

              <span className='text-xs md:text-sm lg:text-base text-slate-700'>
                {product?.returnPolicy}
              </span>
            </div>
            <div className='flex gap-2 flex-wrap'>
              <button
                onClick={handleClickPlus}
                className='p-2 bg-black text-white hover:bg-slate-900 transition-all w-[100%] md:w-[50%] flex items-center gap-1 justify-center shadow-xl'
              >
                <img
                  src='/shopping-cart.png'
                  alt='shopping-cart'
                  className='max-w-[20px]'
                />
                Agregar al Carrito <span>{amountProduct}</span>
              </button>

              <button
                className='bg-black p-3 text-white'
                onClick={handleClickPlus}
              >
                +
              </button>
              <button
                className='bg-black p-3 text-white'
                onClick={handleClickMinus}
              >
                -
              </button>

              <button
                className='p-2 bg-white text-black border-2 border-black shadow-xl hover:bg-slate-200 transition-all w-[60%] md:w-[50%] flex items-center gap-1 justify-center'
                onClick={shareViaEmail}
              >
                <img src='/share.png' alt='share' className='max-w-[20px]' />
                Compartir
              </button>
            </div>
          </div>
        </div>
        <hr className='border-2 shadow-2xl' />
        <div>
          <div className='flex flex-col gap-2 items-end'>
            {product?.reviews.map((elem) => (
              <ReviewComponent
                key={elem.reviewerName}
                elem={elem}
              ></ReviewComponent>
            ))}
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8'>
        <div className='flex justify-start'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2'>
            Interest For You
          </h1>
        </div>
        <CarouselProduct products={products} />
      </div>
    </section>
  );
};
