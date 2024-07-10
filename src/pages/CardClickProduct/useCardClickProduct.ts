import { useAppStore } from '../../stores/useAppStore';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const useCardClickProduct = () => {
  const navigate = useNavigate();
  const products = useAppStore((state) => state.productsAll);
  const productCart = useAppStore((state) => state.productCart);
  const pushProductCart = useAppStore((state) => state.pushProductCart);
  const minusProductCart = useAppStore((state) => state.minusProductCart);
  const { id } = useParams<{ id?: string }>();
  const parsedId = parseInt(id ?? '');
  const MySwal = withReactContent(Swal);

  const product = products.find((elem) => elem.id === parsedId);
  const productAdd = productCart.find((elem) => elem.id === product?.id);
  const amountProduct = productAdd?.amount ?? 0;

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  const handleClickPlus = () => {
    if (product) {
      pushProductCart(product);
      MySwal.fire({
        title: `Added Product! `,
        showConfirmButton: true,
        confirmButtonText: 'Accept',
        customClass: {
          confirmButton: 'my-swal-confirm-button',
        },
      });
    }
  };
  const handleClickMinus = () => {
    if (product && amountProduct > 0) {
      minusProductCart(product);
      MySwal.fire({
        title: `reduced product!${amountProduct - 1}`,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'my-swal-confirm-button',
        },
      });
    }
  };
  const descuent = useMemo(() => {
    if (product?.price && product.discountPercentage) {
      return ((product.price * product.discountPercentage) / 100).toFixed(2);
    }
    return '0';
  }, [product?.price, product?.discountPercentage]);

  const discountedPrice = useMemo(() => {
    if (product?.price) {
      const priceAfterDiscount = product.price - parseFloat(descuent);
      return priceAfterDiscount.toFixed(2);
    }
  }, [product?.price, descuent]);

  const shareViaEmail = () => {
    if (product) {
      const subject = `Check out this product: ${product.title}`;
      const body = `
      Hi,

      I found this product and thought you might like it:

      ${product.title}
      ${product.description}
      Price: ${product.price}
      Discounted Price: ${discountedPrice}
      
      You can find more details at YupiTienda.com

      Best regards,
    `;

      const mailtoLink = `mailto:?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
    }
  };

  return {
    shareViaEmail,
    handleClickMinus,
    handleClickPlus,
    products,
    product,
    amountProduct,
    discountedPrice,
  };
};
