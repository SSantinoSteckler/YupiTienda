import { Product } from '../../types';
import { useCardProduct } from './useCardProduct';

export type ElemTypeProductCart = {
  elem: Product;
};

export const CardCartProduct = ({ elem }: ElemTypeProductCart) => {
  const { handleClickMinus, amount, pushProductCart, minusProductCart } =
    useCardProduct({ elem });

  return (
    <div className='bg-white p-2 md:p-3 w-full flex flex-col lg:flex-row gap-2 md:gap-4 border-2 shadow-2xl'>
      <div className='flex-shrink-0'>
        <img
          src={elem.thumbnail}
          alt={elem.title}
          className='max-w-[80px] h-auto md:max-w-[120px] md:h-full object-cover'
        />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <h4 className='text-sm md:text-base lg:text-lg truncate max-w-[250px]'>
          {elem.title}
        </h4>
        <span className='text-gray-600 text-xs md:text-sm'>
          ${elem.price.toFixed(2)}
        </span>
        <span className='text-blue-500 text-xs md:text-sm'>
          Subtotal: ${(elem.price * amount).toFixed(2)}
        </span>
        <div className='flex justify-between items-center flex-wrap mt-1 md:mt-2'>
          <span className='text-xs md:text-sm'>Amount: {amount}</span>
          <div className='flex gap-1 md:gap-2'>
            <button
              className='bg-black p-1 md:p-2 text-white rounded-full hover:bg-gray-800 transition-all'
              onClick={() => pushProductCart(elem)}
            >
              <img src='/plus.png' alt='+' className='w-3 md:w-4 lg:w-5' />
            </button>
            <button
              className='bg-black p-1 md:p-2 text-white rounded-full hover:bg-gray-800 transition-all'
              onClick={() => minusProductCart(elem)}
            >
              <img src='/minus.png' alt='-' className='w-3 md:w-4 lg:w-5' />
            </button>
          </div>
        </div>
        <div className='w-full flex justify-start mt-1 md:mt-2 '>
          <button
            className='w-[45%] bg-black p-1 md:p-2 rounded-md text-white text-xs md:text-sm mt-1 md:mt-0 hover:bg-gray-800 transition-all self-start'
            onClick={handleClickMinus}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
