import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../../schemas/form-validation-schema';
import { useAppStore } from '../../stores/useAppStore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TypeSetFormState } from './ModalConfirmForm';

type Inputs = {
  name: string;
  lastname: string;
  phone: string;
  zip: string;
  email: string;
  message: string;
  shipment: string;
};

export const useModalConfirmForm = ({ setFormState }: TypeSetFormState) => {
  const MySwal = withReactContent(Swal);

  const emptyCart = useAppStore((state) => state.emptyCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const handleClickConfirm = () => {
    if (isValid) {
      emptyCart();
      setFormState(false);
      let timerInterval: NodeJS.Timeout;
      MySwal.fire({
        title: 'An email will arrive in your mailbox',
        html: 'Purchase Getting Concrete <b></b> milliseconds.',
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup()?.querySelector('b');
          if (timer) {
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          }
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
          MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Purchase Completed!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return {
    register,
    handleSubmit,
    handleClickConfirm,
    errors,
  };
};
