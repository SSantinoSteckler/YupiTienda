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
        className='lg:hidden w-full p-3 lg:p-7 rounded-lg bg-black hover:bg-slate-800 text-white mb-5 flex items-center justify-center text-1xl'
        onClick={handleClickOnFilters}
      >
        Filters
        <img
          src='/arrowBottom.png'
          alt='arrow-bottom'
          className='max-w-[20px] lg:max-w-[35px] ml-2'
        />
      </button>
      <div className='flex lg:flex-row gap-4 justify-center'>
        {menuFiltersOn && (
          <AsideComponent
            filters={filters}
            maxPrice={maxPrice}
            handleChangeFilters={handleChangeFilters}
            handleCategoryChange={handleCategoryChange}
            categoryNames={categoryNames}
          ></AsideComponent>
        )}

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 border-2 p-4 overflow-y-auto max-w-[1600px] w-full h-screen'>
          {iterate && valueProductExist ? (
            filteredProducts.map((elem) => (
              <CardProduct key={elem.id} elem={elem}></CardProduct>
            ))
          ) : (
            <div className='w-full h-full flex items-center justify-center'>
              <p className='text-lg sm:text-xl lg:text-2xl text-center text-black'>
                No Hay Productos
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
