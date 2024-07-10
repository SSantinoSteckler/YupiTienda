import { useState, useEffect } from 'react';
import { useAppStore } from '../../stores/useAppStore';
import { useNavigate, useParams } from 'react-router-dom';

export const useCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const products = useAppStore((state) => state.productsAll);
  const categoryNames = useAppStore((state) => state.productsCategoryName);
  const getCategoryNames = useAppStore(
    (state) => state.getProductsCategoryName
  );
  const getProductsByCategory = useAppStore(
    (state) => state.getProductsByCategory
  );
  const [menuFiltersOn, setMenuFiltersOn] = useState(true);
  const handleClickOnFilters = () => {
    setMenuFiltersOn(!menuFiltersOn);
  };

  const maxPrice = () => {
    const result = products.reduce(
      (max, product) => (product.price > max ? product.price : max),
      0
    );
    return result;
  };

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

  useEffect(() => {
    const fetchInitialData = async () => {
      await getCategoryNames();
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
    };
    fetchInitialData();
  }, [getCategoryNames, slug, categoryNames.length]);

  const [iterate, setIterate] = useState(false);

  const [valueProductExist, setValueProductsExist] = useState(false);

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

  useEffect(() => {
    const filtered = () => {
      let updateProducts = products.filter(
        (elem) => elem.price > filters.price
      );

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
    filtered();
  }, [products, filters]);

  return {
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
  };
};
