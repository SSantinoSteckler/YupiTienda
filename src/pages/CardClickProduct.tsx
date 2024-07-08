import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { StarRating } from '../components/StarRating';
import { ReviewComponent } from '../components/ReviewComponent';
import { CarouselProduct } from '../components/CarrouselCardsProducts';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardClickProduct = () => {
  const navigate = useNavigate();
  const products = useAppStore((state) => state.productsAll);
  const productCart = useAppStore((state) => state.productCart);
  const pushProductCart = useAppStore((state) => state.pushProductCart);
  const minusProductCart = useAppStore((state) => state.minusProductCart);
  const { id } = useParams<{ id?: string }>();
  const parsedId = parseInt(id ?? '');

  const product = products.find((elem) => elem.id === parsedId);
  const productAdd = productCart.find((elem) => elem.id === product?.id);
  const amountProduct = productAdd?.amount ?? 0;

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  const handleClickPlus = () => {
    if (product) {
      pushProductCart(product);
      Toastify({
        text: 'Producto Agregado',
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'bottom',
        position: 'left',
        stopOnFocus: true,
        style: {
          background: 'black',
          fontSize: '20px',
          width: '17%',
          padding: '30px',
        },
      }).showToast();
    }
  };

  const handleClickMinus = () => {
    if (product && amountProduct > 0) {
      minusProductCart(product);
    }
  };
  const descuent = useMemo(() => {
    if (product?.price && product.discountPercentage) {
      return ((product.price * product.discountPercentage) / 100).toFixed(2);
    }
    return '0';
  }, [product?.price, product?.discountPercentage]);

  const discountedPrice = useMemo(() => {
    if (product?.price) {
      const priceAfterDiscount = product.price - parseFloat(descuent);
      return priceAfterDiscount.toFixed(2);
    }
  }, [product?.price, descuent]);

  const shareViaEmail = () => {
    if (product) {
      const subject = `Check out this product: ${product.title}`;
      const body = `
      Hi,

      I found this product and thought you might like it:

      ${product.title}
      ${product.description}
      Price: ${product.price}
      Discounted Price: ${discountedPrice}
      
      You can find more details at YupiTienda.com

      Best regards,
    `;

      const mailtoLink = `mailto:?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
    }
  };

  return (
    <section className='flex flex-col items-center min-h-screen p-5 mt-16 mb-20 '>
      <div className='max-w-[1450px] w-full   p-3 flex flex-col gap-14 bgg-bl'>
        <div className='flex flex-row gap-6'>
          <div className='  max-w-[600px] w-full border-2 shadow-xl rounded-xl'>
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className='w-full h-full border-2 rounded-xl'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-9 p-2'>
              <h2 className='text-5xl font-bold'>{product?.title}</h2>
              <div className='p-2 flex flex-row items-center gap-2'>
                <StarRating
                  rating={product?.rating ?? 0}
                  maxRating={6}
                ></StarRating>
                <p className='text-2xl mt-1'>{product?.rating}</p>
              </div>

              <p className='text-2xl'>{product?.description}</p>
              <div className='flex flex-col'>
                <span className='text-[20px] text-slate-700'>
                  {product?.category} - {product?.availabilityStatus} :{' '}
                  {product?.stock}
                </span>
                <span className='text-2xl'>{product?.brand}</span>
                <li className='text-1xl'>{product?.shippingInformation}</li>
              </div>

              <hr className='border-2 w-full mt-5 ' />
            </div>
            <div className='p-2 flex flex-col gap-2'>
              <div className='flex flex-row gap-3'>
                <span className=' text-4xl line-through'>
                  ${product?.price}
                </span>
                {discountedPrice !== undefined && (
                  <span className='font-bold text-4xl'>${discountedPrice}</span>
                )}
                <small className='text-[19px]'>
                  %{product?.discountPercentage.toFixed(1)} OFF
                </small>
              </div>

              <span className='text-[17px] text-slate-700'>
                {product?.returnPolicy}
              </span>
            </div>
            <div className='flex gap-2'>
              <button
                onClick={handleClickPlus}
                className='p-3 bg-black text-white hover:bg-slate-900 transition-all w-[50%] flex flex-row items-center gap-1 justify-center shadow-xl'
              >
                <img
                  src='/shopping-cart.png'
                  alt='shopping-cart'
                  className='max-w-[20px]'
                />
                Agregar al Carrito <span>{amountProduct}</span>
              </button>

              <button
                className='bg-black p-4 text-white'
                onClick={handleClickPlus}
              >
                +
              </button>
              <button
                className='bg-black p-4 text-white'
                onClick={handleClickMinus}
              >
                -
              </button>

              <button className='p-3 bg-white text-black border-2 border-black shadow-xl hover:bg-slate-200 transition-all w-[50%] flex flex-row items-center gap-1 justify-center'>
                <img
                  src='/share.png'
                  alt='shopping-cart'
                  className='max-w-[20px]'
                  onClick={shareViaEmail}
                />
                Compartir
              </button>
            </div>
          </div>
        </div>
        <hr className='border-2 shadow-2xl' />
        <div>
          <div className='flex flex-col gap-4 items-end'>
            {product?.reviews.map((elem) => (
              <ReviewComponent
                key={elem.reviewerName}
                elem={elem}
              ></ReviewComponent>
            ))}
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8 '>
        <div className='flex justify-start'>
          <h1 className='text-4xl font-bold text-center mb-2S'>
            Interest For You
          </h1>
        </div>
        <CarouselProduct products={products} />
      </div>
    </section>
  );
};
