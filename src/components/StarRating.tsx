import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating,
}) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className='text-yellow-400 text-base lg:text-2xl'>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className='text-gray-300 text-base lg:text-2xl'>
          ★
        </span>
      );
    }
  }

  return <div className='flex'>{stars}</div>;
};
