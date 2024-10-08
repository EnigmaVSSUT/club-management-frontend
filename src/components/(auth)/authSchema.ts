import { z } from 'zod'

/*
password must contain atleast 8 characters , one uppercase letter , one lowercase letter and one special character
*/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

/*
uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed
*/
const fullNameRegex = /^[a-zA-Z\s'-]{3,50}$/;

const signupSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be atleast 3 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(fullNameRegex, "only uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed"),
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

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;

export { signupSchema, loginSchema };
