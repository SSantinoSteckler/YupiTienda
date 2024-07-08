import { useAppStore } from '../stores/useAppStore';
import { CardProduct } from '../components/CardProduct';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const products = useAppStore((state) => state.productsAll);
  const categoryNames = useAppStore((state) => state.productsCategoryName);
  const getCategoryNames = useAppStore(
    (state) => state.getProductsCategoryName
  );
  const getProductsByCategory = useAppStore(
    (state) => state.getProductsByCategory
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      await getCategoryNames();
    };

    fetchInitialData();
  }, [getCategoryNames]);

  const [iterate, setIterate] = useState(false);
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const result = categoryNames.find((elem) => elem.slug === slug);
      if (result) {
        await getProductsByCategory(result);
        setIterate(true);
      }
    };

    if (categoryNames.length > 0) {
      fetchProductsByCategory();
    }
  }, [slug, getProductsByCategory, categoryNames]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [filters, setFilters] = useState({
    price: 0,
    rating: 0,
    stock: 0,
    search: '',
  });

  const handleChangeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const [valueProductExist, setValueProductsExist] = useState(false);

  const filtered = () => {
    let updateProducts = products.filter((elem) => elem.price > filters.price);

    if (filters.search) {
      updateProducts = updateProducts.filter((elem) =>
        elem.title
          .toLocaleLowerCase()
          .includes(filters.search.toLocaleLowerCase())
      );
    }

    if (filters.rating) {
      updateProducts = updateProducts.filter(
        (elem) => elem.rating >= filters.rating
      );
    }

    if (filters.stock) {
      updateProducts = updateProducts.filter(
        (elem) => elem.stock >= filters.stock
      );
    }

    if (updateProducts.length === 0) {
      setValueProductsExist(false);
    } else {
      setValueProductsExist(true);
    }

    setFilteredProducts(updateProducts);
  };

  const maxPrice = () => {
    const result = products.reduce(
      (max, product) => (product.price > max ? product.price : max),
      0
    );
    return result;
  };

  useEffect(() => {
    if (filters) {
      filtered();
    }
  }, [products, filters]);

  const handleCategoryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categorySlug = e.target.value;
    const category = categoryNames.find((cat) => cat.slug === categorySlug);
    console.log(category);
    if (category) {
      await getProductsByCategory(category);
      setFilters({
        price: 0,
        rating: 0,
        stock: 0,
        search: '',
      });
      navigate(`/category/${category.slug}`);
    }
  };

  return (
    <section className='p-8 min-h-screen mt-16 mb-24'>
      <div className='flex flex-row gap-4 justify-center '>
        <aside className='bg-slate-100 border-2  w-[22%] rounded-lg p-5 flex flex-col gap-9  '>
          <div className='flex flex-col items-start '>
            <label htmlFor='price' className='text-2xl'>
              Price
            </label>
            <div className='flex w-full gap-3'>
              <input
                type='range'
                id='price'
                name='price'
                min={0}
                value={filters.price}
                max={maxPrice()}
                className='w-full cursor-pointer rounded-2xl'
                onChange={handleChangeFilters}
              />
              <span className='text-[18px]'>${filters.price}</span>
            </div>
          </div>
          <hr className='border-2' />
          <div className='flex flex-col gap-2'>
            <label htmlFor='Search' className='text-2xl'>
              Search
            </label>
            <input
              type='text'
              name='search'
              value={filters.search}
              className='p-4 rounded-md border-2 '
              placeholder='Search Product'
              onChange={handleChangeFilters}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='Category' className='text-2xl'>
              Category
            </label>
            <select
              className='w-full p-4 rounded-md border-2 capitalize'
              onChange={handleCategoryChange}
            >
              <option value=''>--Selected--</option>
              {categoryNames.map((elem) => (
                <option
                  className='bg-white p-4 rounded-lg cursor-pointer hover:bg-slate-400 transition-all capitalize'
                  key={elem.slug}
                  value={elem.slug}
                >
                  {elem.slug}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-1 gap-2 2xl:grid-cols-2'>
            <div>
              <label htmlFor='rating' className='text-[22px]'>
                Rating
              </label>
              <input
                type='number'
                name='rating'
                placeholder='Rating Stars'
                className='p-4 rounded-md border-2 w-full '
                onChange={handleChangeFilters}
                max={5}
                min={0}
                value={filters.rating}
              />
            </div>
            <div>
              <label htmlFor='stock' className='text-[22px]'>
                Stock
              </label>
              <input
                name='stock'
                type='number'
                placeholder='Stock Amount'
                className='p-4 rounded-md border-2 w-full '
                onChange={handleChangeFilters}
                value={filters.stock}
                max={100}
                min={0}
              />
            </div>
          </div>
        </aside>
        <div
          className='grid grid-cols-4 gap-3 border-2 p-4 overflow-y-auto max-w-[1600px] w-full h-screen
         '
        >
          {iterate && valueProductExist ? (
            filteredProducts.map((elem) => (
              <CardProduct key={elem.id} elem={elem}></CardProduct>
            ))
          ) : (
            <div className='w-full h-full justify-center items-center relative'>
              <p className='text-black text-5xl text-nowrap absolute left-[150%] bottom-[50%] '>
                No Hay Productos
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
