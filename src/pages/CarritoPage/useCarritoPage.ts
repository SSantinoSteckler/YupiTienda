import { useAppStore } from '../../stores/useAppStore';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const useCarritoPage = () => {
  const productCart = useAppStore((state) => state.productCart);
  const emptyCart = useAppStore((state) => state.emptyCart);
  const navigate = useNavigate();
  const getProductsByCategory = useAppStore(
    (state) => state.getProductsByCategory
  );
  const getCategoryNames = useAppStore(
    (state) => state.getProductsCategoryName
  );
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchInitialData = async () => {
      await getCategoryNames();
    };

    fetchInitialData();
  }, [getCategoryNames, getProductsByCategory]);

  const handleClickReturn = () => {
    navigate(`/`);
  };

  const handleClickEmpty = () => {
    if (productCart) {
      emptyCart();
      MySwal.fire({
        title: `Empty cart! `,
        showConfirmButton: true,
        confirmButtonText: 'Accept',
        customClass: {
          confirmButton: 'my-swal-confirm-button',
        },
      });
    }
  };

  const [formState, setFormState] = useState(false);

  const handleClickModalForm = () => {
    if (productCart.length > 0) {
      setFormState(true);
    }
  };

  const total = useMemo(() => {
    if (productCart) {
      return productCart.reduce(
        (acc, elem) => acc + (elem?.amount ?? 0) * elem.price,
        0
      );
    }
  }, [productCart]);

  return {
    total,
    formState,
    handleClickModalForm,
    handleClickReturn,
    handleClickEmpty,
    setFormState,
    productCart,
  };
};
