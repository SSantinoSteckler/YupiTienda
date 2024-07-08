import { CardCartProduct } from '../components/CardCartProduct';
import { ModalConfirmForm } from '../components/ModalConfirmForm';
import { useAppStore } from '../stores/useAppStore';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CarritoPage = () => {
  const getProductsByCategory = useAppStore(
    (state) => state.getProductsByCategory
  );
  const getCategoryNames = useAppStore(
    (state) => state.getProductsCategoryName
  );

  const productCart = useAppStore((state) => state.productCart);

  const emptyCart = useAppStore((state) => state.emptyCart);

  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate(`/`);
  };

  const handleClickEmpty = () => {
    if (productCart) {
      emptyCart();
    }
  };

  const [formState, setFormState] = useState(false);
  const handleClickModalForm = () => {
    if (productCart) {
      setFormState(true);
    }
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(productCart.length === 0);
    window.scrollTo(0, 0);
  }, [productCart]);

  useEffect(() => {
    const fetchInitialData = async () => {
      await getCategoryNames();
    };

    fetchInitialData();
  }, [getCategoryNames, getProductsByCategory]);

  const total = useMemo(() => {
    if (productCart) {
      return productCart.reduce(
        (acc, elem) => acc + (elem?.amount ?? 0) * elem.price,
        0
      );
    }
  }, [productCart]);

  return (
    <section className='p-4 flex justify-center bg-cartfondo bg-cover relative '>
      <div className='max-w-[1100px] bg-white w-full flex flex-row gap-2 border-2 rounded-md p-4 shadow-xl my-28'>
        <div className='grid grid-cols-1 gap-4 max-w-[60%] w-full  bg-black p-4  overflow-y-scroll h-[970px]'>
          {productCart.length ? (
            <div className='flex flex-col gap-3 '>
              {productCart.map((elem) => (
                <CardCartProduct key={elem.id} elem={elem}></CardCartProduct>
              ))}
            </div>
          ) : (
            <div>
              <p className='text-white text-3xl text-center flex flex-row-reverse items-center gap-1 justify-center m-5'>
                No products in cart
                <img
                  src='/shopping-cart.png'
                  alt='cart'
                  className='max-w-[40px]'
                />
              </p>
            </div>
          )}
        </div>
        <div className='flex items-end justify-between max-w-[60%] w-full p-2 flex-col'>
          <div className='flex flex-col justify-end gap-1 w-full'>
            <h3 className='font-bold text-[17px]'>Terminos y Condiciones</h3>
            <div className=' overflow-y-auto h-[400px] border-2 p-2 text-[12px]'>
              <p>
                Terms and Conditions of Sale By making a purchase at YupiTienda,
                you agree to the following terms and conditions: General
                Conditions The products and services offered are subject to
                availability and may be withdrawn at any time without prior
                notice. We reserve the right to refuse any order for any reason.
                Prices and Payments All prices are in US dollars (USD) and may
                change without notice. Payments must be made using the methods
                indicated during the purchase process. We accept credit cards,
                PayPal, and bank transfers. We reserve the right to refuse
                certain payment methods. Shipping and Delivery We ship to the
                United States, Canada, and Mexico. Delivery times are estimated
                and may vary depending on the location. Standard shipping
                usually takes between 5 to 7 business days. Shipping costs are
                calculated at checkout and may vary based on the destination and
                weight of the package. Free shipping on orders over $100 USD.
                Returns and Refunds We accept returns within 30 days of
                delivery, provided the item is in its original condition and
                with intact packaging. Refunds will be processed using the same
                payment method used for the purchase and may take up to 10
                business days to reflect in your account. Warranty and Liability
                Our products come with a 1-year warranty covering manufacturing
                defects. We are not responsible for damages caused by misuse of
                the products. Privacy and Data Protection We are committed to
                protecting your personal information and using it solely to
                process your order and improve your shopping experience. We will
                not share your information with third parties without your
                consent, except when necessary to process your order.
                Modifications to the Terms and Conditions We reserve the right
                to modify these terms and conditions at any time. Modifications
                will be effective immediately upon posting on our website.
                Contact If you have any questions or concerns about these terms
                and conditions, you can contact us via email at
                support@yupitienda.com or by calling +1 (800) 123-4567. By
                completing your purchase, you confirm that you have read,
                understood, and accepted these terms and conditions.
              </p>
            </div>
            <div className='flex gap-2 justify-end mt-3'>
              <button
                className='bg-black text-white w-full p-4 rounded-md hover:bg-gray-800 transition-all'
                onClick={handleClickReturn}
              >
                Return Home
              </button>
              <button
                className='bg-black text-white w-full p-4 rounded-md hover:bg-gray-800 transition-all disabled:opacity-15 disabled:cursor-default disabled:hover:bg-black'
                onClick={handleClickEmpty}
                disabled={buttonDisabled}
              >
                Empty Cart
              </button>
            </div>
          </div>

          <div className='flex w-full justify-end flex-col'>
            <div className='flex flex-col p-3 justify-end gap-2 cursor-pointer'>
              <img src='/visa.png' alt='tarjeta1' className='max-w-[70px]' />
              <img
                src='/american-express.png'
                alt='tarjeta2'
                className='max-w-[70px]'
              />
              <img
                src='/internet.png'
                alt='tarjeta3'
                className='max-w-[70px]'
              />
              <img src='/paypal.png' alt='tarjeta3' className='max-w-[70px]' />
            </div>
            <div className='flex flex-row justify-between  p-4'>
              <span className='text-2xl'>Total:</span>
              <span className='text-2xl font-bold'>${total?.toFixed(2)}</span>
            </div>
            <button
              className='bg-black text-white p-5 cursor-pointer disabled:opacity-15 disabled:cursor-default disabled:hover:bg-black rounded-md w-full flex flex-row justify-center items-center gap-1 transition-all hover:bg-green-700'
              onClick={handleClickModalForm}
              disabled={buttonDisabled}
            >
              Buy Products
              <img
                src='/shopping-bag.png'
                alt='bag'
                className='max-w-[30px] hover:text-black'
              />
            </button>
            {formState && (
              <ModalConfirmForm setFormState={setFormState}></ModalConfirmForm>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
