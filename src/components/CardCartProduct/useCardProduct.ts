import { useAppStore } from '../../stores/useAppStore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ElemTypeProductCart } from './CardCartProduct';

export const useCardProduct = ({ elem }: ElemTypeProductCart) => {
  const deleteProductCart = useAppStore((state) => state.deleteProductCart);
  const pushProductCart = useAppStore((state) => state.pushProductCart);
  const minusProductCart = useAppStore((state) => state.minusProductCart);

  const amount = elem.amount ?? 1;

  const MySwal = withReactContent(Swal);
  const handleClickMinus = () => {
    deleteProductCart(elem);
    MySwal.fire({
      title: `Delete product!`,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'my-swal-confirm-button',
      },
    });
  };
  return {
    handleClickMinus,
    amount,
    pushProductCart,
    minusProductCart,
  };
};
