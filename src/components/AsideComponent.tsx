import React from 'react';

type AsideComponentProps = {
  filters: {
    price: number;
    rating: number;
    stock: number;
    search: string;
  };
  maxPrice: () => number;
  handleChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categoryNames: { slug: string }[];
};

export const AsideComponent: React.FC<AsideComponentProps> = ({
  filters,
  maxPrice,
  handleChangeFilters,
  handleCategoryChange,
  categoryNames,
}) => {
  return (
    <aside className='bg-slate-100 border-2 lg:w-[22%] rounded-lg p-4 lg:p-5 flex flex-col gap-4 fixed bottom-0 w-full h-[30%] lg:h-auto overflow-y-auto lg:static z-10'>
      <div className='flex flex-col items-start'>
        <label htmlFor='price' className='text-lg lg:text-2xl'>
          Price
        </label>
        <div className='flex w-full gap-3 items-center'>
          <input
            type='range'
            id='price'
            name='price'
            min={0}
            value={filters.price}
            max={maxPrice()}
            className='w-full cursor-pointer rounded-lg'
            onChange={handleChangeFilters}
          />
          <span className='text-base lg:text-lg'>${filters.price}</span>
        </div>
      </div>
      <hr className='border-2' />
      <div className='flex flex-col gap-2'>
        <label htmlFor='Search' className='text-lg lg:text-2xl'>
          Search
        </label>
        <input
          type='text'
          name='search'
          value={filters.search}
          className='p-3 lg:p-4 rounded-md border-2'
          placeholder='Search Product'
          onChange={handleChangeFilters}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='Category' className='text-lg lg:text-2xl'>
          Category
        </label>
        <select
          className='w-full p-3 lg:p-4 rounded-md border-2 capitalize'
          onChange={handleCategoryChange}
        >
          <option value=''>--Selected--</option>
          {categoryNames.map((elem) => (
            <option
              className='bg-white p-3 lg:p-4 rounded-lg cursor-pointer hover:bg-slate-400 transition capitalize'
              key={elem.slug}
              value={elem.slug}
            >
              {elem.slug}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
        <div>
          <label htmlFor='rating' className='text-lg lg:text-2xl'>
            Rating
          </label>
          <input
            type='number'
            name='rating'
            placeholder='Rating Stars'
            className='p-3 lg:p-4 rounded-md border-2 w-full'
            onChange={handleChangeFilters}
            max={5}
            min={0}
            value={filters.rating}
          />
        </div>
        <div>
          <label htmlFor='stock' className='text-lg lg:text-2xl'>
            Stock
          </label>
          <input
            name='stock'
            type='number'
            placeholder='Stock Amount'
            className='p-3 lg:p-4 rounded-md border-2 w-full'
            onChange={handleChangeFilters}
            value={filters.stock}
            max={100}
            min={0}
          />
        </div>
      </div>
    </aside>
  );
};
