import { z } from 'zod'
import { passwordRegex, usernameRegex } from '@/constants/index'

const signupSchema = z.object({
  username: z
    .string()
    .min(3, "too short, less than 3 characters")
    .max(15, "too long, more than 15 characters")
    .regex(usernameRegex, "Username must start with a letter,It can include letters, numbers, and special characters but should not contain space"),
  email: z
    .string()
    .email("Invalid email address")
    .transform((val) => val.toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one special character")
});

const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .transform((val) => val.toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one special character")
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;

export { signupSchema, loginSchema };
