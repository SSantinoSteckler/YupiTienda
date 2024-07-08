import { useAppStore } from '../stores/useAppStore';
import { Product } from '../types';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

type ElemTypeProductCart = {
  elem: Product;
};

export const CardCartProduct = ({ elem }: ElemTypeProductCart) => {
  const deleteProductCart = useAppStore((state) => state.deleteProductCart);
  const pushProductCart = useAppStore((state) => state.pushProductCart);
  const minusProductCart = useAppStore((state) => state.minusProductCart);

  const amount = elem.amount ?? 1;

  const handleClickMinus = () => {
    deleteProductCart(elem);
    Toastify({
      text: 'Producto Eliminado',
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
  };

  return (
    <div className='bg-white p-3 w-full flex gap-4 border-2  shadow-2xl '>
      <div>
        <img
          src={elem.thumbnail}
          alt={elem.title}
          className='max-w-[100px]  border-2  h-full object-cover'
        />
      </div>
      <div className='flex gap-2 flex-col justify-evenly w-full'>
        <h4 className='text-[21px] truncate max-w-[300px]'>{elem.title}</h4>
        <span>${elem.price}</span>
        <span className='text-blue-500'>
          Subtotal: ${(elem.price * amount).toFixed(2)}
        </span>
        <div className='flex flex-row justify-between w-full items-center'>
          <span className='text-[19px] '>Amount : {elem.amount}</span>
          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <button
                className='bg-black p-2 text-white rounded-[50%]  hover:bg-slate-800 transition-all'
                onClick={() => pushProductCart(elem)}
              >
                <img src='/plus.png' alt='+' className='max-w-[30px]' />
              </button>
              <button
                className='bg-black p-2 text-white rounded-[50%] hover:bg-slate-800 transition-all'
                onClick={() => minusProductCart(elem)}
              >
                <img src='/minus.png' alt='-' className='max-w-[30px]' />
              </button>
            </div>
            <button
              className='bg-black p-3 rounded-3xl text-white
             hover:bg-slate-800 transition-all'
              onClick={handleClickMinus}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
