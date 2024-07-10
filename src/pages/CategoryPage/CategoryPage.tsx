import { CardProduct } from '../../components/CardProduct';
import { AsideComponent } from '../../components/AsideComponent';
import { useCategoryPage } from './useCategoryPage';

export const CategoryPage = () => {
  const {
    handleCategoryChange,
    handleChangeFilters,
    handleClickOnFilters,
    maxPrice,
    valueProductExist,
    filteredProducts,
    iterate,
    filters,
    categoryNames,
    menuFiltersOn,
  } = useCategoryPage();

  return (
    <section className='p-4 lg:p-8 min-h-screen mt-16 mb-24'>
      <button
        className=' lg:hidden w-full p-3 lg:p-7 rounded-lg bg-black hover:bg-slate-800 text-white mb-5 flex items-center flex-row text-1xl md:text-2xl'
        onClick={handleClickOnFilters}
      >
        Filters
        <img
          src='/arrowBottom.png'
          alt='arrow-bottom'
          className='max-w-[20px] lg:max-w-[35px]'
        />
      </button>
      <div className='flex lg:flex-row gap-4 justify-center '>
        {menuFiltersOn && (
          <AsideComponent
            filters={filters}
            maxPrice={maxPrice}
            handleChangeFilters={handleChangeFilters}
            handleCategoryChange={handleCategoryChange}
            categoryNames={categoryNames}
          ></AsideComponent>
        )}

        <div
          className='grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-3 border-2 p-4 overflow-y-auto max-w-[1600px] w-full h-screen
         '
        >
          {iterate && valueProductExist ? (
            filteredProducts.map((elem) => (
              <CardProduct key={elem.id} elem={elem}></CardProduct>
            ))
          ) : (
            <div className='w-full h-full justify-center items-center relative'>
              <p className='text-black text-lg sm:text-2xl lg:text-4xl'>
                No Hay Productos
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
