import { Product } from '../types';
import { useNavigate } from 'react-router-dom';
import { StarRating } from './StarRating';

type ElemType = {
  elem: Product;
};

export const CardProduct = ({ elem }: ElemType) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${elem.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='p-5 flex flex-col gap-1 rounded-md border-2 justify-between hover:shadow-lg transition-shadow'>
      <img
        src={elem.thumbnail}
        alt={elem.title}
        className='w-full h-48 object-cover rounded-t-md'
      />
      <div className='flex flex-col justify-between items-start p-2'>
        <h3 className='text-[16px] md:text-[18px] truncate w-[100%] font-semibold'>
          {elem.title}
        </h3>
        <p className='text-[17px] md:text-[19px] font-bold text-gray-800'>
          ${elem.price}
        </p>
      </div>

      <p className='text-sm md:text-base text-slate-500'>{elem.category}</p>
      <div className='flex flex-row items-center gap-2'>
        <StarRating rating={elem?.rating ?? 0} maxRating={5} />
        <p className='text-sm md:text-base mt-1'>{elem?.rating}</p>
      </div>

      <div className='border-t-2 flex items-center cursor-pointer p-2 mt-2'>
        <span
          className='relative top-2 flex flex-row-reverse gap-1 items-center hover:text-gray-500 transition-all'
          onClick={handleCardClick}
        >
          Ver más
          <img
            src='/sort.png'
            className='max-w-[20px] md:max-w-[30px]'
            alt='sort'
          />
        </span>
      </div>
    </div>
  );
};
