import { Product } from '../../types';
import { useCardProduct } from './useCardProduct';

export type ElemTypeProductCart = {
  elem: Product;
};

export const CardCartProduct = ({ elem }: ElemTypeProductCart) => {
  const { handleClickMinus, amount, pushProductCart, minusProductCart } =
    useCardProduct({ elem });

  return (
    <div className='bg-white p-3 w-full flex flex-col lg:flex-row gap-4 border-2 shadow-2xl'>
      <div className='flex-shrink-0'>
        <img
          src={elem.thumbnail}
          alt={elem.title}
          className='max-w-[100px] h-auto md:max-w-[150px] md:h-full object-cover'
        />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <h4 className='text-lg md:text-xl truncate max-w-[300px]'>
          {elem.title}
        </h4>
        <span className='text-gray-600'>${elem.price}</span>
        <span className='text-blue-500'>
          Subtotal: ${(elem.price * amount).toFixed(2)}
        </span>
        <div className='flex justify-between items-center flex-wrap'>
          <span className='text-base md:text-lg'>Amount: {elem.amount}</span>
          <div className='flex gap-2'>
            <button
              className='bg-black p-2 text-white rounded-full hover:bg-gray-800 transition-all'
              onClick={() => pushProductCart(elem)}
            >
              <img src='/plus.png' alt='+' className='w-4 h-4 lg:w-6 lg:h-6' />
            </button>
            <button
              className='bg-black p-2 text-white rounded-full hover:bg-gray-800 transition-all'
              onClick={() => minusProductCart(elem)}
            >
              <img src='/minus.png' alt='-' className='w-4 h-4 lg:w-6 lg:h-6' />
            </button>
          </div>
        </div>
        <div className='w-full flex justify-start mt-2 '>
          <button
            className='w-[45%] bg-black p-3  rounded-md text-white mt-2 md:mt-0 hover:bg-gray-800 transition-all self-start'
            onClick={handleClickMinus}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
