import { CategoryName } from '../types';
import { useNavigate } from 'react-router-dom';

type ElemCategoryCard = {
  elem: CategoryName;
};

export const CategoryCard = ({ elem }: ElemCategoryCard) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/category/${elem.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleClick}
      className='border-4 p-5 flex justify-center items-center w-full shadow-2xl cursor-pointer h-[250px] hover:bg-black hover:scale-110 hover:text-white transition font-semibold text-black bg-white hover:border-white hover:border-8'
    >
      <h3 className='text-xl md:text-xl lg:text-lg text-center'>{elem.name}</h3>
    </div>
  );
};
