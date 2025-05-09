// src/schemas/authSchemas.js
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password:z.string()
  .min(8,"password must be atleast 8 characters")
  .regex(/[A-Z]/,'Password must contain atleast 1 uppercase letter')
  .regex(/[a-z]/,'password must contain atleast 1 lower case letter')
  .regex(/[0-9]/,"Password must contain atleast one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export const signupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  fatherName: z.string().min(3, { message: "Father's name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password:z.string()
  .min(8,"password must be atleast 8 characters")
  .regex(/[A-Z]/,'Password must contain atleast 1 uppercase letter')
  .regex(/[a-z]/,'password must contain atleast 1 lower case letter')
  .regex(/[0-9]/,"Password must contain atleast one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string(),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits" }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Age must be a valid number",
  }),
  gender: z.enum(["male", "female", "other"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
