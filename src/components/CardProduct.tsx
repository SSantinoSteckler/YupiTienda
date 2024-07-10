import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';
import { StarRating } from './StarRating';

type CardProductProps = {
  elem: Product;
};

export const CardProduct: React.FC<CardProductProps> = ({ elem }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${elem.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className='p-5 flex flex-col gap-1 rounded-md border-2 justify-between'>
        <img src={elem.thumbnail} alt={elem.title} className='w-full' />
        <div className='flex flex-col justify-between items-start'>
          <h3 className='text-lg truncate w-full'>{elem.title}</h3>
          <p className='text-lg'>${elem.price}</p>
        </div>

        <p className='text-gray-500'>{elem.category}</p>
        <div className='flex items-center gap-2'>
          <StarRating rating={elem.rating ?? 0} maxRating={5} />
          <p className='text-base mt-1'>{elem.rating}</p>
        </div>

        <div className='border-t-2 flex items-center cursor-pointer p-2'>
          <span
            className='flex items-center flex-row-reverse gap-1 mt-2 hover:text-gray-500 transition-all'
            onClick={handleCardClick}
          >
            Ver más
            <img src='/sort.png' className='w-6 h-6' alt='sort' />
          </span>
        </div>
      </div>
    </div>
  );
};
