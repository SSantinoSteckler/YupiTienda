import { useAppStore } from '../../stores/useAppStore';
import { useState, useEffect } from 'react';

export const useIndexPage = () => {
  const ProductsAll = useAppStore((state) => state.productsAll);
  const CategoryNames = useAppStore((state) => state.productsCategoryName);
  const getProducts = useAppStore((state) => state.getProducts);
  const getCategoryNames = useAppStore(
    (state) => state.getProductsCategoryName
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getCategoryNames();
      await getProducts();
      setLoading(false);
    };

    fetchData();
  }, [getProducts, getCategoryNames]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return {
    ProductsAll,
    settings,
    loading,
    CategoryNames,
  };
};
