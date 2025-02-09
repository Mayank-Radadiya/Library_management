import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signUpSchema = z.object({
  email: z.string().email().nonempty("University Email ID is required"),
  fullName: z.string().min(3),
  universityId: z
    .string()
    .length(10)
    .nonempty("University ID is required")
    .regex(/^\d{10}$/, "Must be exactly 10 digits"),
  password: z.string().min(6),
});
