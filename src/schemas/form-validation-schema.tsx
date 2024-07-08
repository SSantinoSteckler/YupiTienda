import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'Name cannot be empty.',
    })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Name must contain only letters and spaces.',
    })
    .min(3, {
      message: 'Name must be at least 3 characters long.',
    })
    .max(200, {
      message: 'Name must be less than 200 characters long.',
    }),
  lastname: z
    .string()
    .nonempty({
      message: 'Last name cannot be empty.',
    })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Last name must contain only letters and spaces.',
    })
    .min(3, {
      message: 'Last name must be at least 3 characters long.',
    })
    .max(200, {
      message: 'Last name must be less than 200 characters long.',
    }),
  email: z
    .string()
    .nonempty({
      message: 'Email cannot be empty.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  phone: z
    .string()
    .nonempty({
      message: 'Phone number cannot be empty.',
    })
    .regex(/^\d+$/, {
      message: 'Phone number must contain only digits.',
    })
    .min(10, {
      message: 'Phone number must be at least 10 digits long.',
    })
    .max(15, {
      message: 'Phone number must be less than 15 digits long.',
    }),
  zip: z
    .string()
    .nonempty({
      message: 'Zip code cannot be empty.',
    })
    .length(4, {
      message: 'Zip code must be exactly 4 digits long.',
    })
    .regex(/^\d+$/, {
      message: 'Zip code must contain only digits.',
    }),

  message: z
    .string()
    .nonempty({
      message: 'Message cannot be empty.',
    })
    .min(10, {
      message: 'Message must be at least 10 characters long.',
    })
    .max(1000, {
      message: 'Message must be less than 1000 characters long.',
    }),
  shipment: z.string().nonempty({ message: 'Please select a shipment option' }),
});
