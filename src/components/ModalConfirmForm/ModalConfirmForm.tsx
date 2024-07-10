import { ErrorComponent } from '../ErrorComponent';
import { useModalConfirmForm } from './useModalConfirmForm';

export type TypeSetFormState = {
  setFormState: (state: boolean) => void;
};

export const ModalConfirmForm = ({ setFormState }: TypeSetFormState) => {
  const { register, handleSubmit, handleClickConfirm, errors } =
    useModalConfirmForm({ setFormState });

  return (
    <div className='bg-black  absolute left-0  inset-0  bg-opacity-80  w-full h-full p-1'>
      <div className='flex justify-center items-center h-full'>
        <form
          className='max-w-lg w-full flex flex-col p-5 bg-white rounded-lg shadow-md'
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className='flex flex-row gap-4   '>
            <div className='mb-4 w-full'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                First Name
              </label>
              <input
                type='text'
                id='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
                {...register('name')}
              />
              {errors.name?.message && (
                <ErrorComponent message={errors.name.message}></ErrorComponent>
              )}
            </div>
            <div className='mb-4 w-full'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                {...register('lastname')}
              />
              {errors.lastname?.message && (
                <ErrorComponent
                  message={errors.lastname.message}
                ></ErrorComponent>
              )}
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='mb-4 w-full'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
                {...register('email')}
              />
              {errors.email?.message && (
                <ErrorComponent message={errors.email.message}></ErrorComponent>
              )}
            </div>
            <div className='mb-4 w-full'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Phone Number
              </label>
              <input
                type='text'
                id='phone'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
                {...register('phone')}
              />
              {errors.phone?.message && (
                <ErrorComponent message={errors.phone.message}></ErrorComponent>
              )}
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Zip
            </label>
            <input
              type='text'
              id='zip'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
              {...register('zip')}
            />
            {errors.zip?.message && (
              <ErrorComponent message={errors.zip.message}></ErrorComponent>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Shipment
            </label>
            <select
              id='shipment'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
              {...register('shipment')}
            >
              <option value=''>Select a shipment option</option>
              <option value='standard'>House</option>
              <option value='express'>Local</option>
            </select>
            {errors.shipment?.message && (
              <ErrorComponent
                message={errors.shipment.message}
              ></ErrorComponent>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Menssage
            </label>
            <textarea
              id='message'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
              style={{
                resize: 'none',
              }}
              {...register('message')}
            />
            {errors.message?.message && (
              <ErrorComponent message={errors.message.message}></ErrorComponent>
            )}
          </div>
          <div className='flex flex-justify-around gap-2'>
            <button
              type='submit'
              className='bg-black text-white  py-2 px-4  rounded w-full hover:bg-green-600 transition-all '
              onClick={handleClickConfirm}
            >
              Confirm Purchase
            </button>
            <button
              className='bg-black px-4 py-2 rounded text-white w-full hover:bg-red-600 transition-all'
              onClick={() => setFormState(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
