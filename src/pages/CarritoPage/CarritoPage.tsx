import { CardCartProduct } from '../../components/CardCartProduct/CardCartProduct';
import { ModalConfirmForm } from '../../components/ModalConfirmForm/ModalConfirmForm';
import { useCarritoPage } from './useCarritoPage';

export const CarritoPage = () => {
  const {
    total,
    formState,
    handleClickModalForm,
    handleClickReturn,
    handleClickEmpty,
    setFormState,
    productCart,
  } = useCarritoPage();

  return (
    <section className='p-4 flex justify-center bg-cartfondo bg-cover relative'>
      <div className='max-w-[1100px] bg-white w-full flex flex-col md:flex-row gap-2 border-2 rounded-md p-4 shadow-xl my-28'>
        <div className='w-full md:max-w-[60%] bg-black p-4 overflow-y-auto md:overflow-y-scroll h-[600px] md:h-[970px]'>
          {productCart.length ? (
            <div className='flex flex-col gap-3'>
              {productCart.map((elem) => (
                <CardCartProduct key={elem.id} elem={elem} />
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <p className='text-white text-2xl md:text-3xl flex items-center gap-1'>
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
        <div className='w-full md:max-w-[40%] p-4 flex flex-col justify-between'>
          <div className='flex flex-col gap-4 h-full'>
            <div className='overflow-y-auto border-2 p-2 text-[10px] md:text-[12px] h-[400px] md:h-[600px]'>
              <p className='text-black'>
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
            <div className='flex gap-2 justify-end'>
              <button
                className='bg-black text-white w-full p-2 md:p-4 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-base'
                onClick={handleClickReturn}
              >
                Return Home
              </button>
              <button
                className={`bg-black text-white w-full p-2 md:p-4 rounded-md hover:bg-gray-800 text-xs md:text-base ${
                  productCart.length === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={handleClickEmpty}
                disabled={productCart.length === 0}
              >
                Empty Cart
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center mt-4'>
            <div className='flex gap-2'>
              <img
                src='/visa.png'
                alt='visa'
                className='max-w-[50px] md:max-w-[70px]'
              />
              <img
                src='/american-express.png'
                alt='american express'
                className='max-w-[50px] md:max-w-[70px]'
              />
              <img
                src='/internet.png'
                alt='internet'
                className='max-w-[50px] md:max-w-[70px]'
              />
              <img
                src='/paypal.png'
                alt='paypal'
                className='max-w-[50px] md:max-w-[70px]'
              />
            </div>
            <div className='flex justify-between w-full p-4'>
              <span className='text-xl md:text-2xl'>Total:</span>
              <span className='text-xl md:text-2xl font-bold'>
                ${total?.toFixed(2)}
              </span>
            </div>
            <button
              className={`bg-black text-white p-4 md:p-5 rounded-md w-full flex items-center justify-center gap-1 hover:bg-green-700 text-xs md:text-base ${
                productCart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleClickModalForm}
              disabled={productCart.length === 0}
            >
              Buy Products
              <img
                src='/shopping-bag.png'
                alt='shopping bag'
                className='max-w-[20px] md:max-w-[30px] hover:text-black'
              />
            </button>
            {formState && <ModalConfirmForm setFormState={setFormState} />}
          </div>
        </div>
      </div>
    </section>
  );
};
