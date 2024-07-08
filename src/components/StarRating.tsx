// StarRating.tsx

import React from 'react';

interface StarRatingProps {
  rating: number; // Rating del producto (de 1 a 5)
  maxRating: number; // Máximo rating posible (generalmente 5)
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating,
}) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className='text-yellow-400 text-4xl'>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className='text-gray-300 text-4xl'>
          ★
        </span>
      );
    }
  }

  return <div>{stars}</div>;
};
