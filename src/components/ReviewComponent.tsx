import { ElemReview } from '../types';
import { StarRating } from './StarRating';

type ElemReviewType = {
  elem: ElemReview;
};

export const ReviewComponent = ({ elem }: ElemReviewType) => {
  return (
    <div className='p-4 border-2 w-[58%] rounded-md shadow-xl   '>
      <div className='flex items-center gap-2'>
        <div>
          <img src='/user-circle.png' alt='user' className='max-w-[40px]' />
        </div>
        <div className='flex flex-col '>
          <span className='font-bold'>{elem.reviewerName}</span>
          <span>{elem.reviewerEmail}</span>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <StarRating rating={elem.rating} maxRating={6}></StarRating>
        <p className='text-[20px]'>{elem.comment}</p>
      </div>
    </div>
  );
};